import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordInstructionsComponent } from './reset-password-instructions.component';
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
  declarations: [ResetPasswordInstructionsComponent]
})
export class ResetPasswordInstructionsModule { }
