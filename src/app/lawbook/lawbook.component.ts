import { Component, OnInit } from '@angular/core';
import { CaseService } from '../services/case.service';

@Component({
  selector: 'app-lawbook',
  templateUrl: './lawbook.component.html',
  styleUrls: ['./lawbook.component.scss', '../chats/chats.component.scss'],
})
export class LawbookComponent implements OnInit {
  public searchedKeyword: string;
  public p: number = 1;
  order: string = 'originalname';

  constructor(private caseService: CaseService) {}

  files: any;
  downloadPdf(filename, contentType) {
    this.caseService.downloadPDF(filename, contentType).subscribe((res) => {
      const file = new Blob([res], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });
  }

  ngOnInit(): void {
    this.files = this.caseService.getLawbook();
  }

  public resetPagination() {
    this.p = 1;
  }
}
