import { Component, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';

import { TwService } from '../services/tw.service';
import { Tw } from '../models/tw';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public tws: Tw[];
  
  @ViewChild('listTw',  {static: false}) listTw: IonList;

  constructor(private twService: TwService) {}

  ngOnInit() {
  }
  
  ionViewWillEnter() {
    this.twService.getTws().then(tws => this.tws = tws);
  }

  deleteTw(tw: Tw) {
    this.twService.deleteTw(tw).then(tws => this.tws = tws);
    this.listTw.closeSlidingItems();
  }
  
  archiveTw(tw: Tw) {
    tw.archived_at = new Date;
    this.twService.updateTws().then(tws => this.tws = tws);
    this.listTw.closeSlidingItems();
  }
}
