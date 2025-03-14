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
          title: 'Tài liệu Nhập môn Sơ cấp',
          driveUrl: 'https://dungmori.com/cdn/pdf/20250115160619_DMR_b%E1%BA%A3ng%20ch%E1%BB%AF%20c%C3%A1i%20_Nh%E1%BA%ADp%20M%C3%B4n.%20250111.pdf'
        },
        {
          id: '2',
          title: 'Tài liệu chương 1',
          driveUrl: 'https://dungmori.com/cdn/pdf/20241228082009_Ch%C6%B0%C6%A1ng%201_GHV%20(1).pdf'
        },
        {
          id: '3',
          title: 'Tài liệu chương 2',
          driveUrl: 'https://dungmori.com/cdn/pdf/20241228083506_Ch%C6%B0%C6%A1ng%202_GHV.pdf'
        },
        {
          id: '4',
          title: 'Tài liệu chương 3',
          driveUrl: 'https://dungmori.com/cdn/pdf/20241228083919_Ch%C6%B0%C6%A1ng%203_GHV.pdf'
        },
        {
          id: '5',
          title: 'Tài liệu chương 4',
          driveUrl: 'https://dungmori.com/cdn/pdf/20241228083956_Ch%C6%B0%C6%A1ng%204_GHV.pdf'
        },
        {
          id: '6',
          title: 'Tài liệu chương 5',
          driveUrl: 'https://dungmori.com/cdn/pdf/20241228084049_Ch%C6%B0%C6%A1ng%205_GHV.pdf'
        },
        {
          id: '7',
          title: 'Tài liệu chương 6',
          driveUrl: 'https://dungmori.com/cdn/pdf/20250109092631_Ch%C6%B0%C6%A1ng%206_GHV(1).pdf'
        },
        {
          id: '8',
          title: 'Tài liệu chương 7',
          driveUrl: 'https://dungmori.com/cdn/pdf/20250108074924_Ch%C6%B0%C6%A1ng%207_GHV%20(1).pdf'
        },
        {
          id: '9',
          title: 'Tài liệu chương 8',
          driveUrl: 'https://dungmori.com/cdn/pdf/20250226151058_Ch%C6%B0%C6%A1ng%208_GHV(1).pdf'
        },
        {
          id: '10',
          title: 'Tài liệu chương 9',
          driveUrl: 'https://dungmori.com/cdn/pdf/20250107161050_Ch%C6%B0%C6%A1ng%209_GHV.pdf'
        },
        {
          id: '11',
          title: 'Tài liệu chương 10',
          driveUrl: 'https://dungmori.com/cdn/pdf/20250311074701_Ch%C6%B0%C6%A1ng%2010_GHV.pdf'
        },
        {
          id: '12',
          title: 'Tài liệu chương 11',
          driveUrl: 'https://dungmori.com/cdn/pdf/20250115150938_Ch%C6%B0%C6%A1ng%2011_GHV.pdf'
        },
        {
          id: '13',
          title: 'Tài liệu chương 12',
          driveUrl: 'https://dungmori.com/cdn/pdf/20250115151010_Ch%C6%B0%C6%A1ng%2012_GHV.pdf'
        },
        {
          id: '14',
          title: 'Tài liệu chương 13',
          driveUrl: 'https://dungmori.com/cdn/pdf/20250121090427_Ch%C6%B0%C6%A1ng%2013_GHV.pdf'
        },
        {
          id: '15',
          title: 'Tài liệu chương 14',
          driveUrl: 'https://dungmori.com/cdn/pdf/20250121141110_Ch%C6%B0%C6%A1ng%2014_GHV.pdf'
        },
        {
          id: '16',
          title: 'Tài liệu Từ vựng tổng hợp (chương 1-14)',
          driveUrl: 'https://dungmori.com/cdn/pdf/20250307104040_T%E1%BB%AB%20v%E1%BB%B1ng%20N5_GHV.pdf'
        },
        {
          id: '17',
          title: 'Tài liệu Chữ Hán tổng hợp (chương 1-14)',
          driveUrl: 'https://dungmori.com/cdn/pdf/20250307104054_Ch%E1%BB%AF%20H%C3%A1n%20N5_GHV.pdf'
        },
        {
          id: '18',
          title: 'Tài liệu Ngữ pháp tổng hợp (chương 1-14)',
          driveUrl: 'https://dungmori.com/cdn/pdf/20250307104107_Ng%E1%BB%AF%20ph%C3%A1p%20N5_GHV.pdf'
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