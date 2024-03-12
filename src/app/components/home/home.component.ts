import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  isPlay: boolean = false;
  youAreMy: string = '';
  showSunshineForm: boolean = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  toogleIsPlay(): void {
    this.isPlay = true;
    setTimeout(() => {
      this.showSunshineForm = true;
    }, 2000);
  }

  onGoAhead(): void {
    if (this.youAreMy.trim().toLowerCase() === 'sunshine') {
      console.log('Yes, right answer!');
      this.router.navigate(['/main']);
      //! TODO: Show a progress bar on right answer and plan pages ahead! Start a music if you can after these.

    } else {
      console.log('No, wrong answer!');
      //! TODO: Show something like a message may be a hint.
    }
  }

}
