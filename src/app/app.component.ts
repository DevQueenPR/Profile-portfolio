import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { ExtracurricularsComponent } from "./profile/extracurriculars/extracurriculars.component";
import routes from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ProfileComponent, RouterModule, ExtracurricularsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GenesisPortfolio';
}
