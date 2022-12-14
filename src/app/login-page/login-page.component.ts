import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  private returnUrl! : string;

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router : Router,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    if(this.loginForm.value.username && this.loginForm.value.password)
    {
      if(this.authService.login(this.loginForm.value.username, this.loginForm.value.password))
      {
        //login sucessful : return to previous page or home
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.router.navigate([this.returnUrl]);        
      }
      
    }
  }

}
