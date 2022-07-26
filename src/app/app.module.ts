import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileTableComponent } from './components/files-view/file-table/file-table.component';
import { FilesViewComponent } from './components/files-view/files-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { HttpClientModule,  } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'


@NgModule({
  declarations: [
    AppComponent,
    FileTableComponent,
    FilesViewComponent,
    UploadFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
