import { Component, OnInit } from '@angular/core';
import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <app-side-nav></app-side-nav>
    <div class="container-fluid p-0">
      <app-about id="about"></app-about>
      <app-experience id="experience"></app-experience>
      <app-portfolio id="portfolio"></app-portfolio>
      <app-skills id="skills"></app-skills>
      <app-contact id="contact"></app-contact>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    // Inicialización del componente
  }
}
