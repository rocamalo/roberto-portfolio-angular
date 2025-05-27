import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

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

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    this.formSubmitted = true;

    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitMessage = 'CONTACT.MESSAGES.SENDING'; // ← Ahora usa traducción

      // Preparar los datos como HttpParams (form-urlencoded)
      const formData = new HttpParams()
        .set('form-name', 'portfolio-contact')
        .set('name', this.contactForm.get('name')?.value)
        .set('email', this.contactForm.get('email')?.value)
        .set('subject', this.contactForm.get('subject')?.value)
        .set('message', this.contactForm.get('message')?.value);

      // Headers necesarios para Netlify
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      };

      // Enviar POST request esperando respuesta de texto (no JSON)
      this.http.post('/', formData.toString(), {
        headers,
        responseType: 'text' // ← IMPORTANTE: Esto evita el error JSON
      })
        .subscribe({
          next: (response) => {
            console.log('Formulario enviado exitosamente');
            this.submitMessage = 'CONTACT.MESSAGES.SUCCESS'; // ← Usa traducción
            this.contactForm.reset();
            this.formSubmitted = false;
            this.isSubmitting = false;

            // Limpiar mensaje después de 5 segundos
            setTimeout(() => {
              this.submitMessage = '';
            }, 5000);
          },
          error: (error) => {
            console.error('Error al enviar formulario:', error);
            this.submitMessage = 'CONTACT.MESSAGES.ERROR'; // ← Usa traducción
            this.isSubmitting = false;

            // Limpiar mensaje de error después de 5 segundos
            setTimeout(() => {
              this.submitMessage = '';
            }, 5000);
          }
        });
    } else {
      console.log('Formulario inválido');
      this.submitMessage = 'CONTACT.MESSAGES.INVALID'; // ← Usa traducción
    }
  }
}
