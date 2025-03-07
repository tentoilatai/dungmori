import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="logo-container" 
         [class.fade-out]="isHidden"
         [class.fade-in]="!isHidden">
      <img src="assets/logo.png" 
           alt="Logo" 
           style="max-width: 200px; height: auto;"
           (error)="handleImageError($event)">
    </div>
  `,
  styles: [`
    :host {
      display: block;
      margin-bottom: 2rem;
    }
  `]
})
export class LogoComponent implements OnInit {
  isHidden = false;

  ngOnInit() {
    setTimeout(() => {
      this.isHidden = true;
    }, 3000);
  }

  handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">📚</text></svg>';
  }
}