import {
  AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit,
  ViewChild
} from '@angular/core';
import * as fromRoot from '../../reducers/index';
import * as layout from './shared/layout.action';
import { Store } from '@ngrx/store';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'vr-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit, AfterViewInit, OnDestroy {

  onActivate() {}

  ngOnDestroy() {}

  ngAfterViewInit() {}

  ngOnInit() {}
}
