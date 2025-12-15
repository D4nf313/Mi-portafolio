import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-success-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './success-dialog.component.html',
  styleUrl: './success-dialog.component.scss'
})
export class SuccessDialogComponent {

}
