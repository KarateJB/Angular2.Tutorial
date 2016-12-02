import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from './data.service'

@Component({
  selector: 'app-data',
  templateUrl: 'data.component.html',
  styleUrls: ['data.component.css']
})
export class DataComponent implements OnInit {

  @Input('local-data') data: any[];
  @Input('keyWord') keyWord: string;
  @Output('delete-item') emitDeleteCust = new EventEmitter<any>();

  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

  deleteCustomer(item: any) {
    //emit data to parent
    this.emitDeleteCust.emit(item);

    //Remove item
    // var index = this.data.indexOf(item);
    // this.data.splice(index, 1);
    this.dataService.delete(item, this.keyWord);
  }

  chkClass(age: number) {
    let newClass = {};
    let title = 'age';
    if (age < 18) {
      newClass[title + '-green'] = true;
      newClass[title + '-blue'] = false;
      newClass[title + '-orange'] = false;
    }
    else if(age >=18 && age< 60 ){
      newClass[title + '-green'] = false;
      newClass[title + '-blue'] = true;
      newClass[title + '-orange'] = false;
    }
    else{
      newClass[title + '-green'] = false;
      newClass[title + '-blue'] = true;
      newClass[title + '-orange'] = false;
    }

    return newClass;
  }

}
