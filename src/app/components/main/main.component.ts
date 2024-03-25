import {
  Component,
  Inject,
  Renderer2,
  ElementRef,
} from '@angular/core';
import { Howl } from 'howler';
import { BasicModule } from '../../shared/basic/basic.module';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BasicModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  isMusicOn: boolean = false;

  textData: string[] = [
    `Happy anniversary! <br> <br> I love you. <br> <br> I love you so much. <br> <br> ❤️❤️❤️❤️❤️❤️❤️❤️`,
    `I know things haven't been so simple and loving for us lately, but I'm confident we'll get through this period too. <br> <br>
    I will do my best to be a better version of myself and provide you all the happiness I can. I love you.`,
    `I recall the first time I saw you, and I still see you like that at times. It's difficult for me to envision a life without you; the last year without you was extremely difficult and cruel. Everyone asked me to move on with my life, and I tried. But you have a hold on me. Forever, I am yours!`,
    `I have and will always be there for you. You are my soulmate, and I feel empty when you are not with me. I may not say it often enough, but I love you. I want to love you for no reason, and I simply want to be with you. Keep loving me forever. 😘`,
    `I realise that's not much, but I wanted to produce something for you on my own and didn't have much time to polish it. Hope you enjoyed it.Happy anniversary again, my darling! I look forward to spending the rest of my life with you FOREVER!`,
  ];
  textIndex: number = 0;
  animate: boolean = false;
  showTextBox: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) {
    const localStorage = document.defaultView?.localStorage;

    if (localStorage) {
      this.isMusicOn =
        localStorage.getItem('isMusicOn') &&
        localStorage.getItem('isMusicOn') === 'true'
          ? true
          : false;
    }
  }

  ngOnInit(): void {
    if (!this.isMusicOn) {
      const sound = new Howl({
        src: ['./assets/audio.mp3'], // Update this with the path to your music file
        autoplay: true,
        loop: true, // If you want the music to loop
        volume: 0.5, // Adjust the volume as needed
      });
    }
    this.isMusicOn = true;
    localStorage.setItem('isMusicOn', 'true');
    setTimeout(() => {
      this.showTextBox = true;
      this.animate = true;
    }, 1000);
  }

  onGoAheadClick() {
    this.animate = false;
    setTimeout(() => {
      this.textIndex += 1;
      this.animate = true;
    }, 1000);
  }

  ngOnDestroy() {
    this.isMusicOn = false;
    localStorage.setItem('isMusicOn', 'false');
  }
}
