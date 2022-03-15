import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class StockistService extends BaseService {

  constructor() {
    super();
  }

  all(): Promise<any> {

    const stockists = [
      { name: 'Cards Enterprise', contact: '078967787', address: 'Kikuubo' },
      { name: 'Mukasa Eddie', contact: '0787890987', address: 'Kyebando' },
      { name: 'Elphius Malema', contact: '0701234567', address: 'Busega' },
      { name: 'Henry Mayiga', contact: '0701234567', address: 'Buwaate' },
    ];
    return new Promise(resolve => {
      resolve(stockists);
    });

  }
}
