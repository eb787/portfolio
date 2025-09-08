import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponant } from './home/home';
import { PrivacyPolicyComponant } from './privacy-policy/privacy-policy';
import { LegalNoticeComponent } from './legal-notice/legal-notice';

export const routes: Routes = [
  { path: '', component: HomeComponant },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponant }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',  // ← hier wird das automatische Scrollen aktiviert
      anchorScrolling: 'enabled'             // optional, falls du #anker-Links hast
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

