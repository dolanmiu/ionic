import { Component, NgModule } from '@angular/core';
import { IonicApp, IonicModule } from '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class E2EPage {
  items = [];
  images = [
    'bandit.jpg',
    'batmobile.jpg',
    'blues-brothers.jpg',
    'bueller.jpg',
    'delorean.jpg',
    'eleanor.jpg',
    'general-lee.jpg',
    'ghostbusters.jpg',
    'knight-rider.jpg',
    'mirth-mobile.jpg'
  ];

  constructor() {
    for (var i = 0; i < 1000; i++) {
      this.items.push(i);
    }
  }

  getRandomThumbnail(): string {
    let imgString = this.images[Math.floor(Math.random() * this.images.length)];

    return 'http://localhost:8000/dist/e2e/img/img/' + imgString;
  }

}


@Component({
  template: '<ion-nav [root]="root"></ion-nav>'
})
export class E2EApp {
  root = E2EPage;
}


@NgModule({
  declarations: [
    E2EApp,
    E2EPage
  ],
  imports: [
    IonicModule.forRoot(E2EApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    E2EApp,
    E2EPage
  ]
})
export class AppModule {}
