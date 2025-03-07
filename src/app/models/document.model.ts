export interface Document {
  id: string;
  title: string;
  driveUrl: string;
}

export interface Category {
  id: string;
  name: string;
  avatar: string;
  documents: Document[];
}