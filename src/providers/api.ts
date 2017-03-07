import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

// import { Environment } from './environment';

/*
  Generated class for the Api provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Api {

  constructor(public http: Http) {
    console.log('Hello Api Provider');
  }

  /**
   * Get fake user
   */
  getUser() {
    return new Promise(resolve => {
      this.http.get('https://randomuser.me/api/')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data.results[0]);
        });
    });
  }

  get(endpoint: string, params?: any, options?: RequestOptions) {
    if (!options) {
      options = new RequestOptions();
    }

    // Support easy query params for GET requests
    if (params) {
      let p = new URLSearchParams();
      for(let k in params) {
        p.set(k, params[k]);
      }
      // Set the search field if we have params and don't already have
      // a search field set in options.
      options.search = !options.search && p || options.search;
    }

    // return this.http.get(this.environment.getApiUrl() + '/' + endpoint, options);
    return this.http.get(endpoint, options);
  }

  post(endpoint: string, body: any, options?: RequestOptions) {
    // return this.http.post(this.environment.getApiUrl() + '/' + endpoint, body, options);
    return this.http.post(endpoint, body, options);
  }

}
