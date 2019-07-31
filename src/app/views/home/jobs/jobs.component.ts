import { Component, OnInit, Input } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  public carouselOptions: NguCarouselConfig;
  public jobs = [{
    title: 'Wealth Platform Developer',
    date: 'June 2018 - Present',
    company: 'SEI Investments',
    location: 'Malvern, PA',
    tasks: [
      'Create dynamic front end applications using Angular2',
      'Develop and integrate Java RESTful web services',
      'Work with business units in estimating feature scope to support private banking and financial advisor markets'
    ]
  }, {
    title: 'Frontend Web Developer',
    date: 'October 2017 - May 2018',
    company: 'Student Technology Services',
    location: 'University Park, PA',
    tasks: [
      'Developed a relationship visualization tool leveraging D3.js',
      'Coordinated with student IT director to gather requirements for product development',
      'Independently tasked and maintained biweekly user stories to manage a software development lifecycle'
    ]
  }, {
    title: 'Wealth Platform Developer Intern',
    date: 'June 2017 - August 2018',
    company: 'SEI Investments',
    location: 'Oaks, PA',
    tasks: [
      'Debugged client and server-side web applications',
      'Performed analysis to identify root causes for faulty SQL statements',
      'Competed against 40 interns to determine how cognitive computing could enable the financial services industry'
    ]
  }];
  constructor() { }

  ngOnInit() {
    this.carouselOptions = {
      grid: { xs: 1, sm: 1, md: 1, lg: 3, all: 0 },
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
