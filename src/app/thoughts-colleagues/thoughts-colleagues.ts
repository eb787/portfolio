import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-thoughts-colleagues',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './thoughts-colleagues.html',
  styleUrl: './thoughts-colleagues.scss'
})

export class ThoughtsColleagues implements OnInit {
  testimonials: any[] = [];
  currentIndex = 0;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadTestimonials();

    this.translate.onLangChange.subscribe(() => {
      this.loadTestimonials();
    });

    setInterval(() => {
      this.showNext();
    }, 26000);
  }

  loadTestimonials() {
    this.translate.get('TESTIMONIALS').subscribe((data: any[]) => {
      this.testimonials = data;
    });
  }

  showPrevious() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  showNext() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  setIndex(index: number) {
    this.currentIndex = index;
  }
}