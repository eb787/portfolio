import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-thoughts-colleagues',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thoughts-colleagues.html',
  styleUrl: './thoughts-colleagues.scss'
})
export class ThoughtsColleagues implements OnInit {
currentIndex = 0;

  testimonials = [
    {
      text: "Der beste Mitarbeiter den ich je hatte. Bestes Pferd im Stall...",
      author: "Eric B.",
      image: "img/about-me-picture.png"
    },
    {
      text: "Immer zuverlässig, kreativ und ein Teamplayer durch und durch.",
      author: "Flynn A.",
      image: "img/flynn.png"
    },
    {
      text: "Mit ihm zu arbeiten macht Spaß, weil er nie Probleme, sondern Lösungen sieht.",
      author: "Eric B.",
      image: "img/about-me-picture.png"
    }
  ];

  showPrevious() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  showNext() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  setIndex(index: number) {
  this.currentIndex = index;
}

ngOnInit(): void {
  setInterval(() => {
    this.showNext();
  }, 3000); 
}
}




