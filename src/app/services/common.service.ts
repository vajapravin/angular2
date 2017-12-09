import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class CommonService {

  constructor(
    private titleService: Title,
    private router: Router,
    private location: Location
  ) {};

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  public redirectTo(url: string) {
    this.router.navigate([url], {replaceUrl:true});
  }

}