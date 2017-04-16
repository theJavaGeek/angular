import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Bike } from './bike'


@Injectable()

export class BikeService {

  constructor(private http: Http) {

  }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private bikesUrl = 'api/bikes';

  getBikes(): Promise<Bike[]> {
    return this.http.get(this.bikesUrl)
      .toPromise()
      .then(response => response.json().data as Bike[])
      .catch(this.handleError);
  }


  getBike(id: number): Promise<Bike> {
    const url = `${this.bikesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Bike)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
