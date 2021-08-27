import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { sort } from './employee.component';


@Component({
  selector: 'app-emptable',
  templateUrl: './emptable.component.html',
  styleUrls: [ './emptable.component.css']
})




export class EmptableComponent  {
 
  
  

  constructor(private _router : Router) { }
  navigateToSearch() {
    this._router.navigate(['Search'])
  }



  headers = ["Id", "Name","Department","Joiningdate"];
  
  rows : any =  [
    {
      "Id" : 11,
      "Name" : "Ash",
      "Department" : "Finance",
      "Joiningdate" : "08/10/2016"
  
    },
    {
      "Id" : 12,
      "Name" : "John",
      "Department" : "Hr",
      "Joiningdate" : "18/01/2011"
    },
    {
      "Id" : 13,
      "Name" : "Zuri",
      "Department" : "Operations",
      "Joiningdate" : "28/11/2019"
    },
    {
      "Id" : 14,
      "Name" : "Vish",
      "Department" : "Development",
      "Joiningdate" : "07/07/2017"
    },
    {
      "Id" : 15,
      "Name" : "Barry",
      "Department" : "Operations",
      "Joiningdate" : "19/08/2014"
    },
    {
      "Id" : 16,
      "Name" : "Ady",
      "Department" : "Finance",
      "Joiningdate" : "05/10/2014"
    },
    {
      "Id" : 17,
      "Name" : "Gare",
      "Department" : "Development",
      "Joiningdate" : "06/04/2014"
    },
    {
      "Id" : 18,
      "Name" : "Hola",
      "Department" : "Development",
      "Joiningdate" : "08/12/2010"
    },
    {
      "Id" : 19,
      "Name" : "Ola",
      "Department" : "HR",
      "Joiningdate" : "07/05/2011"
    },
    {
      "Id" : 20,
      "Name" : "Kim",
      "Department" : "Finance",
      "Joiningdate" : "20/10/2010"
    }
  ]
}









//  constructor() { }
//    ngOnInit() : void {

//    }
//  }

//  export interface IEmployee {

//   employeeId: number;
//   employeeName: string;
//   employeeDepartment: string;
//   employeeJoiningdate: string;

// }

// export interface filterResultDataList {
//   employeeId: number;
//   employeeName: string;
//   employeeDepartment: string;
//   employeeJoiningdate: string;
// }
  



   
   
  















// function ngOnInit() {
//   throw new Error('Function not implemented.');
// }
 // constructor() { 

  //ngOnInit(): void {
  //}
// data = <any>()

// this.data = [
//  { "id": 11, "name": "Ash",  "department": "Finance",    "joining_date": 8/10/2016 },
// { "id": 12, "name": "John", "department": "HR",         "joining_date": 18/1/2011 },
//  { "id": 13, "name": "Zuri", "department": "Operations", "joining_date": 28/11/2019},
//  { "id": 14, "name": "Vish", "department": "Development","joining_date": 7/7/2017  },
//  { "id": 15, "name": "Barry","department": "Operations", "joining_date": 19/8/2014 },
//  { "id": 16, "name": "Ady",  "department": "Finance",    "joining_date": 5/10/2014 }, 
//  { "id": 17, "name": "Gare", "department": "Development","joining_date": 6/4/2014  },
// { "id": 18, "name": "Hola", "department": "Development","joining_date": 8/12/2010 }, 
//  { "id": 19, "name": "Ola",  "department": "HR",         "joining_date": 7/5/2011  },
//  { "id": 20, "name": "Kim",  "department": "Finance",    "joining_date": 20/10/2010}]
// }

  //  headers = ["ID", "Name", "Department", "Joining_date"];

 

//  export interface IEmployee {

//   ID: number;
//   Name: string;
//   Department: string;
//   Joining_date: string;

// }
