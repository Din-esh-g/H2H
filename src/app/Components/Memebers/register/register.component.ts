import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { AlertifyService } from 'src/app/_Services/alertify.service';
import { AuthenticationService } from 'src/app/_Services/authentication.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { User } from 'src/app/_Models/user';
import { Router } from '@angular/router';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 @Output() cancelRegister = new EventEmitter();
//model :any = {};
user: User;
registerForm: FormGroup;
bsConfig: Partial <BsDatepickerConfig>;
  constructor(private authService: AuthenticationService, 
    private alertyfy: AlertifyService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
//this is for date
this.bsConfig ={
  containerClass:'theme-red'
},

    this.createRegisterForm();
//This provide same functionality as above function (from builder)
// this.registerForm= new FormGroup({
//   username:new FormControl('',Validators.required),
//   password: new FormControl('',[Validators.required,Validators.minLength(4), Validators.maxLength(10)]),
//   confirmPassword: new FormControl('', Validators.required)
// }, this.passwordMatchValidator);
  }
passwordMatchValidator(g:FormGroup){
    return g.get('password').value === g.get('confirmPassword').value ? null: {'mismatch': true};  
  }

register()
{

 if(this.registerForm.valid){
this.user = Object.assign({}, this.registerForm.value);
this.authService.register(this.user).subscribe (() =>{
  this.alertyfy.error('Registration sucess. ');
}, error => {
this.alertyfy.error('Problem to register...');

  },() => {
    this.authService.login(this.user).subscribe(() => {
      this.router.navigate(['/friends']);
    });
});
 }


//This is the old register method
  // this.authService.register(this.model).subscribe(() => {
  //   this.alertyfy.sucess('Register Sucessful');
  // }, error => {
  //   this.alertyfy.error('Registration Failed.');
  // });

  
}
cancel(){
  this.cancelRegister.emit(false);
}
  
//This is used of from Builder is the 
createRegisterForm(){
  this.registerForm = this.formBuilder.group({
    gender:['male'],
    knownAs: ['', Validators.required],
    dateOfBirth: [null, Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(4),Validators.maxLength(10)]],
    confirmPassword: ['', Validators.required]

  }, {validator: this.passwordMatchValidator});
}

}
