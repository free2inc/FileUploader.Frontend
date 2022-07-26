import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IFile } from 'src/app/models/file-model';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private baseUrl = environment.baseUrl + 'file/';



  constructor(private http: HttpClient) { }

  getExtensionsList(): Observable<string[]> {
    var url = this.baseUrl + 'getextensions';
    return this.http.get<string[]>(url)
  }

  getFileConfigs(): Observable<any> {
    var url = this.baseUrl + 'GetFileConfigs';
    return this.http.get(url)
  }

  getAllFilesCount(extension: string): Observable<any> {

    let params = new HttpParams().set('fileExtension', extension)

    var url = this.baseUrl + 'GetAllFileTypeCount';
    return this.http.get(url, {params})
  }

  getFiles(extension: string, pageNumber?: number, pageSize?: number): Observable<any> {
    let params = new HttpParams().set('fileExtension', extension);
    if(pageNumber){
      params = params.append('pageNumber', pageNumber )
    }
    if(pageSize){
      params = params.append('PageSize', pageSize);
    }
    return this.http.get(this.baseUrl, {params})
  }

  uploadFile(file: File): Observable<any> {
    var formData = new FormData();
    formData.append("file", file);
    var url = this.baseUrl + 'UploadFileAsync';
    return this.http.post(url, formData);
  }


}
