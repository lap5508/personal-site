import { AfterViewInit, Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, Input } from '@angular/core';
import { MatBottomSheet } from '@angular/material';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMeComponent implements OnInit, AfterViewInit {
  @Input('backgroundGray') public backgroundGray;

  public portfolios = [{
    photo: 'assets/images/sq-10.jpg',
    text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus 
    vitae dignissimos, sapiente est atque tenetur`,
    title: 'Project One',
  }, {
    photo: 'assets/images/sq-11.jpg',
    text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus 
    vitae dignissimos, sapiente est atque tenetur`,
    title: 'Project Two',
  }, {
    photo: 'assets/images/sq-12.jpg',
    text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus 
    vitae dignissimos, sapiente est atque tenetur`,
    title: 'Project Three',
  }, {
    photo: 'assets/images/sq-13.jpg',
    text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus 
    vitae dignissimos, sapiente est atque tenetur`,
    title: 'Project Four',
  }, {
    photo: 'assets/images/sq-15.jpg',
    text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus 
    vitae dignissimos, sapiente est atque tenetur`,
    title: 'Project Five',
  }, {
    photo: 'assets/images/sq-16.jpg',
    text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus 
    vitae dignissimos, sapiente est atque tenetur`,
    title: 'Project Six',
  }];

  constructor(private bottomSheet: MatBottomSheet, private _cdr: ChangeDetectorRef) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this._cdr.detectChanges();
  }

}
