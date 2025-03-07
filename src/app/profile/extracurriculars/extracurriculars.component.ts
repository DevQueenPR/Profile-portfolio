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
    { src: 'https://www.arecibo.inter.edu/wp-content/uploads/2018/04/banner_honor.jpg', alt: 'Honors Program logo' },
    { src: '/assets/images/honor_program_picture3.png', alt: 'Honors Certificate' },
    { src: '/assets/images/honor_program_picture1.png', alt: 'Honors Investigative Event 1' },
    { src: '/assets/images/honor_program_picture2.png', alt: 'Honors Investigative Event 2' },
  ]; 

  rectorsImages = [
    { src: '/assets/images/rectors_certificate1.png', alt: 'Certificate of the Rector 2024', width: "300px", height: "400px"  },
    { src: '/assets/images/rectors_certificate2.png', alt: 'Certificate of the Rector 2024', width: "300px", height: "400px"  },
  ];

  researchImages = [
    { src: '/assets/images/research1.jpg', alt: 'Honor Mention Certificate'},
    { src: '/assets/images/research2.png', alt: "Certificate of the Rector 2023" }
  ];

  learningImages = [
    { src: '/assets/images/artificialinteligence.png', alt: 'Artifitial Intelligence Certificate' },
    { src: '/assets/images/quantum1.png', alt: "Certificate of Business Foundation by IBM"},
    { src: '/assets/images/quantum2.png', alt: "Certificate of Quantum-Safe Cryptography by IBM"},
  ];

}
