import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {signin} from './sign-in';
import { map } from "rxjs/operators";




@Injectable({
  providedIn: 'root'
})
export class SignInService  {

  constructor(private http: Http) { }

//retrieving contact service
getSignInContacts()
{
 return this.http.get('http://localhost:5000/api/signin')
 .pipe(map(res=>res.json()));
}


//add contact method
addSignInContact(newContact)
{
  var headers = new Headers();
  headers.append('Contact.type','application/json');
  return this.http.post('http://localhost:5000/api/signin',newContact,{headers:headers}) .pipe(map(res=>res.json()));
}

//delete cotact method 
deleteSignInContact(id)
{
  return this.http.delete('http://localhost:5000/api/signin/'+ id)
  .pipe(map(res=>res.json()));
}
}