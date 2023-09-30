import { Component, computed, DestroyRef, OnInit, signal } from '@angular/core';
import { DinoService } from '../../services/dino.service';
import { DinoCardComponent } from '../dino-card/dino-card.component';
import { AsyncPipe, NgForOf } from '@angular/common';
import { Dinosaur } from '../../models/dinosaur';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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

  searchTerm = signal<string>('');

  filteredDinos = computed<Dinosaur[]>( () => this.dinoList.filter( dino =>
    dino.name.toLowerCase().includes( this.searchTerm().toLowerCase() )
  ));

  constructor( private dinoService: DinoService, private destroyRef:DestroyRef) {
  }


  ngOnInit(): void {
    this.dinoService.list()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe( dinos => this.dinoList = dinos || [] );
  }

  updateTerm( search: string ) {
    this.searchTerm.set( search);
  }
}
