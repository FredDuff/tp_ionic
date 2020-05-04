import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

import { Tw } from '../models/tw';
import { TwFiltersService } from './twFilters.service';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class TwService {

  private tws: Tw[] = [];
  private TW_STORAGE: string = "tws";

  // cptTws for simulation database id auto increment
  private cptTws: number;
  // -----------------------------------

  constructor(private twFiltersService: TwFiltersService) { }


  public async updateTws(): Promise<Tw[]> {
    await Storage.set({
      key: this.TW_STORAGE,
      value: JSON.stringify(this.tws)
    });
    return this.twFiltersService.applyFilters(this.tws);
  }

  public async postTw(tw: Tw): Promise<Tw[]>{
    // Simulation database
    this.cptTws = Number((await Storage.get({ key: "cpt" })).value) || 0;
    tw.id = this.cptTws++;
    tw.created_at = new Date();
    tw.updated_at = new Date();
    // -----------------------------------

    this.tws.unshift(tw);
    this.updateTws();

    // for simulation bdd id auto increment
    Storage.set({
      key: "cpt",
      value: this.cptTws.toString()
    });
    // -----------------------------------

    return this.twFiltersService.applyFilters(this.tws);
  }

  public async getTws(): Promise<Tw[]> {
    const tws = await Storage.get({ key: this.TW_STORAGE });
    this.tws = JSON.parse(tws.value) || [];

    return this.twFiltersService.applyFilters(this.tws);
  }

  public async deleteTw(tw: Tw): Promise<Tw[]> {
    this.tws = this.tws.filter(h => h !== tw);
    this.updateTws();
    return this.twFiltersService.applyFilters(this.tws);
  }

}
