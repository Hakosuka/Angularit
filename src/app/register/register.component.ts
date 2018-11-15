import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../account';
import { FormBuilder, FormGroup, FormCont, FormControl, FormControl, FormControlrol, Validators } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Input() newUser: Account;
  //Adding a form for the user to fill out
  profileForm = new FormGroup({
    emailAddr: new FormControl('example@domain.com'),
    name: new FormControl(''),
    username: new FormControl(''),
    pWord: new FormControl('********'),
  });

  constructor(private acService: AccountService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
