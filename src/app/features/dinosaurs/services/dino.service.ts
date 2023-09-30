import { Injectable } from '@angular/core';
import { Dinosaur } from '../models/dinosaur';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DinoService {

  private dinos: Dinosaur[] = [ {
    id: 1,
    name: 'Tyrannosaurus',
    description: 'Tyrannosaurus is a genus of large theropod dinosaur. The species Tyrannosaurus rex (rex meaning "king" in Latin), often called T. rex or colloquially T-Rex, is one of the best represented theropods. It lived throughout what is now western North America, on what was then an island continent known as Laramidia.',
    weight: 10000,
    height: 5,
    period: 'Late Cretaceous',
    diet: 'Carnivore',
    image: './assets/dino-11.png'

  },
    {
      id: 2,
      name: 'Velociraptor',
      weight: 15,
      height: 0.5,
      period: 'Late Cretaceous',
      diet: 'Carnivore',
      image: './assets/dino-12.png',
      description: 'Velociraptor is a genus of small dromaeosaurid dinosaur that lived in Asia during the Late Cretaceous epoch, about 75 million to 71 million years ago. Two species are currently recognized, although others have been assigned in the past.'
    },
    {
      id: 3,
      name: 'Triceratops',
      weight: 8000,
      height: 3,
      period: 'Late Cretaceous',
      diet: 'Herbivore',
      image: './assets/dino-2.png',
      description: 'Triceratops is a genus of chasmosaurine ceratopsian dinosaur that lived during the late Maastrichtian age of the Late Cretaceous period, about 68 to 66 million years ago in what is now western North America. It was one of the last-known non-avian dinosaurs and lived until the Cretaceous–Paleogene extinction event 66 million years ago'
    },
    {
      id: 4,
      name: 'Brachiosaurus',
      weight: 60000,
      height: 15,
      period: 'Late Jurassic',
      diet: 'Herbivore',
      image: './assets/dino-7.png',
      description: 'Brachiosaurus is a genus of sauropod dinosaur that lived in North America during the Late Jurassic, about 154 to 150 million years ago. It was first described by American paleontologist Elmer S. Riggs in 1903 from fossils found in the Colorado River valley in western Colorado, United States. '
    },
    {
      id: 5,
      name: 'Stegosaurus',
      weight: 2000,
      height: 4,
      period: 'Late Jurassic',
      diet: 'Herbivore',
      image: './assets/dino-3.png',
      description: 'Stegosaurus is a genus of herbivorous, four-legged, armored dinosaur from the Late Jurassic, characterized by the distinctive kite-shaped upright plates along their backs and spikes on their tails. Fossils of the genus have been found in the western United States and in Portugal'
    },
    {
      id: 6,
      name: 'Diplodocus',
      weight: 10000,
      height: 4,
      period: 'Late Jurassic',
      diet: 'Herbivore',
      image: './assets/dino-9.png',
      description: 'Diplodocus was a genus of diplodocid sauropod dinosaurs, whose fossils were first discovered in 1877 by S. W. Williston. The generic name, coined by Othniel Charles Marsh in 1878, is a Neo-Latin term derived from Greek διπλός (diplos) "double" and δοκός (dokos) "beam", in reference to the double-beamed chevron bones located in the underside of the tail, which were then considered unique.'
    },
    {
      id: 7,
      name: 'Parasaurolophus',
      weight: 2000,
      height: 3,
      period: 'Late Jurassic',
      diet: 'Herbivore',
      image: './assets/dino-5.png',
      description: 'Parasaurolophus (/ˌpærəsɔːˈrɒləfəs, -ˌsɔːrəˈloʊfəs/; meaning "near crested lizard" in reference to Saurolophus) is a genus of hadrosaurid "duck-billed" dinosaur that lived in what is now western North America and possibly Asia during the Late Cretaceous period, about 76.5–73 million years ago.'
    },
    {
      id: 8,
      name: 'Pterodactyl',
      weight: 20,
      height: 1,
      period: 'Late Cretaceous',
      diet: 'Herbivore',
      image: './assets/dino-1.png',
      description: 'Pterosaurs (/ˈtɛrəsɔːr, ˈtɛroʊ-/ from Greek pteron and sauros, meaning "wing lizard") are an extinct clade of flying reptiles in the order Pterosauria. They existed during most of the Mesozoic: from the Late Triassic to the end of the Cretaceous (228 to 66 million years ago).[7] Pterosaurs are the earliest vertebrates known to have evolved powered flight.'
    },
    {
      id: 9,
      name: 'Apatosaurus',
      weight: 1,
      height: 0.5,
      period: 'Late Jurassic',
      diet: 'Herbivore',
      image: './assets/dino-10.png',
      description: 'Apatosaurus (/əˌpætəˈsɔːrəs/ meaning "deceptive lizard") is a genus of herbivorous sauropod dinosaur that lived in North America during the Late Jurassic period. Othniel Charles Marsh described and named the first-known species, A. ajax, in 1877, and a second species, A. louisae, was discovered and named by William H. Holland in 1916. Apatosaurus lived about 152 to 151 million years ago (mya), during the late Kimmeridgian to early Tithonian age, and are now known from fossils in the Morrison Formation of modern-day Colorado, Oklahoma, New Mexico, Wyoming, and Utah in the United States. '
    },
    {
      id: 10,
      name: 'Ankylosaurus',
      weight: 6000,
      height: 3,
      period: 'Late Cretaceous',
      diet: 'Herbivore',
      image: './assets/dino-8.png',
      description: 'Ankylosaurus is a genus of armored dinosaur. Its fossils have been found in geological formations dating to the very end of the Cretaceous Period, about 68–66 million years ago, in western North America, making it among the last of the non-avian dinosaurs. It was named by Barnum Brown in 1908; the only species in the genus is A. magniventris.'
    },
    {
      id: 11,
      name: 'Spinosaurus',
      weight: 2000,
      height: 3,
      period: 'Late Cretaceous',
      diet: 'Carnivore',
      image: './assets/dino-6.png',
      description: 'Spinosaurus is a genus of spinosaurid dinosaur that lived in what now is North Africa during the upper Albian to upper Turonian stages of the Cretaceous period, about 112 to 93.5 million years ago. This genus was known first from Egyptian remains discovered in 1912 and described by German paleontologist Ernst Stromer in 1915. The original remains were destroyed in World War II, but additional material has come to light in recent years. It is unclear whether one or two species are represented in the fossils reported in the scientific literature. The best known species is S. aegyptiacus from Egypt, although a potential second species, S. maroccanus, has been recovered from Morocco.'
    }
  ];

  constructor() { }

  list(){
    return of(this.dinos);
  }

  get(id: number){
    return of(this.dinos.find(d => d.id === id));
  }

  get useNewUi(){
    return Math.random() > 0.5;
  }



}
