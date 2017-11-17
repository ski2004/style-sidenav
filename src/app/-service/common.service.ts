import {Router} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor(private router: Router) {}


  Page(url: string) {
    this.router.navigate([ url ]);
  }
}
