import {  Routes } from '@angular/router';
import { HomeComponant } from './home/home';
import { PrivacyPolicyComponant } from './privacy-policy/privacy-policy';
import { LegalNoticeComponent } from './legal-notice/legal-notice';



export const routes: Routes = [
    { path: '', component: HomeComponant },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponant }
];


export class AppRoutingModule { }
