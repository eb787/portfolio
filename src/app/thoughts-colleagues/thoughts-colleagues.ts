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
      text: "Eric war eine echte Stütze in unserer Gruppe. Mit seiner lockeren Art hat er immer für gute Stimmung gesorgt, was die Zusammenarbeit deutlich angenehmer gemacht hat. Gleichzeitig war er super zuverlässig – man konnte sich darauf verlassen, dass er seine Aufgaben rechtzeitig und gründlich erledigt. Die Qualität seiner Arbeit war durchweg hoch und hat unser Projekt wirklich vorangebracht. Besonders hilfreich war auch, wie offen er mit Herausforderungen umgegangen ist: Wenn es irgendwo gehakt hat, hat er das klar kommuniziert und uns alle mit ins Boot geholt. So konnten wir gemeinsam schnell Lösungen finden. Insgesamt war es richtig angenehm, mit ihm zusammenzuarbeiten.",
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
  }, 26000); 
}
}




