import { Injectable } from '@angular/core';
import { Category } from '../models/document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private categories: Category[] = [
    {
      id: '1',
      name: 'Tài liệu N5',
      avatar: 'https://dungmori.b-cdn.net/cdn/course/small/1733791122_481455_67471.png',
      documents: [
        {
          id: '1',
          title: 'Bài 1',
          driveUrl: 'https://cmcu.edu.vn/CTSV/NOI-QUY-HOC-DUONG.pdf'
        },
        {
          id: '2',
          title: 'Bài 2',
          driveUrl: 'https://drive.google.com/file/d/your-file-id/preview'
        }
      ]
    },
    {
      id: '2',
      name: 'Tài liệu N4',
      avatar: 'https://dungmori.b-cdn.net/cdn/course/small/1733791130_493800_73052.png',
      documents: [
        {
          id: '1',
          title: 'Bài 1',
          driveUrl: 'https://drive.google.com/file/d/your-file-id/preview'
        }
      ]
    },
  ];

  getCategories(): Category[] {
    return this.categories;
  }
}