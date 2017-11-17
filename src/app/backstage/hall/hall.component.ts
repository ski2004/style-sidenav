import { CommonService } from './../../-service/common.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../-lib/translate/translate.service';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.scss']
})
export class HallComponent implements OnInit {

  constructor(private tran:TranslateService,private c: CommonService) {
    this.tran.use('zh');
   }

  ngOnInit() {
  }

}
