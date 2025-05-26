import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  formSubmitted = false;

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

  onSubmit(): void {
    this.formSubmitted = true;

    if (this.contactForm.valid) {
      // El formulario se enviará automáticamente por Netlify
      // No necesitas hacer nada más aquí
      console.log('Formulario válido, enviando...');

      // Opcional: Mostrar mensaje de éxito
      alert('¡Mensaje enviado correctamente! Te contactaré pronto.');

      // Reiniciar el formulario
      this.contactForm.reset();
      this.formSubmitted = false;
    } else {
      console.log('Formulario inválido');
    }
  }
}
