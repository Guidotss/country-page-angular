import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  constructor(private http: HttpClient) {}
  private readonly apiUrl: string = 'https://restcountries.com/v3.1';

  searchCapital(term: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/capital/${term}`)
      .pipe(catchError((err) => of([])));
  }

  searchCountry(term: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/name/${term}`)
      .pipe(catchError((err) => of([])));
  }

  searchRegion(term: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/region/${term}`)
      .pipe(catchError((err) => of([])));
  }

  searchCountryByAlpha(id: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${id}`).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError((err) => of(null))
    );
  }
}
