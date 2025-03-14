import { Component, Input, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="music-controls">
      <button (click)="toggleMusic()">{{ isPlaying ? '🔊 Tắt nhạc' : '🔈 Bật nhạc' }}</button>
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
    .music-controls {
      margin-top: 10px;
      text-align: center;
    }
    .music-controls button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
    }
    .music-controls button:hover {
      background-color: #0056b3;
    }
  `]
})
export class MusicComponent implements OnInit {
  @Input() height: number | 'auto' = 'auto';

  private audio = new Audio();
  private musicFiles = [
    'assets/music/ViNgotMuaHa.mp3',
  ];
  isPlaying = false;
  private hasUserInteracted = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.audio.src = this.musicFiles[0];
    this.audio.loop = true;
    this.audio.muted = true; // Bắt đầu với chế độ tắt tiếng
    this.audio.play().then(() => {
      this.audio.muted = false;
      this.isPlaying = true;
    }).catch(error => {
      console.warn('Auto-play blocked, waiting for user interaction');
    });
  }

  @HostListener('window:click') onUserInteraction() {
    if (!this.hasUserInteracted) {
      this.hasUserInteracted = true;
      this.audio.play().catch(error => console.error('Play failed after interaction', error));
    }
  }

  toggleMusic() {
    if (this.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play().catch(error => console.error('Play failed', error));
    }
    this.isPlaying = !this.isPlaying;
  }
}