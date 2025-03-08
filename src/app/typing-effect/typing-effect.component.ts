import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typing-effect',
  templateUrl: './typing-effect.component.html',
  styleUrls: ['./typing-effect.component.css']
})
export class TypingEffectComponent implements OnInit {
  phrases: string[] = [
    'Hello, World!',
    'Comp Sci rules!',
    'Coding is fun!'
  ];
  phraseIndex = 0;
  charIndex = 0;
  currentText = '';
  isDeleting = false;

  constructor() {}

  ngOnInit(): void {
    this.type();
  }

  type() {
    const consoleElement = document.querySelector('.console') as HTMLElement;

    if (this.isDeleting) {
      this.currentText = this.phrases[this.phraseIndex].substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.currentText = this.phrases[this.phraseIndex].substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    consoleElement.innerHTML = `Console.Write("${this.currentText}<span class="cursor">|</span>");`;

    if (!this.isDeleting && this.charIndex === this.phrases[this.phraseIndex].length) {
      setTimeout(() => {
        this.isDeleting = true;
      }, 1000);
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
    }

    setTimeout(() => this.type(), this.isDeleting ? 100 : 200);
  }
}
