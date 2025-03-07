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
    { src: '/assets/images/honor_logo.png', alt: 'Honors Program logo' },
    { src: '/assets/images/honor_program_picture3.png', alt: 'Honors Certificate' },
    { src: '/assets/images/honor_program_picture1.png', alt: 'Honors Investigative Event 1' },
    { src: '/assets/images/honor_program_picture2.png', alt: 'Honors Investigative Event 2' },
    { src: '/assets/images/community_service1.png', alt: 'Honors Community Service' },
  ]; 

  rectorsImages = [
    { src: '/assets/images/rectors_awards.png', alt: 'Awards of the Rectors', width: "300px", height: "400px"  },
    { src: '/assets/images/rectors_certificate1.png', alt: 'Certificate of the Rector 2024', width: "300px", height: "400px"  },
    { src: '/assets/images/rectors_certificate2.png', alt: 'Certificate of the Rector 2024', width: "300px", height: "400px"  },
  ];

  researchImages = [
    { src: '/assets/images/research1.png', alt: 'Honor Mention Certificate'},
    { src: '/assets/images/research2.png', alt: "Certificate of the Rector 2023" }
  ];

  learningImages = [
    { src: '/assets/images/artificialinteligence.png', alt: 'Artifitial Intelligence Certificate' },
    { src: '/assets/images/quantum1.png', alt: "Certificate of Business Foundation by IBM"},
    { src: '/assets/images/quantum2.png', alt: "Certificate of Quantum-Safe Cryptography by IBM"},
    { src: '/assets/images/together_certification.png', alt: "Asertivity participation certificate"},
    { src: '/assets/images/webinar_certification.png', alt: "Webinar participation certificate"},
    { src: '/assets/images/google_certification.png', alt: "Google participation certificate"},
  ];

}
