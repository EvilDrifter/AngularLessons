import { Component, OnInit } from '@angular/core';
import { JsonSampleService } from '../json-sample.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  domModel: IDomNode;

  constructor(private service: JsonSampleService) { }

  ngOnInit() {
  }

  GetJsonData() {
  this.service.GetJsonFileFromApi()
      .subscribe(x => {
          this.domModel = x;
      });
  }
}
