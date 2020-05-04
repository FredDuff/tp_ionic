import { Component } from '@angular/core';

import { TwFiltersService } from '../services/twFilters.service';
import { Filter } from '../models/filter';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public filter: Filter;

  constructor(private twFiltersService: TwFiltersService) {}

  ngOnInit() {
    this.filter = this.twFiltersService.filterArchivedTw;
  }

}
