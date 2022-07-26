// export class FileModel {
//   name:string | undefined;
//   extension: string | undefined;
//   size: number | undefined;
//   created: string | undefined;

//   // id: number;
//   // name: string;

//   // extension: string;
//   // name: string;
//   // size: number;
//   // createdBy: string;
//   // created: string;
// }

export interface IFile{
  name:string | undefined;
  extension: string | undefined;
  fileSize: number | undefined;
  createdDate: string | undefined;
}

export interface IUploadFIle{
  name:string;
}

export interface IFileConfig {
  validExtensions: string[];
  validFileSize: number
}


