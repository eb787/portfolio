import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me';
import { ContactComponent } from './contact/contact';
import { HeaderComponant } from './shared/header/header';



@Component({
  selector: 'app-root',
   standalone: true,
  imports: [RouterOutlet, AboutMeComponent, ContactComponent, HeaderComponant ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'portfolio';
}
