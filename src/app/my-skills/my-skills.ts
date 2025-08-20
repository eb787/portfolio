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
    { icon: 'icons/html-icon.svg', name: 'HTML' },
    { icon: 'icons/css-icon.svg', name: 'CSS' },
    { icon: 'icons/javascript-icon.svg', name: 'JavaScript' },
    { icon: 'icons/typescript-icon.svg', name: 'TypeScript' },
    { icon: 'icons/angular-icon.svg', name: 'Angular' },
    { icon: 'icons/firebase-icon.svg', name: 'Firebase' },
    { icon: 'icons/git-icon.svg', name: 'Git' },
    { icon: 'icons/api-icon.svg', name: 'REST-API' },
    { icon: 'icons/scrum-icon.svg', name: 'Scrum' },
    { icon: 'icons/material-icon.svg', name: 'Material Design' },
    { icon: 'icons/continually-icon.svg', name: 'Continually learning' }
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
