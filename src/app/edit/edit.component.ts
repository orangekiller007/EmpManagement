import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AddempService } from '../addemp.service';
import { FetchdataService } from '../fetchdata.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  business: any = {};
  constructor(private router: Router,private bs:FetchdataService,private route: ActivatedRoute) { }

  ngOnInit() {    this.route.params.subscribe(params => {
    this.bs.editEmp(params['id']).subscribe(res => {
      this.business = res;
  });
});
  }

  

  updateEmp(e) {
    var name=e.target.elements[0].value;
var position=e.target.elements[1].value;
var joining_year=e.target.elements[2].value;
var address=e.target.elements[3].value;
var age=e.target.elements[4].value;
    this.route.params.subscribe(params => {
       this.bs.updateEmp(name, position, joining_year,address,age, params['id']);
       this.router.navigate(['home']);
 });}
}
