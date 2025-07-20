import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me';
import { ContactComponent } from './contact/contact';
import { HeaderComponant } from './shared/header/header';
import { ProjectsComponent } from './projects/projects';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold';
import { MySkillsComponent } from './my-skills/my-skills';
import { ThoughtsColleagues } from './thoughts-colleagues/thoughts-colleagues';
import { FooterComponent } from './shared/footer/footer';



@Component({
  selector: 'app-root',
   standalone: true,
  imports: [RouterOutlet, AboutMeComponent, ContactComponent, HeaderComponant, ProjectsComponent, AboutMeComponent, AboveTheFoldComponent, MySkillsComponent, ThoughtsColleagues, FooterComponent ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'portfolio';
}
