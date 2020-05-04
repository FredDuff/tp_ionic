import { Injectable } from '@angular/core';
import { Tw } from '../models/tw';
import { Filter } from '../models/filter';


@Injectable({
  providedIn: 'root'
})
export class TwFiltersService {

  public filterArchivedTw: Filter = {
    label: 'Afficher les tweets archivés',
    key: 'archived_at', 
    isChecked: false,
  };

  constructor() { }

  public applyFilters(tws: Tw[]): Tw[] {
    return tws.filter(tw => {
      if (tw[this.filterArchivedTw.key]) {
        return this.filterArchivedTw.isChecked;
      };
      return true;
    });
  }
}
