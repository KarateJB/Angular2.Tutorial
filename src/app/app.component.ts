import { Component, OnInit } from '@angular/core';
import { DataService } from './data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  // defaultData: any[];
  // data: any[];
  deletedCustomer: any;

  constructor(private dataService: DataService) {

  }


  ngOnInit() {
    this.title = "Customers"; //Add comment on Mater after rebase
    // this.defaultData = this.data = customers;
  };

  //Display the deleted customer
  showDeletedCust(item: any) {
    this.deletedCustomer = item;

    //Refresh dataService.data
    // this.dataService.data = this.dataService.defaultData;
    // if (keyWord.length>0) {
    //   this.dataService.data = searchData(this.dataService.data, keyWord);
    // }
    //Also delete the item in defaultData
    //Remove item
    // var index = this.dataService.defaultData.indexOf(item);
    // this.dataService.defaultData.splice(index, 1);


  }

  //Search when [Enter] is keyup
  keySearch($event: KeyboardEvent) {
    let input = $event.target as HTMLInputElement;
    if ($event.keyCode == 13) {//Enter
      var keyWord = input.value;
      this.dataService.search(keyWord);
    }
  }


  //Search when [Search] is clicked
  btnSearch(keyWord: string) {
    this.dataService.search(keyWord);
  }


}

// const customers: any[] =
//   [{ "Name": "<b>JB</b>", "Phone": "0933XXXXXX", "My-age": 35 },
//    { "Name": "<b>Lily</b>", "Phone": "0910XXXXXX", "My-age": 18 },
//    { "Name": "<b>Leia</b>", "Phone": "N/A", "My-age": 3 },
//    { "Name": "<b>Darth vader</b>", "Phone": "02-1234567", "My-age": 28 },
//    { "Name": "<b>Hachi</b>", "Phone": "N/A", "My-age": 6 },
//    { "Name": "<b>Luke Skywalker</b>", "Phone": "02-5678901", "My-age": 10 },
//    { "Name": "<b>Anakin Skywalker</b>", "Phone": "0988ZZZZZZ", "My-age": 13 },
//    { "Name": "<b>Obi wan</b>", "Phone": "0912YYYYYY", "My-age":65 }]


function searchData(data, keyWord) {
  var filteredData = data.filter(value => {
    return value.Name.toLowerCase().indexOf(keyWord.toLowerCase()) > -1;
  });


  return filteredData;
}
