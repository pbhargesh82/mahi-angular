import { Component, Inject, Renderer2, ElementRef, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Howl } from 'howler';
import { BasicModule } from '../../shared/basic/basic.module';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BasicModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  isMusicOn: boolean = false;
  firstTextBox = viewChild<ElementRef>('firstTextBox');
  goAheadButton = viewChild<ElementRef>('goAheadButton');

  textData: string[] = [
    `In the bustling city, amidst the neon lights and bustling streets, an unexpected encounter sparked a whirlwind of
    emotions.Two strangers, their paths crossing by chance, exchanged a fleeting glance that ignited a curiosity neither
    could ignore.And so, their journey began`,
    `Amidst the chaos of the city, where skyscrapers towered overhead and traffic hummed incessantly, two souls found solace in each other's presence. Their chance meeting on a crowded street corner felt like destiny weaving its intricate threads. In a split second, their eyes locked, and the world around them faded into insignificance. It was as if time stood still, allowing them a fleeting moment to connect amidst the bustling energy of urban life. Little did they know, this encounter would mark the beginning of an extraordinary journey filled with twists and turns, love and laughter.`,
    `In the heart of the metropolis, where the sounds of sirens and chatter filled the air, a serendipitous encounter unfolded between two strangers. Each step they took seemed to bring them closer together, guided by an invisible force drawing them inexorably towards one another. As they exchanged casual conversation, there was an undeniable spark, an electric charge that permeated the space between them. It was a moment of pure magic, a collision of souls amidst the concrete jungle, setting their hearts ablaze with possibility.`,
    `Within the bustling cityscape, where the pulse of life beat relentlessly, two individuals found themselves entwined in a dance of fate. With every passing moment, their connection deepened, fueled by shared laughter and whispered secrets. They navigated the crowded streets hand in hand, oblivious to the world around them, lost in the euphoria of newfound companionship. From that moment on, their lives became intertwined, their destinies forever altered by the chance encounter that brought them together in the urban sprawl.`
  ];
  textIndex: number = 0;
  animate: boolean = false;
  showTextBox: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
    const localStorage = document.defaultView?.localStorage;

    if (localStorage) {
      this.isMusicOn = localStorage.getItem('isMusicOn') && localStorage.getItem('isMusicOn') === 'true' ? true : false;
    }
  }

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
    localStorage.setItem('isMusicOn', 'true');
    setTimeout(() => {
      this.showTextBox = true;
      this.animate = true;
      this.renderer.addClass(this.goAheadButton()?.nativeElement, 'flip-in-diag-1-bl');
    }, 1000);
  }

  onGoAheadClick() {
    this.textIndex += 1;
    this.animate = false;
    setTimeout(() => {
      this.animate = true;
    }, 1000);
  }

  ngOnDestroy() {
    this.isMusicOn = false;
    localStorage.setItem('isMusicOn', 'false');
  }

}
