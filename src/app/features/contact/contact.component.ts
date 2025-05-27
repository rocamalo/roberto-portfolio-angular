import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var grecaptcha: any; // Para usar reCAPTCHA

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  formSubmitted = false;
  isSubmitting = false;
  submitMessage = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  async onSubmit(): Promise<void> {
    this.formSubmitted = true;

    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitMessage = 'Enviando mensaje...';

      try {
        // Preparar los datos del formulario
        const formData = new FormData();
        formData.append('form-name', 'contact');
        formData.append('fullName', this.contactForm.get('fullName')?.value);
        formData.append('email', this.contactForm.get('email')?.value);
        formData.append('subject', this.contactForm.get('subject')?.value);
        formData.append('message', this.contactForm.get('message')?.value);

        // Obtener token de reCAPTCHA si está disponible
        const recaptchaResponse = document.querySelector('[name="g-recaptcha-response"]') as HTMLInputElement;
        if (recaptchaResponse && recaptchaResponse.value) {
          formData.append('g-recaptcha-response', recaptchaResponse.value);
        }

        // Enviar a Netlify
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData as any).toString()
        });

        if (response.ok) {
          this.submitMessage = '¡Mensaje enviado correctamente! Te contactaré pronto.';
          this.contactForm.reset();
          this.formSubmitted = false;

          // Resetear reCAPTCHA si existe
          if (typeof grecaptcha !== 'undefined') {
            grecaptcha.reset();
          }
        } else {
          throw new Error('Error en el envío');
        }

      } catch (error) {
        console.error('Error al enviar formulario:', error);
        this.submitMessage = 'Error al enviar el mensaje. Por favor, intenta de nuevo o envía un email directamente.';
      }

      this.isSubmitting = false;

      // Limpiar mensaje después de 5 segundos
      setTimeout(() => {
        this.submitMessage = '';
      }, 5000);
    } else {
      console.log('Formulario inválido');
    }
  }
}
