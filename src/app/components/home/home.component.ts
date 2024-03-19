import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { BasicModule } from '../../shared/basic/basic.module';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BasicModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  isPlay: boolean = false;
  youAreMy: string = '';
  showSunshineForm: boolean = false;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    const localStorage = document.defaultView?.localStorage;

    if (localStorage) {
      localStorage.setItem('isMusicOn', 'false');
    }
   }

  ngOnInit(): void {
  }

  toogleIsPlay(): void {
    this.isPlay = true;
    setTimeout(() => {
      this.showSunshineForm = true;
    }, 2000);
  }

  onGoAhead(): void {
    this.router.navigate(['/main']);
    // if (this.youAreMy.trim().toLowerCase() === 'sunshine') {
    //   console.log('Yes, right answer!');
    //   this.router.navigate(['/main']);
    //   //! TODO: Show a progress bar on right answer and plan pages ahead! Start a music if you can after these.

    // } else {
    //   console.log('No, wrong answer!');
    //   //! TODO: Show something like a message may be a hint.
    // }
  }

}
