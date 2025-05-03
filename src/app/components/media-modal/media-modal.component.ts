import { Component, Inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DialogData } from '../../interfaces/dialogData.interface';

@Component({
  selector: 'app-media-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatIconModule],
  templateUrl: './media-modal.component.html',
  styleUrls: ['./media-modal.component.scss'],
})
export class MediaModalComponent {
  constructor(
    public dialogRef: MatDialogRef<MediaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    // Configurar el diálogo para que sea más pequeño
    this.dialogRef.updateSize('auto', 'auto');
  }

  @HostListener('document:keydown.escape')
  onEscapePress(): void {
    this.close();
  }

  close(): void {
    this.dialogRef.close();
  }
}
