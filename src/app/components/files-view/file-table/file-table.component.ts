import { Component, OnInit, Input } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
import { IFile } from 'src/app/models/file-model';

@Component({
  selector: 'app-file-table',
  templateUrl: './file-table.component.html',
  styleUrls: ['./file-table.component.scss']
})
export class FileTableComponent implements OnInit {

  files!: IFile[] ;
  page: number = 1;
  pageSize: number = 2;
  totalItems : any;
  allFilesCount: number = 0;
  itemsPerPage = 2;


  @Input() extension!: string;
  @Input() paginationId!: string;


  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    if(this.extension){
      this.getAllFiles();
    }
  }



  getAllFiles(page?: any): void {
    this.fileService.getFiles(this.extension, page | this.page, this.itemsPerPage ).subscribe((data: any) => {
      this.files = data.files;
      this.allFilesCount = data.totalFiles;
    }, error => {
      alert(error.error);
    });
  }


  // mappDate(): void {
  //   this.files?.forEach(element => { element.createdDate = new Date(element.createdDate)
  //   });
  // }

}
