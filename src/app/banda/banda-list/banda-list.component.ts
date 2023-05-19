import { Component, OnInit } from '@angular/core';
import { Banda } from '../banda';
import { BandaService } from '../banda.service';

@Component({
  selector: 'app-banda-list',
  templateUrl: './banda-list.component.html',
  styleUrls: ['./banda-list.component.css']
})
export class BandaListComponent implements OnInit {
  bandas: Array<Banda> = [];
  oldestBand!: Banda;
  selected: Boolean =false;
  selectedBanda!: Banda;
  constructor(private bandaService: BandaService) { }

  getBandas()
  {
    this.bandaService.getBandas().subscribe((bandas) => {
      this.bandas = this.bandas;
      this.oldestBand = this.findOldestYearBand(this.bandas);
    })
  }
  ngOnInit() {
    this.getBandas();
  }
  onSelected(banda: Banda): void {
    this.selected = true;
    this.selectedBanda = banda;
  }

  findOldestYearBand(bandas: Array<Banda>): Banda  {
    let oldestYear: number | undefined = undefined;
    let oldestBanda!: Banda ;

    for (const banda of bandas) {
      if (oldestYear === undefined || banda.foundation_year < oldestYear) {
        oldestBanda = banda;
        oldestYear = banda.foundation_year;
      }
    }

    return oldestBanda;
  }

}
