import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx'

@Component({
  selector: 'app-audio-reprod',
  templateUrl: './audio-reprod.page.html',
  styleUrls: ['./audio-reprod.page.scss'],
})
export class AudioReprodPage implements OnInit {

  constructor(private nativeAudio: NativeAudio) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.nativeAudio.preloadSimple('num1', 'assets/audio/mario-bros game over.mp3');
    this.nativeAudio.preloadSimple('num2', 'assets/audio/ringtones-pink-panther.mp3');
    this.nativeAudio.preloadSimple('num3', 'assets/audio/ringtones-the-avengers.mp3');
  }

  playone(){
    this.nativeAudio.play('num1')
  }
  playtwo(){
    this.nativeAudio.play('num2')
  }
  playthree(){
    this.nativeAudio.play('num3')
  }

  IonViewWillLeave(){
    this.nativeAudio.unload('num1');
    this.nativeAudio.unload('num2');
    this.nativeAudio.unload('num3');
  }
}
