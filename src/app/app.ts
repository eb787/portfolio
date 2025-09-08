import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'portfolio';

  constructor(private translate: TranslateService, private router: Router) {
    this.translate.setDefaultLang('de');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang?.match(/de|en/) ? browserLang : 'de');

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
