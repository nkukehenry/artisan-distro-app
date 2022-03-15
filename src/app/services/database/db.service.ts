import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  songsList = new BehaviorSubject([]);
  private storage: SQLiteObject;
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,
  ) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'artisandistro_db.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.storage = db;
          this.getFakeData();
        });
    });
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  fetchSongs(): Observable<any[]> {
    return this.songsList.asObservable();
  }

  // Render fake data
  getFakeData() {
    this.httpClient.get(
      'assets/dump.sql',
      { responseType: 'text' }
    ).subscribe(data => {
      this.sqlPorter.importSqlToDb(this.storage, data)
        .then(_ => {
          this.fetchSongs();
          this.isDbReady.next(true);
        })
        .catch(error => console.error(error));
    });
  }

  // Get list
  getProducts() {
    return this.storage.executeSql('SELECT * FROM songtable', []).then(res => {
      let items: any = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            product_name: res.rows.item(i).product_name,
            price: res.rows.item(i).price
          });
        }
      }
      this.songsList.next(items);
    });
  }

  // Add
  addSong(product_name, price) {
    let data = [product_name, price];
    return this.storage.executeSql('INSERT INTO songtable (product_name, price) VALUES (?, ?)', data)
      .then(res => {
        this.fetchSongs();
      });
  }

  // Get single object
  getSong(id): Promise<any> {
    return this.storage.executeSql('SELECT * FROM songtable WHERE id = ?', [id]).then(res => {
      let result = {
        id: res.rows.item(0).id,
        product_name: res.rows.item(0).product_name,
        price: res.rows.item(0).price
      };
      return result;
    });
  }

  // Update
  updateSong(id, song: any) {
    let data = [song.product_name, song.price];
    return this.storage.executeSql(`UPDATE songtable SET product_name = ?, price = ? WHERE id = ${id}`, data)
      .then(data => {
        this.fetchSongs();
      });
  }

  // Delete
  deleteSong(id) {
    return this.storage.executeSql('DELETE FROM songtable WHERE id = ?', [id])
      .then(_ => {
        this.fetchSongs();
      });
  }
}
