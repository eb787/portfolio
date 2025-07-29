import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TranslateModule
   
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'portfolio';

  constructor(private translate: TranslateService) {
  this.translate.setDefaultLang('de');

  const browserLang = this.translate.getBrowserLang();
  this.translate.use(browserLang?.match(/de|en/) ? browserLang : 'de');
}

switchLanguage(lang: string) {
  this.translate.use(lang);
}
}
