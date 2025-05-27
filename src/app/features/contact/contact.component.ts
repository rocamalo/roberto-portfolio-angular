import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  showSuccessMessage = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Verificar si hay parámetro de éxito en la URL
    this.route.queryParams.subscribe(params => {
      if (params['success'] === 'true') {
        this.showSuccessMessage = true;

        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
          this.showSuccessMessage = false;
          // Limpiar URL
          window.history.replaceState({}, document.title, window.location.pathname);
        }, 5000);
      }
    });
  }
}
