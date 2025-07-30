import { Component } from '@angular/core';
import { HeaderComponant } from '../shared/header/header';
import { FooterComponent } from '../shared/footer/footer';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    HeaderComponant,
    FooterComponent, TranslateModule
  ],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss'
})
export class PrivacyPolicyComponant {

}
