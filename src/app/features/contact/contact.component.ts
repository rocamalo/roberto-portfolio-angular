import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  validationMessage = '';

  onSubmit(event: Event): void {
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    // Validación básica
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    if (!fullName || !email || !subject || !message) {
      event.preventDefault();
      this.validationMessage = 'Por favor completa todos los campos.';
      return;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      event.preventDefault();
      this.validationMessage = 'Por favor ingresa un email válido.';
      return;
    }

    // Si llega aquí, el formulario es válido y se enviará
    this.validationMessage = '';
    console.log('Formulario enviado correctamente');
  }
}
