import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<string>('es');

  constructor(private translate: TranslateService) {
    // Inicializar con el idioma guardado o el predeterminado
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    this.setLanguage(savedLang);
  }

  setLanguage(lang: string): void {
    // Guardar preferencia de idioma
    localStorage.setItem('preferredLanguage', lang);

    // Actualizar servicio de traducción
    this.translate.use(lang);

    // Actualizar el subject
    this.currentLanguageSubject.next(lang);
  }

  getCurrentLanguage(): Observable<string> {
    return this.currentLanguageSubject.asObservable();
  }

  getTranslation(key: string): Observable<string> {
    return this.translate.get(key);
  }
}
