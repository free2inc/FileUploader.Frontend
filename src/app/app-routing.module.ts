import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilesViewComponent } from './components/files-view/files-view.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';

const routes: Routes = [
  {
    path: "",
    component: FilesViewComponent
  },
  {
    path: "files",
    component: FilesViewComponent
  },
  {
    path: "upload",
    component: UploadFileComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
