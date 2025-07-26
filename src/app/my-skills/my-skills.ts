import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.scss'
})
export class MySkillsComponent {
currentLang: string;

constructor(private translate: TranslateService) {
  this.currentLang = this.translate.currentLang;
  this.translate.onLangChange.subscribe((event) => {
    this.currentLang = event.lang;
  });
}
}
