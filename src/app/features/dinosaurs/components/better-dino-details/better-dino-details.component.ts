import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Dinosaur } from '../../models/dinosaur';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-better-dino-details',
  standalone: true,
  imports: [ CommonModule, MatCardModule, NgOptimizedImage ],
  templateUrl: './better-dino-details.component.html',
  styleUrls: ['./better-dino-details.component.scss']
})
export class BetterDinoDetailsComponent implements OnInit{

  dino!:Dinosaur;

  constructor( private activatedRoute: ActivatedRoute ) {

  }

  ngOnInit(): void {
    this.dino = this.activatedRoute.snapshot.data['dino'];
  }
}
