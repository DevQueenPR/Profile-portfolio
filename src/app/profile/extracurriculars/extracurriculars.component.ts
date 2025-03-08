import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-extracurriculars',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './extracurriculars.component.html',
  styleUrls: ['./extracurriculars.component.css']
})
export class ExtracurricularsComponent implements OnInit {
  @ViewChild('scrollTarget') scrollTarget!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100); // Delay to ensure rendering
      }
    });
  }

  honorsImages = [
    { src: 'https://www.ojedatech.com/genesis/assets/images/honor_logo.png', alt: 'Honors Program logo' },
    { src: 'https://www.ojedatech.com/genesis/assets/images/honor_program_picture3.png', alt: 'Honors Certificate' },
    { src: 'https://www.ojedatech.com/genesis/assets/images/honor_program_picture1.png', alt: 'Honors Investigative Event 1' },
    { src: 'https://www.ojedatech.com/genesis/assets/images/honor_program_picture2.png', alt: 'Honors Investigative Event 2' },
    { src: 'https://www.ojedatech.com/genesis/assets/images/honor_program_picture4.png', alt: 'Honors Community Service' },
    { src: 'https://www.ojedatech.com/genesis/assets/images/community_service1.png', alt: 'Honors Community Service' },
  ]; 

  rectorsImages = [
    { src: 'https://www.ojedatech.com/genesis/assets/images/rectors_award2.png', alt: 'Certificate and medal of the Rector'},
    { src: 'https://www.ojedatech.com/genesis/assets/images/rectors_award3.png', alt: 'Certificate and medal of the Rector'},
    { src: 'https://www.ojedatech.com/genesis/assets/images/rectors_awards.png', alt: 'Awards of the Rectors'},
    { src: 'https://www.ojedatech.com/genesis/assets/images/rectors_certificate1.png', alt: 'Certificate of the Rector 2024'},
    { src: 'https://www.ojedatech.com/genesis/assets/images/rectors_certificate2.png', alt: 'Certificate of the Rector 2024'},
  ];

  researchImages = [
    { src: 'https://www.ojedatech.com/genesis/assets/images/research1.png', alt: 'Honor Mention Certificate'},
    { src: 'https://www.ojedatech.com/genesis/assets/images/research2.png', alt: "Certificate of the Rector 2023" }
  ];

  learningImages = [
    { src: 'https://www.ojedatech.com/genesis/assets/images/artificialinteligence.png', alt: 'Artifitial Intelligence Certificate' },
    { src: 'https://www.ojedatech.com/genesis/assets/images/quantum1.png', alt: "Certificate of Business Foundation by IBM"},
    { src: 'https://www.ojedatech.com/genesis/assets/images/quantum2.png', alt: "Certificate of Quantum-Safe Cryptography by IBM"},
    { src: 'https://www.ojedatech.com/genesis/assets/images/together_certification.png', alt: "Asertivity participation certificate"},
    { src: 'https://www.ojedatech.com/genesis/assets/images/webinar_certification.png', alt: "Webinar participation certificate"},
    { src: 'https://www.ojedatech.com/genesis/assets/images/google_certification.png', alt: "Google participation certificate"},
  ];

}
