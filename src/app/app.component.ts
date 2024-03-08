import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mahi-angular';

  isPlay: boolean = false;
  youAreMy: string = '';
  showSunshineForm: boolean = false;

  toogleIsPlay(): void {
    this.isPlay = true;
    setTimeout(() => {
      this.showSunshineForm = true;
    }, 2000);
  }

  onGoAhead():void {
    if (this.youAreMy.trim().toLowerCase() === 'sunshine') {
      console.log('Yes, right answer!')
      //! TODO: Show a progress bar on right answer and plan pages ahead! Start a music if you can after these.
    } else {
      console.log('No, wrong answer!')
      //! TODO: Show something like a message may be a hint.
    }
  }
}
