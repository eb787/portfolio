import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Renderer2
} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.scss'
})
export class MySkillsComponent implements AfterViewInit {
  @ViewChild('skillsContainer') skillsContainer!: ElementRef;

  currentLang: string;

  skills = [
    { icon: 'img/html-icon.svg', name: 'HTML' },
    { icon: 'img/css-icon.svg', name: 'CSS' },
    { icon: 'img/javascript-icon.svg', name: 'JavaScript' },
    { icon: 'img/typescript-icon.svg', name: 'TypeScript' },
    { icon: 'img/angular-icon.svg', name: 'Angular' },
    { icon: 'img/firebase-icon.svg', name: 'Firebase' },
    { icon: 'img/git-icon.svg', name: 'Git' },
    { icon: 'img/api-icon.svg', name: 'REST-API' },
    { icon: 'img/scrum-icon.svg', name: 'Scrum' },
    { icon: 'img/material-icon.svg', name: 'Material Design' },
    { icon: 'img/continually-icon.svg', name: 'Continually learning' }
  ];

  constructor(
    private translate: TranslateService,
    private renderer: Renderer2
  ) {
    this.currentLang = this.translate.currentLang;
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });
  }

  ngAfterViewInit() {
    const target = this.skillsContainer.nativeElement.querySelector('.div-technologies');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 1. Remove class
            this.renderer.removeClass(target, 'animate');

            // 2. Force reflow (wichtig!)
            void target.offsetWidth;

            // 3. Add class again
            this.renderer.addClass(target, 'animate');
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(this.skillsContainer.nativeElement);
  }
}
