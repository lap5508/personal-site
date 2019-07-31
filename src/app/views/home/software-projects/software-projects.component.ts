import { Component, OnInit, Input } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-software-projects',
  templateUrl: './software-projects.component.html',
  styleUrls: ['./software-projects.component.scss']
})
export class SoftwareProjectsComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  public carouselOptions: NguCarouselConfig;
  public projects = [{
    icon: 'dashboard',
    text: `I am actively developing an online store where my mom, who loves crafting artisan soaps, 
    can showcase and eventually sell her products.`,
    title: 'Artisan Soap Online Site'
  }, {
    icon: 'perm_data_setting',
    // tslint:disable
    text: `In my job as a Tech Tutor, I engaged in a side project with the Information Technology Learning and Development group to develop a web page that shows how the groups IT goals and projects align with the schools strategic agenda. I created a visually aesthetic and highly functional sankey diagram using the d3 JavaScript library that is responsive and informative.`,
    title: 'Relationship Visualization Tool'
  }, {
    icon: 'stay_primary_portrait',
    // tslint:disable
    text: `Working with Penn State's IST Mobile Consulting Group, I developed an Android application that interacts with a Smoothieboard built into a custom 3D printer in order to print files stored on the cloud from an Android device. I had the opportunity to test this application in Kenya so it could eventually be used to print inexpensive hospital equipment to alleviate last-mile supply chain difficulties.`,
    title: 'Android 3D Printing Mobile App'
  }, {
    icon: 'person',
    title: `Drum Sample Classifier`,
    text: 'This is a project that I engaged in alongside 2 other student in a class I took on utilizing deep learning frameworks to enhance multimedia computing. We wrote an application in Python that utilizes Google\'s TensorFlow and an audio feature detection library called Librosa to classify drum hits and organize an entire audio drum sample library.'
  }];
  
  constructor() { }

  ngOnInit() {
    this.carouselOptions = {
      grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
      slide: 2,
      speed: 400,
      interval: {timing: 4000},
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true
    }
  }

}
