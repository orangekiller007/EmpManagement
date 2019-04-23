import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddempService {
  uri = 'http://localhost:4000/home';
 // uri = '/home';
  constructor(private http:HttpClient) { }
addEmployee(name,position,joining_year,address,age)
{
const obj={
  name:name,
  position:position,
  joining_year:joining_year,
  address:address,
  age:age

};

console.log(obj);

this.http.post(`${this.uri}/add`,obj).subscribe(res=>console.log('Done'))


}


}
