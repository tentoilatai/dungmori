import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentService } from '../../services/document.service';
import { Category, Document } from '../../models/document.model';
import { LogoComponent } from '../logo/logo.component';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

@Component({
  selector: 'app-document-viewer',
  standalone: true,
  imports: [CommonModule, LogoComponent, SafeUrlPipe],
  template: `
    <div class="container">
      <app-logo></app-logo>
      
      <div class="document-grid">
        <div *ngFor="let category of categories" 
             class="category-card" 
             (click)="toggleCategory(category)"
             [class.active]="selectedCategory === category">
          <div class="category-header">
            <div class="avatar-container">
              <img [src]="category.avatar" 
                   [alt]="category.name" 
                   class="category-avatar"
                   (error)="handleImageError($event)">
            </div>
            <h2 class="category-name">{{ category.name }}</h2>
          </div>
          
          <div class="document-list" 
               *ngIf="selectedCategory === category">
            <div *ngFor="let doc of category.documents" 
                 class="document-item"
                 [class.active]="selectedDocument === doc"
                 (click)="selectDocument(doc, $event)">
              <div class="document-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                </svg>
              </div>
              <span class="document-title">{{ doc.title }}</span>
              <div class="document-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                  <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-backdrop" 
           *ngIf="selectedDocument"
           (click)="closeDocument()">
        <div class="modal-content" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <h3>{{ selectedDocument.title }}</h3>
            <button class="close-button" (click)="closeDocument()">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>
          <div class="modal-body">
            <iframe [src]="selectedDocument.driveUrl | safeUrl" 
                    allowfullscreen
                    loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  `
})
export class DocumentViewerComponent {
  categories: Category[] = [];
  selectedCategory: Category | null = null;
  selectedDocument: Document | null = null;

  constructor(private documentService: DocumentService) {
    this.categories = this.documentService.getCategories();
  }

  toggleCategory(category: Category) {
    this.selectedCategory = this.selectedCategory === category ? null : category;
    if (this.selectedCategory !== category) {
      this.selectedDocument = null;
    }
  }

  selectDocument(document: Document, event: Event) {
    event.stopPropagation();
    this.selectedDocument = document;
  }

  closeDocument() {
    this.selectedDocument = null;
  }

  handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/default-avatar.png';
  }
}