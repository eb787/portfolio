import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})



export class HeaderComponant {
  currentLang: string;
  overlayOpen = false;

  toggleOverlay() {
    this.overlayOpen = !this.overlayOpen;
  }

constructor(private translate: TranslateService) {
  const savedLang = localStorage.getItem('lang') || this.translate.getDefaultLang();
  this.translate.use(savedLang);
  this.currentLang = savedLang;
}

 switchLanguage(lang: string) {
  this.translate.use(lang);
  this.currentLang = lang;
  localStorage.setItem('lang', lang);
}

}
