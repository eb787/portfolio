import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './above-the-fold.html',
  styleUrl: './above-the-fold.scss'
})
export class AboveTheFoldComponent {
  currentLang: string;

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang || this.translate.getDefaultLang();
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });
  }
}
