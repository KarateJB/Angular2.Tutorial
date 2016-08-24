import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  defaultData: any[];
  data: any[];

  constructor(private http: Http) {
    http.get("/api/customers.json")
      .subscribe(value => {
        this.data = this.defaultData = value.json();
      });

  }

  search(keyWord: string) {
    if (keyWord && keyWord.length > 0) {
      this.data = this.defaultData.filter(value => {
        return value.Name.toLowerCase().indexOf(keyWord.toLowerCase()) > -1;
      });
    }
    else{
      this.data= this.defaultData;
    }
  }

  delete(item: any, keyWord: string) {
    //Remove item
    var index = this.defaultData.indexOf(item);
    this.defaultData.splice(index, 1);

    //re-search
    this.search(keyWord);
  }

}
