import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-all-episodes',
  templateUrl: './all-episodes.component.html',
  styleUrls: ['./all-episodes.component.scss'],
})
export class AllEpisodesComponent implements OnInit {

  allEpisodes: any;

  constructor(
    private randmService: RickAndMortyService
  ) { }

  ngOnInit() {
    this.randmService.getAllEpisodes().then( (res: any) => {
      this.allEpisodes = res;
      console.log (this.allEpisodes);
  });
  }

}
