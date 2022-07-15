import { Component, OnInit } from '@angular/core';
import { Bill } from '../Models/bill/bill';
import { BillServiceService } from '../service/bill-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allBills: Bill[] = [];  

  constructor(private billService: BillServiceService) {
    billService.getAllBills()
      .subscribe((data: Bill[]) => {
        console.log(data);
        this.allBills = data;
      });
  }

  ngOnInit(): void {
  }

}
