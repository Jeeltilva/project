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
import { Lawyer } from '../models/lawyer.model';
import { LawyerInt } from '../models/lawyer.model copy';

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
  selector: 'app-client-caseinfo',
  templateUrl: './client-caseinfo.component.html',
  styleUrls: ['./client-caseinfo.component.scss', '../chats/chats.component.scss']
})
export class ClientCaseinfoComponent implements OnInit,OnDestroy {

  constructor(private caseService: CaseService, private router: Router, private sanitizer: DomSanitizer) { }

  private caseSub : Subscription;
  caseData:Case;
  private id:string;
  public details:string;
  public linkedLawyer: LawyerInt;
  public linkedLawyerSub: Subscription;

  public Editor = DecoupledEditor;

  public onReady( editor ) {
      editor.ui.getEditableElement().parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
      );
  }

  orders: Order[];
  newOrderNote: string;
  displayNextOrder:boolean = false;
  displayedColumns: string[] = ['Order Date', 'Note'];


  onDetailsUpdated() {
    this.caseData.details = this.details;
    this.caseService.updateDetails(this.caseData);
  }

  newTitle: string = '';
  newNote:string = '';
  notes: Note[];
  editNote: Note;
  editNoteMode: boolean = false;


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
    this.caseService.onDeleteDoc(this.files, this.caseData._id);
    this.caseService.deletePDF(filename);
  }

  onMessage() {
    this.router.navigate(["clientChatroom"])
  }

  ngOnInit(): void {

    this.linkedLawyerSub = this.caseService.getlinkedLawyerUpdateListener().subscribe((data:LawyerInt) => {
      this.linkedLawyer = data;
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




  }

  ngOnDestroy(): void {
    this.caseSub.unsubscribe();
    this.linkedLawyerSub.unsubscribe();
  }
}
