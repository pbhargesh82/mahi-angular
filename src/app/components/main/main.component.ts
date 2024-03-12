import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Howl } from 'howler';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  constructor(
    private router: Router,
  ) { }

  isMusicOn: boolean = false;

  ngOnInit(): void {
    if (!this.isMusicOn) {
      const sound = new Howl({
        src: ['./assets/audio.mp3'], // Update this with the path to your music file
        autoplay: true,
        loop: true, // If you want the music to loop
        volume: 0.5 // Adjust the volume as needed
      });
    }
    this.isMusicOn = true;
  }

}
