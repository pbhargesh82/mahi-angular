import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { BasicModule } from '../../shared/basic/basic.module';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BasicModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  isPlay: boolean = false;
  youAreMy: string = '';
  showSunshineForm: boolean = false;
  showError: boolean = false;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    const localStorage = document.defaultView?.localStorage;

    if (localStorage) {
      localStorage.setItem('isMusicOn', 'false');
    }
  }

  ngOnInit(): void {}

  toogleIsPlay(): void {
    this.isPlay = true;
    setTimeout(() => {
      this.showSunshineForm = true;
    }, 2000);
  }

  onGoAhead(): void {
    if (this.youAreMy.trim().toLowerCase() === 'sunshine') {
      console.log('Yes, right answer!');
      this.showError = false;
      this.router.navigate(['/main']);
    } else {
      console.log('No, wrong answer!');
      //! TODO: Show something like a message may be a hint.
      this.showError = true;
    }
  }
}
