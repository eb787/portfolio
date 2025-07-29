import { Component } from '@angular/core';
import { MySkillsComponent } from '../my-skills/my-skills';
import { HeaderComponant } from '../shared/header/header';
import { AboutMeComponent } from '../about-me/about-me';
import { ContactComponent } from '../contact/contact';
import { FooterComponent } from '../shared/footer/footer';
import { AboveTheFoldComponent } from '../above-the-fold/above-the-fold';
import { ProjectsComponent } from '../projects/projects';
import { TranslateModule } from '@ngx-translate/core';
import { ThoughtsColleagues } from '../thoughts-colleagues/thoughts-colleagues';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MySkillsComponent,
    HeaderComponant,
    AboutMeComponent,
    ContactComponent,
    ThoughtsColleagues,
    FooterComponent,
    AboveTheFoldComponent,
    ProjectsComponent,
    ThoughtsColleagues,
    TranslateModule,
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomeComponant {}
