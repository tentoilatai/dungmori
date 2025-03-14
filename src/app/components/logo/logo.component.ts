import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="logo-container">
      <img 
        [src]="logoUrl" 
        [alt]="alt"
        [style.max-width.px]="maxWidth"
        [style.height.px]="height"
        (error)="handleImageError($event)"
        class="logo"
      >
    </div>
  `,
  styles: [`
    .logo-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .logo {
      object-fit: contain;
    }
  `]
})
export class LogoComponent {
  @Input() logoUrl = ''; // External URL or local path
  @Input() alt = 'Logo'; // Alt text for the image
  @Input() maxWidth = 200; // Default max width in pixels
  @Input() height: number | 'auto' = 'auto'; // Default height
  @Input() fallbackUrl = 'https://dungmori.com/assets/img/new_home/logo.png'; // Fallback logo path

  handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = this.fallbackUrl; // Use fallback URL on error
    img.onerror = null; // Prevent potential infinite error loop
  }
}