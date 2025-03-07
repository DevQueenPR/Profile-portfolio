import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { ExtracurricularsComponent } from "./profile/extracurriculars/extracurriculars.component";
import { TypingEffectComponent } from './typing-effect/typing-effect.component';
import routes from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ProfileComponent, RouterModule, ExtracurricularsComponent, TypingEffectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GenesisPortfolio';
}
