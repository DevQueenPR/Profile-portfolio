// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-extracurriculars',
// //   standalone: true,
// //   imports: [],
// //   templateUrl: './extracurriculars.component.html',
// //   styleUrl: './extracurriculars.component.css'
// // })
// // export class ExtracurricularsComponent {


// // }

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
// import { ViewportScroller } from '@angular/common';
// import { filter } from 'rxjs/operators';

// @Component({
//   selector: 'app-extracurriculars',
//   templateUrl: './extracurriculars.component.html',
//   styleUrls: ['./extracurriculars.component.css']
// })
// export class ExtracurricularsComponent implements OnInit {

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private viewportScroller: ViewportScroller
//   ) {}

//   ngOnInit() {
//     this.router.events.pipe(
//       filter(event => event instanceof NavigationEnd)
//     ).subscribe(() => {
//       setTimeout(() => { // Ensure the page is fully rendered before scrolling
//         const fragment = this.route.snapshot.fragment;
//         if (fragment) {
//           this.viewportScroller.scrollToAnchor(fragment);
//         }
//       }, 100); // Small delay to allow content to load
//     });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-extracurriculars',
  templateUrl: './extracurriculars.component.html',
  styleUrls: ['./extracurriculars.component.css']
})
export class ExtracurricularsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit() {
    // Listen for route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const fragment = this.route.snapshot.fragment;
      if (fragment) {
        this.viewportScroller.scrollToAnchor(fragment);
      }
    });
  }
}
