import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Addcase } from '../models/addcase.model';
import { Subject } from 'rxjs/internal/Subject';
import { ActivatedRoute, Router } from '@angular/router';
import { Case } from "../models/case.model";
import { Client } from '../models/client.model';


const apiUrl = 'http://localhost:4000/api/';
@Injectable({
  providedIn: 'root'
})
export class CaseService {

  Cases = new Subject<Case[]>();
  singleCase = new Subject<Case>();
  Caseid:string;
  linkedClient = new Subject<Client>();

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  private handleError(error: HttpErrorResponse): any {
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.message}`);
    return throwError(
      'Something bad happened; please try again later.');
  }

  addCase(addcase: Addcase) {
    this.http.post<Addcase>(apiUrl + 'addcase', addcase).pipe(
      catchError(this.handleError)
    )
    .subscribe((res:any) => {
      this.Caseid = res._id; 
      this.singleCase.next(res);
      console.log('success');
    }, (err: any) => {
      console.log(err);
    });
  }

  getCases() {
    this.http.get<Case[]>(apiUrl+ 'cases').pipe(
      map((data:any) => {
        if(data) {
          return data;
        }
        else {
          catchError(this.handleError)
        }
      })
    ).subscribe( (data:Case[]) => {
      this.Cases.next(data);
    }, (err:any) => {
      console.log(err);
    }); 
  }

  getpreadmittedCases() {
    this.http.get<Case[]>(apiUrl+ 'preadmittedcases').pipe(
      map((data:any) => {
        if(data) {
          return data;
        }
        else {
          catchError(this.handleError)
        }
      })
    ).subscribe( (data:Case[]) => {
      this.Cases.next(data);
    }, (err:any) => {
      console.log(err);
    }); 
  }

  getadmittedCases() {
    this.http.get<Case[]>(apiUrl+ 'admittedcases').pipe(
      map((data:any) => {
        if(data) {
          return data;
        }
        else {
          catchError(this.handleError)
        }
      })
    ).subscribe( (data:Case[]) => {
      this.Cases.next(data);
    }, (err:any) => {
      console.log(err);
    }); 
  }

  updateDetails(caseData) {
    this.http.patch<Case>(apiUrl + 'case/' + caseData._id, {details: caseData.details}).pipe(
      catchError(this.handleError)
    )
    .subscribe((data:Case) => {
      this.singleCase.next(data);
      this.router.navigate(["/caseinfo"]);
    }, (err:any) => {
      console.log(err);
    }); 
  }

  updateCase(caseData) {
    this.http.patch<Case>(apiUrl + 'editcase/' + caseData._id, caseData).pipe(
      catchError(this.handleError)
    ) .subscribe((data:Case) => {
      this.singleCase.next(data);
    }, (err) => {
      console.log(err);
    }); 
  }

  deleteCase(id) {
    this.http.delete<any>(apiUrl + 'case/' + id).pipe(
      catchError(this.handleError)
    ).subscribe((data) => {
      alert(data.message);
    });
  }

  getdisposedCases(){
    this.http.get<Case[]>(apiUrl+ 'disposedcases').pipe(
      map((data:any) => {
        if(data) {
          return data;
        }
        else {
          catchError(this.handleError)
        }
      })
    ).subscribe( (data:Case[]) => {
      this.Cases.next(data);
    }, (err:any) => {
      console.log(err);
    }); 
  }

  disposeCase(_id) {
    this.http.patch<any>(apiUrl+'makedispose', {_id}).pipe(
      catchError(this.handleError)
    ).subscribe((data) => {
      console.log(data);
    })
  }

  addOrder(id,data:any) {
    this.http.patch<Case>(`${apiUrl}case/order/${id}`,{order:data}).subscribe((CaseData:Case) => {
      this.singleCase.next(CaseData);
    }, (err:any) => {
      alert('Please upload an pdf');
    }); 
  }

  onUploadDoc(file:FileList, id){
    const formData: FormData = new FormData();
    const files = file
    for (let index = 0; index < files.length; index++) {
      formData.append('file', files.item(index), files.item(index).name); 
    }
    return this.http.post<any>(apiUrl+"uploadPdf/"+id,formData).pipe(
      catchError(this.handleError)
    )
  }

  onDeleteDoc(files, id) {
    this.http.patch<Case>(apiUrl+'updateDoc/'+id, files).subscribe((data:Case) => {
      this.singleCase.next(data);
    }, (err:any) => {
      console.log(err)
    })
  }
  unlinkClient(){
    this.linkedClient.next(null)
  }

  setSingleCaseDetails(caseData) {
    this.singleCase.next(caseData);
  }

  setCases(data) {
    this.Cases.next(data);
  }
  
  setLinkedClient(data) {
    this.linkedClient.next(data);
  }

  getCaseData(id) {
    this.Caseid = id;
    this.http.get<Case>(apiUrl + 'case/' + id).pipe(
      catchError(this.handleError)
    ).subscribe((data:Case) => {
      this.singleCase.next(data);
    });
  }

  linkClient(_id, id) {
    this.http.patch<Case>(`${apiUrl}linkClient/${id}`, {_id}).pipe(
      catchError(this.handleError)
    ) .subscribe((data:Case) => {
      this.singleCase.next(data);
    }, (err:any) => {
      console.log(err);
    }); 
  }

  getLinkedClient(id) {
    this.http.get<Client>(`${apiUrl}getLinkedClient/${id}`).pipe(
      catchError(this.handleError)
    ) .subscribe((data:Client) => {
      this.linkedClient.next(data);
    }, (err:any) => {
      console.log(err);
    }); 
  }
  
  getClient(id) {
    this.http.get<Client>(`${apiUrl}getClient/${id}`).pipe(
      catchError(this.handleError)
    ) .subscribe((data:Client) => {
      this.linkedClient.next(data);
      console.log(data)
    }, (err:any) => {
      console.log(err);
    }); 
  }

  searchclients(term): Observable<Client[]> {
    console.log(term)
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Client[]>(`${apiUrl}getClients?firstname=${term}`).pipe(
      tap(x => console.log(x)),
       catchError(this.handle<Client[]>('searchClients', []))
    );
  }
  private handle<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  getsingleCaseUpdateListener(){
    return this.singleCase.asObservable();
  }

  getlinkedClientUpdateListener(){
    return this.linkedClient.asObservable();
  }

  getId(){
    return this.Caseid;
  }

  getCasesUpdateListener() {
    return this.Cases.asObservable();
  }

  downloadPDF(filename, filetype): any {
    return this.http.get(apiUrl+ 'file/' + filename,
    { responseType: 'blob' });
  }

  deletePDF(filename) {
    this.http.delete<any>(apiUrl + 'deletefile/' + filename).pipe(
      catchError(this.handleError)
    ).subscribe((data) => {
      alert(data.message);
    });
  }
  
}
