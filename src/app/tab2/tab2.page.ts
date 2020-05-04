import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TwService } from '../services/tw.service';
import { Tw } from '../models/tw';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tw: Tw = {
    id: null,
    pseudo: '',
    message: '',
    user_id: 1,
    created_at: null,
    updated_at: null,
    archived_at: null,
  };

  constructor(
    private twService: TwService,
    private _router: Router
  ) {}

  postTw(): void {
    this.twService.postTw(this.tw);
    this.tw = {
      id: null,
      pseudo: '',
      message: '',
      user_id: 1,
      created_at: null,
      updated_at: null,
      archived_at: null,
    };
    this._router.navigate(['/']);
  }
}
