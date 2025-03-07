import { Routes } from '@angular/router';
import { ExtracurricularsComponent } from './profile/extracurriculars/extracurriculars.component';
import { ProfileComponent } from './profile/profile.component'; 

const routes: Routes = [
  { path: 'profile/extracurriculars', component: ExtracurricularsComponent },
  { path: 'profile', component: ProfileComponent }, // handles profile route properly
  { path: '', redirectTo: 'profile', pathMatch: 'full' }, // Redirect to profile instead of empty
  { path: '**', redirectTo: 'profile', pathMatch: 'full' } // Redirect unknown routes to profile
];

export default routes;
