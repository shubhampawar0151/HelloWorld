import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisComponent } from './analysis/analysis.component';
import { ClickComponent } from './click/click.component';
import { ExportSVGComponent } from './export-svg/export-svg.component';
import { FirstComponent } from './first/first.component';
import { FrontComponent } from './front/front.component';
import { HoverComponent } from './hover/hover.component';
import { InitialComponent } from './initial/initial.component';
import { RandomComComponent } from './random-com/random-com.component';
import { SecondComponent } from './second/second.component';
import { ZoomComponent } from './zoom/zoom.component';

const routes: Routes = [
  { path: 'fetch', component: FirstComponent },
  { path: 'store', component: SecondComponent },
  {path: 'home', component: FrontComponent },
  {path: 'click', component: ClickComponent },
  {path: 'initial', component: InitialComponent },
  {path: 'hover', component: HoverComponent },
  {path: 'zoom', component: ZoomComponent },
  {path: 'animation', component: RandomComComponent },
  {path: 'export', component: ExportSVGComponent },
  {path: 'analysis', component: AnalysisComponent },
  {path: '', pathMatch: 'full', redirectTo: 'analysis'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
