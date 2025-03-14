import { bootstrapApplication } from '@angular/platform-browser';
import { DocumentViewerComponent } from './app/components/document-viewer/document-viewer.component';

const audio = new Audio();
const musicFiles = [
  'https://ia902907.us.archive.org/11/items/ghibli_202503/Ghibli.mp3',
];

function playMusic() {
  const randomIndex = Math.floor(Math.random() * musicFiles.length);
  audio.src = musicFiles[randomIndex];
  audio.loop = true;

  audio.play().then(() => {
    console.log('Nhạc đang phát');
  }).catch(() => {
    console.warn('Auto-play bị chặn, chờ tương tác...');
    document.addEventListener('click', userInteractionPlay, { once: true });
  });
}

function userInteractionPlay() {
  audio.play().catch(err => console.error('Lỗi phát nhạc:', err));
}

// Chỉ gọi phát nhạc nếu có sự kiện tương tác từ người dùng trước đó
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', playMusic, { once: true });
});

bootstrapApplication(DocumentViewerComponent, {
  providers: []
}).catch(err => console.error(err));
