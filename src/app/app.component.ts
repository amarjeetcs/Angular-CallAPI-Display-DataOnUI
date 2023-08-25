import { Component , ViewEncapsulation} from '@angular/core';
import { UsersDataService } from './services/users-data.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'API call in Angular';
  users:any;

  constructor(private userData:UsersDataService)
  {
    this.userData.users().subscribe((data)=>{
      console.warn("data",data);
      this.users=data;
    })
  }
}

