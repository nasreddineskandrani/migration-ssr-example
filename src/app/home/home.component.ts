import { Component } from '@angular/core';
import { AppInitService } from '../app-init.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private appInitService: AppInitService) {

  }

  ngOnInit() {
    console.log('appInitService', this.appInitService.data);
  }

}
