import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-nav',
  standalone: false,
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  currentLanguage$: Observable<string>;
  activeSection = 'about';
  sections = [
    { id: 'about', name: 'SIDENAV.ABOUT' },
    { id: 'experience', name: 'SIDENAV.EXPERIENCE' },
    { id: 'portfolio', name: 'SIDENAV.PORTFOLIO' },
    { id: 'skills', name: 'SIDENAV.SKILLS' },
    { id: 'contact', name: 'SIDENAV.CONTACT' }
  ];

  constructor(
    private languageService: LanguageService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    this.currentLanguage$ = this.languageService.getCurrentLanguage();
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    this.updateActiveSection();
  }

  ngOnInit(): void {
    this.setupScrollSpy();
  }

  switchLanguage(lang: string): void {
    this.languageService.setLanguage(lang);
  }

    // Método para manejar la navegación suave
  onNavClick(event: Event, targetId: string): void {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Cerrar el menú responsive
      this.closeNavbarCollapse();
    }
  }

  private closeNavbarCollapse(): void {
    const navbarCollapse = this.el.nativeElement.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      this.renderer.removeClass(navbarCollapse, 'show');
    }
  }

    isActive(sectionId: string): boolean {
    return this.activeSection === sectionId;
  }

    private setupScrollSpy(): void {
    // Configuración inicial
    this.updateActiveSection();
  }

    private updateActiveSection(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const navbarHeight = 70; // Ajusta según tu navbar

    // Buscar la sección actual basada en la posición del scroll
    for (let i = this.sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(this.sections[i].id);
      if (section) {
        const sectionTop = section.offsetTop - navbarHeight - 50; // Margen adicional

        if (scrollPosition >= sectionTop) {
          if (this.activeSection !== this.sections[i].id) {
            this.activeSection = this.sections[i].id;
          }
          break;
        }
      }
    }
  }

}
