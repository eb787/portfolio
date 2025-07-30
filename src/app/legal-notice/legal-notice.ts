import { Component } from '@angular/core';
import { HeaderComponant } from '../shared/header/header';
import { FooterComponent } from '../shared/footer/footer';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [HeaderComponant, FooterComponent, TranslateModule],
  templateUrl: './legal-notice.html',
  styleUrls: ['./legal-notice.scss'],
})
export class LegalNoticeComponent {
}
