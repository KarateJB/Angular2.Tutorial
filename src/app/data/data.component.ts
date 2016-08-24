import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {DataService} from './data.service'

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

  deleteCustomer(item:any){
    //emit data to parent
    this.emitDeleteCust.emit(item);

    //Remove item
    // var index = this.data.indexOf(item);
    // this.data.splice(index, 1);
    this.dataService.delete(item, this.keyWord);
  }

}
