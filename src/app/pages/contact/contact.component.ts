import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { SuccessDialogComponent } from './dialogs/success-dialog/success-dialog.component';

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
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.contactForm.statusChanges.subscribe((status) =>
      console.log('Form status:', status)
    );
  }

onSubmit() {
  if (this.contactForm.valid) {
    console.log(this.contactForm.value);

    this.dialog.open(SuccessDialogComponent, {
      width: '400px',
      disableClose: true,
  panelClass: 'success-dialog-dark',
    });

    this.contactForm.reset();
  }
}

}
