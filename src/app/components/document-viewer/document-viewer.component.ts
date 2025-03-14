import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentService } from '../../services/document.service';
import { Category, Document } from '../../models/document.model';
import { LogoComponent } from '../logo/logo.component';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { MusicComponent } from "../music/music.component";

@Component({
  selector: 'app-document-viewer',
  standalone: true,
  imports: [CommonModule, LogoComponent, SafeUrlPipe, MusicComponent],
  templateUrl: './document-viewer.component.html',
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