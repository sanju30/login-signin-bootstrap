import { Component,OnInit } from '@angular/core';
import {SignInService} from 'C:/Users/sanjana.k/angular-bootstrap-example/src/app/sign-in.service';
import {signin} from 'C:/Users/sanjana.k/angular-bootstrap-example/src/app/sign-in';
import { ProviderAst } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [SignInService]
})
export class AppComponent {
  contacts :Contact[];
  contact :Contact;
  first_name:string;
  last_name:string;
  password:string;
  repassword:string;


constructor( private contactService : SignInService) { }
  addContacts()
  {
    const newContact ={
      first_name : this.first_name,
      last_name : this.last_name,
      password:this.password,
      repassword:this.password,
    }

    this.contactService.addSignInContact(newContact)
  .subscribe(contact => {
    this.contacts.push(contact);
    this.contactService.getSignInContacts()
    .subscribe( contacts => this.contacts = contacts);
  }
  
);
  }
  

  deletContact(id:any)
  {
    var contacts = this.contacts;
    this.contactService.deleteSignInContact(id)
    .subscribe(data=> {
      if(data.n==1)
      {
        for(var i =0;i<contacts.length;i++)
        {
          if(contacts[i]._id==id)
          {
            contacts.splice(i,1);
          }
        }
      }
    })
  }
  ngOnInit() {
    this.contactService.getSignInContacts()
    .subscribe( contacts => this.contacts = contacts);
  }

}
