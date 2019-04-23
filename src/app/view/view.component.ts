import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../fetchdata.service';
import { Empmodel } from '../empmodel';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
emp:Empmodel[];
  constructor(private fetdataservice:FetchdataService) { }
  deleteBusiness(id) {
    this.fetdataservice.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');
    });
  }

  ngOnInit() {
    this.emp=[];

    this.fetdataservice.getData1().subscribe((emp:Empmodel[])=>{
      console.log("Hello world"+emp);
      this.emp=emp;
    })

  }

  

}
