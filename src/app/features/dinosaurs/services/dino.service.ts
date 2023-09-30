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
    image: 'https://img.freepik.com/vecteurs-libre/tyrannosaurus-rex-t-rex-style-cartoon_1308-87430.jpg?w=1800&t=st=1695372245~exp=1695372845~hmac=9a4101550d7b9e68b8f17bd579fe081e8854d759149a37f8c51e7da40b664ed8',

  },
    {
      id: 2,
      name: 'Velociraptor',
      weight: 15,
      height: 0.5,
      period: 'Late Cretaceous',
      diet: 'Carnivore',
      image: 'https://res.cloudinary.com/teepublic/image/private/s--_4YqqN4Y--/c_crop,x_10,y_10/c_fit,h_1109/c_crop,g_north_west,h_1260,w_1260,x_-127,y_-76/co_rgb:ffffff,e_colorize,u_Misc:One%20Pixel%20Gray/c_scale,g_north_west,h_1260,w_1260/fl_layer_apply,g_north_west,x_-127,y_-76/bo_157px_solid_white/e_overlay,fl_layer_apply,h_1260,l_Misc:Art%20Print%20Bumpmap,w_1260/e_shadow,x_6,y_6/c_limit,h_1254,w_1254/c_lpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1667491356/production/designs/36231413_0.jpg',
      description: 'Velociraptor is a genus of small dromaeosaurid dinosaur that lived in Asia during the Late Cretaceous epoch, about 75 million to 71 million years ago. Two species are currently recognized, although others have been assigned in the past.'
    },
    {
      id: 3,
      name: 'Triceratops',
      weight: 8000,
      height: 3,
      period: 'Late Cretaceous',
      diet: 'Herbivore',
      image: 'https://img.freepik.com/vecteurs-libre/dino-triceratops-mignon-illustration-icone-vecteur-dessin-anime-camera-technologie-animale-isolee-plat_138676-6754.jpg?w=2000&t=st=1695372283~exp=1695372883~hmac=88e4e798f353e860d36549ae0df0ab76f2db4b7c28a7a00dccc5dc404f6d21a4',
      description: 'Triceratops is a genus of chasmosaurine ceratopsian dinosaur that lived during the late Maastrichtian age of the Late Cretaceous period, about 68 to 66 million years ago in what is now western North America. It was one of the last-known non-avian dinosaurs and lived until the Cretaceous–Paleogene extinction event 66 million years ago'
    },
    {
      id: 4,
      name: 'Brachiosaurus',
      weight: 60000,
      height: 15,
      period: 'Late Jurassic',
      diet: 'Herbivore',
      image: 'https://img.freepik.com/vecteurs-libre/personnage-dessin-anime-brachiosaurus-isole_1308-133696.jpg?w=2000&t=st=1695372604~exp=1695373204~hmac=8fb4211a6023baba94ded6d5d2e050a84f992f15646a99a6680350bef40598b8',
      description: 'Brachiosaurus is a genus of sauropod dinosaur that lived in North America during the Late Jurassic, about 154 to 150 million years ago. It was first described by American paleontologist Elmer S. Riggs in 1903 from fossils found in the Colorado River valley in western Colorado, United States. '
    },
    {
      id: 5,
      name: 'Stegosaurus',
      weight: 2000,
      height: 4,
      period: 'Late Jurassic',
      diet: 'Herbivore',
      image: 'https://img.freepik.com/vecteurs-libre/illustration-stegosaure-dessin-anime-dessine-main_23-2150497689.jpg?w=2000&t=st=1695372642~exp=1695373242~hmac=a6edf25fefb67756741310a753e17d8fe2acaa0f5e5ccaee1505543a9b9d5c84',
      description: 'Stegosaurus is a genus of herbivorous, four-legged, armored dinosaur from the Late Jurassic, characterized by the distinctive kite-shaped upright plates along their backs and spikes on their tails. Fossils of the genus have been found in the western United States and in Portugal'
    },
    {
      id: 6,
      name: 'Diplodocus',
      weight: 10000,
      height: 4,
      period: 'Late Jurassic',
      diet: 'Herbivore',
      image: 'https://img.freepik.com/vecteurs-libre/illustration-stegosaure-dessin-anime-dessine-main_52683-118924.jpg?w=2000&t=st=1695372351~exp=1695372951~hmac=6b9a41422218ecce564d3cd7768a3c69958567ff4bc7f249057ed056595d7fe0',
      description: 'Diplodocus was a genus of diplodocid sauropod dinosaurs, whose fossils were first discovered in 1877 by S. W. Williston. The generic name, coined by Othniel Charles Marsh in 1878, is a Neo-Latin term derived from Greek διπλός (diplos) "double" and δοκός (dokos) "beam", in reference to the double-beamed chevron bones located in the underside of the tail, which were then considered unique.'
    },
    {
      id: 7,
      name: 'Allosaurus',
      weight: 2000,
      height: 3,
      period: 'Late Jurassic',
      diet: 'Carnivore',
      image: 'https://pbs.twimg.com/media/EFJ00Z9XYAEqrrX?format=jpg&name=large',
      description: 'Allosaurus is an extinct genus of large carnosaurian theropod dinosaur that lived 155 to 145 million years ago during the Late Jurassic period (Kimmeridgian to late Tithonian ages). The name "Allosaurus" means "different lizard", alluding to its unique (at the time of its discovery) concave vertebrae. It is derived from the Greek words ἄλλος (allos) ("different", "strange", or "other") and σαῦρος (sauros) ("lizard" or "reptile"). '
    },
    {
      id: 8,
      name: 'Pteranodon',
      weight: 20,
      height: 1,
      period: 'Late Cretaceous',
      diet: 'Carnivore',
      image: 'https://img.freepik.com/vecteurs-libre/illustration-pterodactyle-dessin-anime-dessine-main_23-2150497877.jpg?w=2000&t=st=1695372438~exp=1695373038~hmac=1db6b27c19c3ab61ea4c1deaf511530b3571a3b2289df203b3a25d108f9ac20c',
      description: 'Pteranodon from Ancient Greek πτερόν (pteron \'wing\') and ἀνόδων (anodon \'toothless\') is a genus of pterosaur that included some of the largest known flying reptiles, with P. longiceps having a wingspan of over 6 m (20 ft). They lived during the late Cretaceous geological period of North America in present-day Kansas, Nebraska, Wyoming, South Dakota and Alabama.'
    },
    {
      id: 9,
      name: 'Archaeopteryx',
      weight: 1,
      height: 0.5,
      period: 'Late Jurassic',
      diet: 'Carnivore',
      image: 'https://img.freepik.com/vecteurs-libre/dinosaure-archaeopteryx-fond-blanc_1308-89766.jpg?w=2000&t=st=1695372486~exp=1695373086~hmac=39f29e97279504a4d834c567309392977a87f739538e17711af8d0ac3173bdc4',
      description: 'Archaeopteryx, meaning "old wing" (sometimes referred to by its German name Urvogel ("original bird" or "first bird")), is a genus of bird-like dinosaurs that is transitional between non-avian feathered dinosaurs and modern birds. The name derives from the ancient Greek ἀρχαῖος (archaīos) meaning "ancient", and πτέρυξ (ptéryx), meaning "feather" or "wing". Between the late nineteenth century and the early twenty-first century, Archaeopteryx had been generally accepted by palaeontologists and popular reference books as the oldest known bird (member of the group Avialae).'
    },
    {
      id: 10,
      name: 'Ankylosaurus',
      weight: 6000,
      height: 3,
      period: 'Late Cretaceous',
      diet: 'Herbivore',
      image: 'https://img.freepik.com/vecteurs-libre/dessin-anime-mignon-dinosaure-ankylosaurus_1308-110688.jpg?w=2000&t=st=1695372531~exp=1695373131~hmac=62c50815feb80e0e89ea8f3d71c96267e943a52eb4d24e494dd6f2633a67976f',
      description: 'Ankylosaurus is a genus of armored dinosaur. Its fossils have been found in geological formations dating to the very end of the Cretaceous Period, about 68–66 million years ago, in western North America, making it among the last of the non-avian dinosaurs. It was named by Barnum Brown in 1908; the only species in the genus is A. magniventris.'
    },
    {
      id: 11,
      name: 'Spinosaurus',
      weight: 2000,
      height: 3,
      period: 'Late Cretaceous',
      diet: 'Carnivore',
      image: 'https://img.freepik.com/vecteurs-libre/petit-personnage-dessin-anime-dinosaure-spinosaurus-mignon_1308-112984.jpg?w=2000&t=st=1695372567~exp=1695373167~hmac=61dff79e18d24fea0730c7c57b3c20dfa34f5f3eff98b9f994f8f7b53ea388f9',
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
