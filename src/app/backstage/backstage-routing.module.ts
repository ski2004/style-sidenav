import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HallComponent } from './hall/hall.component';
import { HomeComponent } from './home/home.component';
import { RuleComponent } from './rule/rule.component';
import { MemberComponent } from './member/member.component';
import { SettingComponent } from './setting/setting.component';
import { ReportComponent } from './report/report.component';
import { AccountComponent } from './account/account.component';



const routes: Routes = [
  {
  path: 'hall', component: HallComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'member', component: MemberComponent },
      { path: 'setting', component: SettingComponent },
      { path: 'report', component: ReportComponent },
      { path: 'account', component: AccountComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackstageRoutingModule { }
