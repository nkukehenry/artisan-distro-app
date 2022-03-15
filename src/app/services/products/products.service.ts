import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  all(): Promise<any> {

    const products = [
      { id: 1, name: 'Nile Special', units: 1200, price: 23000, image: 'nile.jpg' },
      { id: 2, name: 'Henineken', units: 100, price: 45000, image: 'heine.png' },
      { id: 3, name: 'Tucker Lite', units: 1600, price: 63000, image: 'tucker.png' },
      { id: 4, name: 'Smirnoff Black', units: 1300, price: 47000, image: 'smirnoff.jpg' },
      { id: 5, name: 'Uganda Waragi', units: 1000, price: 93000, image: 'ug.jpg' },
    ];
    return new Promise(resolve => {
      resolve(products);
    });

  }

  getProducts(limit = 25, SortField = 'id', SortType = 'desc', search = ''): Observable<any> {

    return this.http.get(this.getProductsUrl(limit, SortField, SortType, search))
      .pipe(
        tap(_ => this.log('response received')),
        catchError(this.handleError('getTransactions', []))
      );
  }
}
