import {
  Component
} from '@angular/core';
import {User} from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users=[];
  success=false;
  user={
    first_name:'Song',
    last_name:'Wilson',
    email:'abc@cde.efg',
    password:'Password.12345678',
    password2:'Password.12345678',
    street_address:'123 Sesame St',
    apt:'',
    state:'California',
    city:'Spring Field',
    feelingLucky:'true',
  }
  newUser;
  onSubmit(){
    this.newUser=this.user;
    this.users.push(this.user);
    // this.user.first_name=''; 
    this.success=true;   
    console.log('submitted!');
    this.user=new User();
  }

}
