import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent {
  constructor(private readonly countriesServices: CountriesService) {}
  public countries: Country[] = [];

  searchByRegion(term: string) {
    console.log(term);
    this.countriesServices.searchRegion(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
