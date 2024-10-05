import { Component } from '@angular/core';

const API_URL = `https://api.thedogapi.com/v1/`;
const API_KEY = "live_ODj5ELM3LAW3r8QzWP5X9orPsjsQCIfxSveBjh2Pwd639IrCtFbfL7tgqtVkZhnZ";

interface DogImage {
  id: string;
  url: string;
}

let currentImageToVoteOn: DogImage | null = null;

@Component({
  selector: 'app-terceira',
  templateUrl: './terceira.page.html',
  styleUrls: ['./terceira.page.scss'],
})
export class TerceiraPage {
  constructor() {
    this.showVoteOptions();
  }

  showHistoricVotes() {
    const voteOptions = document.getElementById('vote-options');
    const voteResults = document.getElementById('vote-results');
  
    if (voteOptions && voteResults) {
      voteOptions.style.display = 'none';
      voteResults.style.display = 'block';
    }
  
    const url = `${API_URL}votes?limit=10&order=DESC`;
  
    fetch(url, { headers: { 'x-api-key': API_KEY } })
      .then((response) => response.json())
      .then((data) => {
        const grid = document.getElementById('grid');
        if (grid) {
          grid.innerHTML = ''; 
          data.map((voteData: any) => {
            const imageData = voteData.image;
            let image = document.createElement('img');
            image.src = imageData.url;
  
            let gridCell = document.createElement('div');
            gridCell.classList.add('col-lg'); 
            if (voteData.value < 0) {
              gridCell.classList.add('red'); // Downvote
            } else {
              gridCell.classList.add('green'); // Upvote
            }
            
            gridCell.appendChild(image);
            grid.appendChild(gridCell); 
          });
        }
      })
      .catch((error) => console.log(error));
  }

  showVoteOptions() {
    const grid = document.getElementById("grid");
    const voteOptions = document.getElementById('vote-options');
    const voteResults = document.getElementById('vote-results');

    if (grid && voteOptions && voteResults) {
      grid.innerHTML = '';
      voteOptions.style.display = 'block';
      voteResults.style.display = 'none';
      this.showImageToVoteOn();
    }
  }

  showImageToVoteOn() {
    const url = `${API_URL}images/search`;
  
    fetch(url, { headers: { 'x-api-key': API_KEY } })
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          currentImageToVoteOn = data[0] as DogImage;
          const imageToVoteOn = document.getElementById("image-to-vote-on") as HTMLImageElement;
          if (imageToVoteOn) {
            imageToVoteOn.src = currentImageToVoteOn.url;
          }
        } else {
          console.error("Nenhuma imagem retornada pela API.");
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar imagem: ", error);
      });
  }

  vote(value: number) {
    if (!currentImageToVoteOn) return;

    const url = `${API_URL}votes`;
    const body = {
      image_id: currentImageToVoteOn.id,
      value,
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        'Content-Type': "application/json",
        'x-api-key': API_KEY,
      }
    })
    .then(() => this.showVoteOptions());
  }
}
