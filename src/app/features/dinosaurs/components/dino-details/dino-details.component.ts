import { Component, OnInit } from '@angular/core';
import { DinoService } from '../../services/dino.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Dinosaur } from '../../models/dinosaur';
import { JsonPipe, KeyValuePipe, NgForOf, NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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

  id!:number
  dino!:Dinosaur

  constructor( private dinoService: DinoService, private activatedRoute:ActivatedRoute ) {

  }

  ngOnInit(): void {
    this.id = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id')||'');
    this.dinoService.get( this.id )
      .subscribe( dino => this.dino = dino || {  } as Dinosaur );
  }

}
