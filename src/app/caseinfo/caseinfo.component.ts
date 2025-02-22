import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { Case } from '../models/case.model';
import { CaseService } from '../services/case.service';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Client } from '../models/client.model';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { NotificationService } from '../services/notification.service';

export interface Order {
  id:string;
  _id?:string;
  orderDate: Date;
  orderNote?: string ;
}
export interface Note {
  _id?: string;
  title: string;
  note: string;
  createdAt: Date;
}

@Component({
  selector: 'app-caseinfo',
  templateUrl: './caseinfo.component.html',
  styleUrls: ['./caseinfo.component.scss', '../chats/chats.component.scss']
})
export class CaseinfoComponent implements OnInit,OnDestroy {

  constructor(private caseService: CaseService, private router: Router, private sanitizer: DomSanitizer, private notifyService : NotificationService) { }

  private caseSub : Subscription;
  caseData:Case;
  private id:string;
  public details:string;
  public linkedClient: Client;
  public linkedclientSub: Subscription;

  public Editor = DecoupledEditor;

  public onReady( editor ) {
      editor.ui.getEditableElement().parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
      );
  }

  onEditCase() {
    console.log(this.caseData);
    this.router.navigate(["/editcase"]);
  }

  orders: Order[];
  newOrderNote: string;
  displayNextOrder:boolean = false;
  displayedColumns: string[] = ['Order Date', 'Note', 'Action'];


  onDetailsUpdated() {
    this.caseData.details = this.details;
    this.caseService.updateDetails(this.caseData);
  }

  onNewOrder(data:NgForm) {
    if(!data.value.note) {
      data.value.note = "No Note has been added";
    }
    this.orders = this.caseData.orders.concat({id:this.caseData.stampNo, orderDate:new Date(data.value.orderDate), orderNote: data.value.note});
    this.caseData.orders = this.orders;
    this.caseService.addOrder(this.caseData._id, {id:this.caseData.stampNo, orderDate:data.value.orderDate, orderNote: data.value.note});
    data.resetForm();
    this.orders.sort(function(a, b) {
      var c:any = new Date(a.orderDate);
      var d:any = new Date(b.orderDate);
      return d-c;
  });
  if(this.orders.length == 0) {
    this.displayNextOrder =false;
  }
  else if(new Date(this.orders[0].orderDate) > new Date()) {
      this.displayNextOrder = true;
    }
    this.notifyService.showSuccess("Hearing date is added to Calender!", "Woo-Hoo");
  }

  onDeleteOrder(id) {
    this.orders = this.orders.filter(function(e) {return e._id != id});
    this.caseData.orders = this.orders;
    this.caseService.updateCase(this.caseData);
    this.orders.sort(function(a, b) {
      var c:any = new Date(a.orderDate);
      var d:any = new Date(b.orderDate);
      return d-c;
    });

    if(this.caseData.orders.length==0) {
      this.displayNextOrder =false;
    }
    else if(new Date(this.orders[0].orderDate) > new Date()) {
      this.displayNextOrder = true;
    }
  }

  newTitle: string = '';
  newNote:string = '';
  notes: Note[];
  editNote: Note;
  editNoteMode: boolean = false;

  @ViewChild('addNote') form:NgForm;
  onAddNote(data:NgForm) {
    console.log(this.form.value);
    this.notes = this.notes.concat({title: data.value.title, note:data.value.Note, createdAt: new Date()});
    console.log(this.notes);
    this.caseData.notes = this.notes;
    this.caseService.updateCase(this.caseData);
    data.resetForm();
  }

  onEditNote(data:NgForm) {
    this.editNote.title = data.value.title;
    this.editNote.note = data.value.Note;
    this.notes[this.editNote._id] = this.editNote;
    console.log(this.notes);
    this.caseData.notes = this.notes;
    this.caseService.updateCase(this.caseData);
    this.editNote = null;
    this.editNoteMode = false;
    this.newTitle = "";
    this.newNote = "";
  }

  onEditMode(data) {
    this.editNote = data;
    this.editNoteMode = true;
    this.newNote = this.editNote.note;
    this.newTitle = this.editNote.title;
  }

  onDeleteNote(id) {
    this.notes = this.caseData.notes.filter(function(e) {return e._id != id});
    this.caseData.notes = this.notes;
    this.caseService.updateCase(this.caseData);
   }

  fileToUpload: FileList = null;
  handleFileInput(files: FileList) {
    this.fileToUpload = files;
    if(this.fileToUpload.length != 0) {
    this.caseService.onUploadDoc(this.fileToUpload, this.caseData._id).subscribe((data:any)=> {
      this.files = data;
      this.caseData.docs = data;
      console.log(data);
    })
  } }

  DocColumns: string[] = ['Name', 'Size', 'Created_At', 'Actions'];
  files: any;

  onLinkClient(data:Client, id) {
    this.caseService.linkClient(data.userId, id);
    this.caseData.client = data.userId;
    this.caseService.getClient(data._id);
    this.notifyService.showSuccess(`Client ${data.firstname} linked with this case Successfully`, "");
  }

  unlink() {
    this.linkedClient = null;
    this.caseData.client = null;
    this.caseService.updateCase(this.caseData);
    this.caseService.unlinkClient();
  }
  clients$: Observable<Client[]>;
  private searchTerms = new Subject<string>();
  display: string[] = ['firstName','lastName', 'Contact', 'Email', 'Action'];



  downloadPdf(filename, contentType) {
    this.caseService.downloadPDF(filename, contentType).subscribe(
      (res) => {
        const file = new Blob([(res)], { type: "application/pdf" });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
      }
    );
  }

  deletePdf(filename) {
    this.files = this.files.filter( function(e) {
      return e.filename != filename
    })
    this.caseData.docs = this.files;
    console.log(this.files);
    console.log(this.caseData);
    this.caseService.onDeleteDoc(this.files, this.caseData._id);
    this.caseService.deletePDF(filename);
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  onMessage(){
    this.router.navigate(["/chatroom"]);
  }

  ngOnInit(): void {

    this.clients$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.caseService.searchclients(term.toLowerCase()))
    );

      this.linkedclientSub = this.caseService.getlinkedClientUpdateListener().subscribe((data:Client) => {
        this.linkedClient = data;
      });

    this.caseSub = this.caseService.getsingleCaseUpdateListener().subscribe((data:Case) => {
      this.caseData = data;
      this.details = data.details;
      this.orders = data.orders;
      this.notes = data.notes;
      this.files = data.docs;
      this.caseData.orders.sort(function(a, b) {
        var c:any = new Date(a.orderDate);
        var d:any = new Date(b.orderDate);
        return d-c;
      });
      if(new Date(this.caseData.orders[0].orderDate) > new Date()) {
        this.displayNextOrder = true;
      }
    })


    const t = this.caseService.getId()
    this.caseService.getLinkedClient(t);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.caseSub.unsubscribe();
    this.linkedclientSub.unsubscribe();
  }
}
