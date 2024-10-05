import { Component, OnInit } from '@angular/core';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.page.html',
  styleUrls: ['./segunda.page.scss'],
})
export class SegundaPage implements OnInit {
  dogImage: string = ''; 

  constructor(private dogService: DogService) {}

  ngOnInit() {
    this.loadRandomDog(); 
  }

  loadRandomDog() {
    this.dogService.getRandomDog().subscribe(data => {
      this.dogImage = data[0].url; 
    }, error => {
      console.error('Erro ao carregar a imagem do cachorro:', error);
    });
  }
}
