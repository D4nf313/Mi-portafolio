import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private formspreeEndpoint = 'https://formspree.io/f/meeljeqk';
  isSubmitting = false;
  submitMessage = '';
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private http: HttpClient,
  ) {
    this.contactForm.statusChanges.subscribe((status) =>
      console.log('Form status:', status),
    );
  }

  onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      
      const formData = this.contactForm.value;

      this.http.post(this.formspreeEndpoint, formData)
        .pipe(
          catchError(error => {
            console.error('Error al enviar el formulario:', error);
            
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.',
              confirmButtonText: 'Aceptar',
              confirmButtonColor: '#d33'
            });
            
            this.isSubmitting = false;
            return of(null);
          })
        )
        .subscribe(response => {
          if (response) {
            console.log('Formulario enviado exitosamente:', response);
            
            Swal.fire({
              icon: 'success',
              title: '¡Mensaje enviado!',
              text: 'Gracias por contactarme. Te responderé pronto.',
              confirmButtonText: 'Aceptar',
              confirmButtonColor: '#3f51b5'
            });

            // Resetear sin activar validaciones
            this.contactForm.reset({
              name: '',
              email: '',
              message: ''
            });
            
            // Marcar como intacto y sin tocar
            Object.keys(this.contactForm.controls).forEach(key => {
              this.contactForm.get(key)?.setErrors(null);
              this.contactForm.get(key)?.markAsUntouched();
              this.contactForm.get(key)?.markAsPristine();
            });
          }
          this.isSubmitting = false;
        });
    }
  }
}
