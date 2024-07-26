import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  public customer = {
    "name" : undefined,
    "city" : undefined,
    "contact" : undefined
  }

  

  constructor(private http:HttpClient){}
  saveEmployee(){
    this.http.post("http://localhost:8080/customer",this.customer).subscribe(
      (data)=>{
        Swal.fire({
          title: "Good job!",
          text: "Employee Entered Successfully!",
          icon: "success"
        });
      }
    )

  }

  public item = {
    "name" : undefined,
    "rentalPerDay" : undefined,
    "finePerDay" : undefined,
    "availability" : undefined
  }

  saveItem(){
    this.http.post("http://localhost:8080/items",this.item).subscribe(
      (data)=>{
        Swal.fire({
          title: "Good job!",
          text: "Employee Entered Successfully!",
          icon: "success"
        });
      }
    )
  }

}
