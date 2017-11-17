import { CommonService } from '../-service/common.service';
import { TranslateService } from '../-lib/translate/translate.service';

import { TranslateModule } from '../-lib/translate/translate.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatIconModule , MatToolbarModule , MatTabsModule , MatButtonModule ,
  MatGridListModule , MatSidenavModule , MatFormFieldModule , MatDialogModule ,
  MatMenuModule , MatTableModule ,
 } from '@angular/material';



import { BackstageRoutingModule } from './backstage-routing.module';
import { HallComponent } from './hall/hall.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RuleComponent } from './rule/rule.component';
import { SettingComponent } from './setting/setting.component';
import { ReportComponent } from './report/report.component';
import { AccountComponent } from './account/account.component';
import { MemberComponent } from './member/member.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
    CommonModule,
    BackstageRoutingModule,
    TranslateModule,

    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatSidenavModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  declarations: [
    HallComponent,
    HeaderComponent,
    FooterComponent,
    RuleComponent,
    SettingComponent,
    ReportComponent,
    AccountComponent,
    MemberComponent,
    HomeComponent,
  ],
  providers: [
    CommonService,
    TranslateService,
  ]
})
export class BackstageModule { }
