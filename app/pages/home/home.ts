import {Component} from '@angular/core';
import {NavController,Alert} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController) {

  }

  private _video:MediaFile=null;

  private _record(){
    navigator.device.capture.captureVideo(
      (videoData:Array<MediaFile>) => {
            this._video=videoData[0];
          },
          (err) => {
            console.log(err);
          },
          {
              limit: 1,
              duration: 10
          }
    );
  }

  private _dummyAlert(){
    let alert = Alert.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    this.navCtrl.present(alert);
  }

}
