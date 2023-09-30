import { Component, OnInit } from '@angular/core';
import { DinoService } from '../../services/dino.service';
import { RouterLink } from '@angular/router';
import { Dinosaur } from '../../models/dinosaur';
import { JsonPipe, KeyValuePipe, NgForOf, NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { routeParam } from '../../dinosaurs-routes';

@Component( {
  selector: 'app-dino-details',
  templateUrl: './dino-details.component.html',
  styleUrls: [ './dino-details.component.scss' ],
  imports: [
    JsonPipe,
    MatCardModule,
    NgOptimizedImage,
    KeyValuePipe,
    NgForOf,
    TitleCasePipe,
    MatButtonModule,
    MatIconModule,
    RouterLink
  ],
  standalone: true
})
export class DinoDetailsComponent implements OnInit {

  id:number = routeParam('id');
  dino!:Dinosaur

  constructor( private dinoService: DinoService) {

  }

  ngOnInit(): void {
    this.dinoService.get( this.id )
      .subscribe( dino => this.dino = dino || {  } as Dinosaur );
  }

}
