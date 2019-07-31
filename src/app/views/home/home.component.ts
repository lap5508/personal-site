import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<div class="landing">
  <app-header></app-header>
  <app-intro></app-intro>
  <app-about-me></app-about-me>
  <app-software-projects [backgroundGray]="true"></app-software-projects>
  <app-jobs></app-jobs>
  <app-footer></app-footer>
  </div>`
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
  ) { }

  ngOnInit() {
  }
  ngOnDestroy() {
  }
}
