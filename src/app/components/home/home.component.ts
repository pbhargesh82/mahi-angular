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
    this.router.navigate(['/main']);
  }
}
