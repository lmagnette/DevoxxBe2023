import { Component, computed, signal } from '@angular/core';
import { DinoService } from '../../services/dino.service';
import { DinoCardComponent } from '../dino-card/dino-card.component';
import { AsyncPipe, NgForOf } from '@angular/common';
import { Dinosaur } from '../../models/dinosaur';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatChipsModule } from '@angular/material/chips';

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
        MatInputModule,
        MatChipsModule
    ],
    standalone: true
} )
export class DinoListComponent {


    dinoList = toSignal( this.dinoService.list() );

    searchTerm = signal<string>( '' );

    filteredDinos = computed<Dinosaur[]>( () => {
            const dinos = this.dinoList() || [];
            return dinos.filter( ( dino: Dinosaur ) => dino.name.toLowerCase().includes( this.searchTerm().toLowerCase() ));
        }
    );

    constructor( private dinoService: DinoService ) {
    }

    updateTerm( search: string ) {
        this.searchTerm.set( search );
    }
}
