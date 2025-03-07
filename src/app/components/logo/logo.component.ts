import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo.component.html',
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