import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Note the plural 'styleUrls'
})
export class NavbarComponent {
  // Properties
  DevQueenLogo = 'assets/images/DevQueenLogo.png'; 
  socialLinks = [
    { href: 'https://www.linkedin.com/in/g%C3%A9nesis-ojeda-451576302/', iconClass: 'fab fa-linkedin', target: '_blank' },
    { href: 'mailto:genesisojeda@ojedatech.com', iconClass: 'fas fa-envelope' },
    { href: 'https://github.com/DevQueenPR', iconClass: 'fab fa-github', target: '_blank' }
  ];
}
