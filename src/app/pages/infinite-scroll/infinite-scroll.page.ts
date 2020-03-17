import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss']
})
export class InfiniteScrollPage implements OnInit {
  //para hacer referencia a elementos del html
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  data: any[] = Array(20);

  constructor() {}

  ngOnInit() {}

  loadData(event) {
    console.log('cargando...');

    setTimeout(() => {
      if (this.data.length > 50) {
        event.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }
      const nuevo = Array(20);
      this.data.push(...nuevo);
      event.target.complete();
    }, 1000);
  }
}
