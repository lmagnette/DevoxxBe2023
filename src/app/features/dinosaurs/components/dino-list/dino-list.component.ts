import { Component, computed, DestroyRef, OnInit, signal } from '@angular/core';
import { DinoService } from '../../services/dino.service';
import { DinoCardComponent } from '../dino-card/dino-card.component';
import { AsyncPipe, NgForOf } from '@angular/common';
import { Subscription } from 'rxjs';
import { Dinosaur } from '../../models/dinosaur';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component( {
  selector: 'app-dino-list',
  templateUrl: './dino-list.component.html',
  styleUrls: [ './dino-list.component.scss' ],
  imports: [
    DinoCardComponent,
    NgForOf,
    AsyncPipe,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  standalone: true
} )
export class DinoListComponent implements OnInit{

  dinos$ = this.dinoService.list();

  dinoList:Dinosaur[]= [];

  constructor( private dinoService: DinoService, private destroyRef:DestroyRef) {
  }


  ngOnInit(): void {

  }
}