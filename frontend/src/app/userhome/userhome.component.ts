import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  username:String='';
  constructor(private _user:UserService, private _router:Router){
    this._user.user()
    .subscribe(
      data => this.addName({ data }),
      error => this._router.navigate(['/login'])
    )
    
}

addName(data:any){
  this.username = data.username;
}



  

  ngOnInit(){

  }

  logout(){
    this._user.logout()
    .subscribe({
      next: (data) => {console.log(data);this._router.navigate(['/login'])},
      error: (error) => this._router.navigate(['/login']),
      complete: () => console.info('complete') 

    }

)}
}
function compelete(): (() => void) | null | undefined {
  throw new Error('Function not implemented.');
}

