import { Component, NgZone } from '@angular/core';
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

  constructor(
    private translate: TranslateService,
    private router: Router,
    private ngZone: NgZone
  ) {

    this.translate.setDefaultLang('de');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang?.match(/de|en/) ? browserLang : 'de');

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = event.urlAfterRedirects;

        if (!url.includes('#')) {
          this.ngZone.runOutsideAngular(() => {
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
          });
        }
      });
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
