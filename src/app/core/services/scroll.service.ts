import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  // Método para scroll suave a un elemento específico
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  // Método para detectar la sección activa en la que se encuentra el viewport
  getCurrentSection(): string {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= (sectionTop - 300) &&
          window.pageYOffset < (sectionTop + sectionHeight - 300)) {
        currentSection = section.id;
      }
    });

    return currentSection;
  }
}
