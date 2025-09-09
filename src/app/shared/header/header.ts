import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

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

constructor(private translate: TranslateService, private router: Router) {
  const savedLang = localStorage.getItem('lang') || this.translate.getDefaultLang();
  this.translate.use(savedLang);
  this.currentLang = savedLang;
}

 switchLanguage(lang: string) {
  this.translate.use(lang);
  this.currentLang = lang;
  localStorage.setItem('lang', lang);
}

scrollToFragment(fragment: string) {
  const element = document.getElementById(fragment);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  } else {
    setTimeout(() => this.scrollToFragment(fragment), 100);
  }
}

onFragmentClick(fragment: string, event: MouseEvent) {
  event.preventDefault();
  this.router.navigate(['/'], { fragment }).then(() => {
    this.scrollToFragment(fragment);
  });
}

}
