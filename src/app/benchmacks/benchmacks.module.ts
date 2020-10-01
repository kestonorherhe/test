import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BenchmacksRoutingModule } from './benchmacks-routing.module';
import { ActionsComponent } from './actions/actions.component';
import { SharedModule } from '../shared.module';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { NgSelectModule } from '@ng-select/ng-select';
import {
	DxSelectBoxModule,
	DxTextAreaModule,
	DxDateBoxModule,
	DxFormModule,
	DxDataGridModule,
	DxSpeedDialActionModule
} from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    BenchmacksRoutingModule,
    SharedModule,
    FormsModule,
	NgSelectModule,
    MatStepperModule,
    MatIconModule,
	DxSelectBoxModule,
	DxTextAreaModule,
	DxDateBoxModule,
	DxFormModule,
	DxDataGridModule,
	DxSpeedDialActionModule
  ],
  declarations: [ActionsComponent,ActiontypesComponent,ActiontypeDetailsComponent,ActionDetailsComponent,BenchmarkComponent,BenchmarkgraphComponent,BenchmarkActionsComponent]
})
export class BenchmacksModule { }
