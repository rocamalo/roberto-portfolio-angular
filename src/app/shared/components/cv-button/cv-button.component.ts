import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cv-button',
  template: `
    <a class="cv-download-button" [href]="getCvUrl()" download>
      <i class="fa fa-download"></i> {{ 'SIDENAV.DOWNLOAD_CV' | translate }}
    </a>
  `,
  styles: [`
    .cv-download-button {
      display: inline-block;
      padding: 10px 15px;
      background-color: #2196f3;
      color: white;
      border-radius: 4px;
      text-decoration: none;
      transition: background-color 0.3s ease;
      margin-top: 20px;

      &:hover {
        background-color: #0d87e0;
        color: white;
        text-decoration: none;
      }

      i {
        margin-right: 5px;
      }
    }
  `]
})
export class CvButtonComponent {

  constructor(private translate: TranslateService) { }

  getCvUrl(): string {
    // Devuelve la URL del CV basado en el idioma actual
    const currentLang = this.translate.currentLang;
    return currentLang === 'es'
      ? 'assets/cv/Roberto_Carlos_CV_ES.pdf'
      : 'assets/cv/Roberto_Carlos_CV_EN.pdf';
  }
}
