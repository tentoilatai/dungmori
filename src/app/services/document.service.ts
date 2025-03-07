import { Injectable } from '@angular/core';
import { Category } from '../models/document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private categories: Category[] = [
    {
      id: '1',
      name: 'Quy chế',
      avatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=education',
      documents: [
        {
          id: '1',
          title: 'Quy chế Công tác sinh viên',
          driveUrl: 'https://cmcu.edu.vn/CTSV/NOI-QUY-HOC-DUONG.pdf'
        },
        {
          id: '2',
          title: 'Tài liệu JavaScript',
          driveUrl: 'https://drive.google.com/file/d/your-file-id/preview'
        }
      ]
    },
    {
      id: '2',
      name: 'Tài liệu tham khảo',
      avatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=reference',
      documents: [
        {
          id: '1',
          title: 'Hướng dẫn sử dụng',
          driveUrl: 'https://drive.google.com/file/d/your-file-id/preview'
        }
      ]
    },
    {
      id: '3',
      name: 'Tài liệu tham khảo',
      avatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=reference',
      documents: [
        {
          id: '1',
          title: 'Hướng dẫn sử dụng',
          driveUrl: 'https://drive.google.com/file/d/your-file-id/preview'
        }
      ]
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }
}