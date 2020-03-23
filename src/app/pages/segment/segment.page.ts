import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss']
})
export class SegmentPage implements OnInit {
  //referencia a un elemento html
  @ViewChild(IonSegment, { static: false }) segment: IonSegment;

  superHeroes: Observable<any>;

  publisher = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    //this.segment.value = 'todos';
  }
  ionViewDidEnter() {
    this.segment.value = 'todos';
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged(ev) {
    const valorSegmento = ev.detail.value;
    console.log(valorSegmento);
    this.publisher = valorSegmento;
  }
}
