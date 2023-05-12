import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegionRoutingModule} from './region-routing.module';
import {RegionComponent} from './region.component';
import {RegionListComponent} from './region-list/region-list.component';
import {RegionIconComponent} from "../../core/icons/region-icon/region-icon.component";
import {ButtonComponent} from "../../core/components/button/button.component";
import {RegionViewComponent} from './region-view/region-view.component';
import {MapComponent} from "../../core/components/map/map.component";
import {RegionEditComponent} from './region-edit/region-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TextFieldComponent} from "../../core/components/text-field/text-field.component";
import {CheckboxComponent} from "../../core/components/checkbox/checkbox.component";
import {RegionMapComponent} from './region-map/region-map.component';
import {RegionReportingPointViewComponent} from './region-reporting-point-view/region-reporting-point-view.component';
import { RegionReportingPointViewMapComponent } from './region-reporting-point-view-map/region-reporting-point-view-map.component';
import { RegionReportingPointInfoComponent } from './region-reporting-point-info/region-reporting-point-info.component';

@NgModule({
  declarations: [
    RegionComponent,
    RegionListComponent,
    RegionViewComponent,
    RegionEditComponent,
    RegionMapComponent,
    RegionReportingPointViewComponent,
    RegionReportingPointViewMapComponent,
    RegionReportingPointInfoComponent,
  ],
  imports: [
    CommonModule,
    RegionRoutingModule,
    RegionIconComponent,
    ButtonComponent,
    MapComponent,
    FormsModule,
    TextFieldComponent,
    ReactiveFormsModule,
    CheckboxComponent,
  ]
})
export class RegionModule {
}
