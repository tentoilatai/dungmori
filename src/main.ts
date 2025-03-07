import { bootstrapApplication } from '@angular/platform-browser';
import { DocumentViewerComponent } from './app/components/document-viewer/document-viewer.component';

bootstrapApplication(DocumentViewerComponent, {
  providers: []
}).catch(err => console.error(err));