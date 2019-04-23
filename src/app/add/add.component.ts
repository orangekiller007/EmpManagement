import { Component, OnInit } from '@angular/core';
import { AddempService } from '../addemp.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private bs:AddempService ) { }

  ngOnInit() {
  }

  addemp(e)
  {
    e.preventDefault();
   // alert("ss");
var name=e.target.elements[0].value;
var position=e.target.elements[1].value;
var joining_year=e.target.elements[2].value;
var address=e.target.elements[3].value;
var age=e.target.elements[4].value;
//alert("hh")
this.bs.addEmployee(name,position,joining_year,address,age);

  }

}
