import { FileService } from 'src/app/services/file.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files-view',
  templateUrl: './files-view.component.html',
  styleUrls: ['./files-view.component.scss']
})
export class FilesViewComponent implements OnInit {

  extensionList: string[] | undefined;

  constructor(private fileService: FileService) { }

  ngOnInit(): void {

    this.fileService.getExtensionsList()
      .subscribe((data: any) => {
        this.extensionList = data;
      }, error => {
        alert(error.error);
      });



  }

}
