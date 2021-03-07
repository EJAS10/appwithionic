import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { AppRoutingModule } from './../app-routing.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: string;
  pass: string;
  Mensaje: boolean = false;
  constructor(private navController: NavController) { 
    
  }
  Singup(){
     if(this.user == "usuario" && this.pass == "admin"){
      //this.navController.navigateRoot(`app/tabs/tab1`);
      this.navController.navigateRoot(`app/tabs/tab5`);
     }    
     else{
       this.Mensaje = true;
     }
  }
  ngOnInit() {
  }

}
