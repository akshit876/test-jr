export interface FileData {
  type: 'file' | 'folder';
  name: string;
  meta?: string;
  data?: FileData[];
}

export interface Files {
  type: 'folder';
  name: string;
  data: FileData[];
}
