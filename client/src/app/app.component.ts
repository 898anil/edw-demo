import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users:any = []
  constructor(private httpClient:HttpClient){

  }
  ngOnInit(){
  	this.httpClient.get('http://3.83.144.164:3000/api/users').subscribe((data)=>{
  		this.users = data
  	})
  }
}
