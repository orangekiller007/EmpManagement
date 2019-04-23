import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



import 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  constructor(private http:HttpClient) { }
  /*getData(){
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees').map((res)=>{
      console.log(res);
      return res;
    })
  }*/

  getData1(){
    return this.http.get('http://localhost:4000/view').map((res)=>{console.log(res);return res;})
  }
  deleteBusiness(id) {
    return this
              .http
              .get(`http://localhost:4000/delete/${id}`);
  }

  editEmp(id) {
    return this
            .http
            .get(`http://localhost:4000/edit/${id}`);
    }
    updateEmp(name, position, joining_year, address,age,id) {

      const obj = {
        name: name,
        position: position,
        joining_year: joining_year,
        address:address,
        age:age
        };
      this
        .http
        .post(`http://localhost:4000/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }

}
