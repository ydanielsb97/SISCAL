import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class httpService{
	public url = 'http://localhost:3000/api/';

	constructor(private _http: HttpClient){}

	login(user): Observable<any>{
		let userData = JSON.stringify(user);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.url+'login', userData, {headers: headers});
	}
	
}
