import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators, FormBuilder, ReactiveFormsModule  } from '@angular/forms';
import { IFileConfig } from 'src/app/models/file-model';



@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  form!: FormGroup;
  file!: File;

  isUploadedToServer: boolean = false;
  notValidFileExtension: boolean = false;
  notValidFileSize: boolean = false;

  fileExtension: string = '';

  fileConfig!: IFileConfig;

  constructor(
    private fileService: FileService,
    ) { }

  ngOnInit(): void {
    this.fileService.getFileConfigs()
      .subscribe((data: any) => {
        this.fileConfig = data;
      }, error => {
        alert(error.error);
      });
      this.form = new FormGroup({});

  }

  onFileSelected(event: any) {
    const file:File = event.target.files[0];
    this.isUploadedToServer = false;
    this.notValidFileExtension = false;
    this.notValidFileSize = false;

    if (file) {
      this.fileExtension = "." + file.name.split('.').pop()!;


      this.notValidFileExtension = !this.fileConfig.validExtensions.includes(this.fileExtension);
      this.notValidFileSize = file.size > this.fileConfig.validFileSize;

      if(this.notValidFileExtension && this.notValidFileSize)
      {
        return
      }

      this.file = file;
    }
  }

  submit() {
    this.fileService.uploadFile(this.file)
      .subscribe(() => {
        this.isUploadedToServer = true;
        this.form.reset();
      }, error => {
        alert(error.error);
      });
  }




}
