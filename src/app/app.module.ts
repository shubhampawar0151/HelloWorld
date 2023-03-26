import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HealthPipe } from '../../src/pipe/health.pipe';
import { GenderPipe } from '../../src/pipe/gender.pipe';

import { AnalysisComponent } from './analysis/analysis.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { InfoComponentComponent } from './info-component/info-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SourcePipe } from '../pipe/source.pipe';
import { TableFilterPipe } from '../pipe/table-filter.pipe';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PlotlyModule } from 'angular-plotly.js';
import { RandomComComponent } from './random-com/random-com.component';
import { ZoomComponent } from './zoom/zoom.component';
import { HoverComponent } from './hover/hover.component';
import { ClickComponent } from './click/click.component';
import { InitialComponent } from './initial/initial.component';
import { ExportSVGComponent } from './export-svg/export-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    FirstComponent,
    SecondComponent,
    HeaderComponent,
    HealthPipe,
    GenderPipe,
    SourcePipe,
    TableFilterPipe,
    AnalysisComponent,
    InfoComponentComponent,
    ContactPageComponent,
    RandomComComponent,
    ZoomComponent,
    HoverComponent,
    ClickComponent,
    InitialComponent,
    ExportSVGComponent
  ],
  imports: [
    MatTooltipModule,
    MatPaginatorModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatProgressBarModule,
    MatDividerModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxCsvParserModule,
    MatTableModule,
    NgxChartsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    PlotlyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
