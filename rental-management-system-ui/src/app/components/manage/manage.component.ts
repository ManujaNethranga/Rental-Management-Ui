import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [HttpClientModule,NgFor,FormsModule],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent implements OnInit {

  
  ngOnInit(): void {
    this.loadCustomers();
    this.loadItems();
  }

  constructor(private http:HttpClient){}

  public customerList : any ;
  public itemList : any ;

  loadCustomers(){
    this.http.get("http://localhost:8080/customer").subscribe(res=>{
      this.customerList= res;
    })
  }

  loadItems(){
    this.http.get("http://localhost:8080/items").subscribe(res=>{
      this.itemList = res;
    })
  }

  public selectedCustomer = {
    "customerId": undefined,
    "name" : undefined,
    "city" : undefined,
    "contact" : undefined
  }


  selectCustomer(customer : any){
    if(customer!= null){
      this.selectedCustomer = customer;
    }

  }

  updateCustomer(){
    console.log(this.selectedCustomer);
    this.http.put("http://localhost:8080/customer",this.selectCustomer).subscribe(res=>{
      console.log("updated");
    });
  }


}


