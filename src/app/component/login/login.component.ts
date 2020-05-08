import { Component, OnInit } from '@angular/core';
import { userDataLogin } from '../../models/global';
import { httpService } from '../../services/http.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public user = {
    userName: "",
    password: ""
  };

  constructor(private http: httpService){}

  ngOnInit(): void {
  }

  login(){
    console.log(this.user);
  	this.http.login(this.user).subscribe(
  		res => {
  			console.log(res);
  		},
		err => {
			console.log(err);
		});
  }

}
