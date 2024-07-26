import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [HttpClientModule,NgFor,FormsModule],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent {

  constructor(private http:HttpClient){}

  public customerList : any ;

  loadCustomers(){
    this.http.get("http://localhost/8080/items").subscribe(res=>{
      this.customerList= res;
    })
  }
}
