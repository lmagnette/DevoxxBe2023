import { Component, effect, Input, signal } from '@angular/core';
import { Dinosaur } from '../../models/dinosaur';
import { MatCardModule } from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component( {
  selector: 'app-dino-card',
  templateUrl: './dino-card.component.html',
  styleUrls: [ './dino-card.component.scss' ],
  imports: [
    MatCardModule,
    NgOptimizedImage,
    RouterLink,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule
  ],
  standalone: true,
})
export class DinoCardComponent {

  @Input({required:true}) dino!: Dinosaur;


  constructor(private snackBar: MatSnackBar) {

  }

  like( event: MouseEvent ) {
    event.stopPropagation();
  }
}
