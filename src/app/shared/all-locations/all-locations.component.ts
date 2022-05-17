import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-all-locations',
  templateUrl: './all-locations.component.html',
  styleUrls: ['./all-locations.component.scss'],
})
export class AllLocationsComponent implements OnInit {

  allLocations: any;

  constructor(
    private randmService: RickAndMortyService
  ) { }

  ngOnInit() {
    this.randmService.getAllLocations().then( (res: any) => {
      this.allLocations = res;
      console.log (this.allLocations);
  });
  }
}
