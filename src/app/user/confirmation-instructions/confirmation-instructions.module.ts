import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationInstructionsComponent } from './confirmation-instructions.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MdButtonModule, MdChipsModule, MdIconModule, MdProgressBarModule, MdProgressSpinnerModule,
  MdTooltipModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdIconModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdButtonModule,
    MdChipsModule,
    MdTooltipModule,
    FormsModule
  ],
  declarations: [ConfirmationInstructionsComponent]
})
export class ConfirmationInstructionsModule { }