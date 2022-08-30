import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  private returnUrl! : string;

  signupForm = this.fb.group({
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
    if(this.signupForm.value.username && this.signupForm.value.password)
    {
      if(this.authService.login(this.signupForm.value.username, this.signupForm.value.password))
      {
        //signup sucessful : return to previous page or home
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.router.navigate([this.returnUrl]);        
      }
      
    }
  }

}
