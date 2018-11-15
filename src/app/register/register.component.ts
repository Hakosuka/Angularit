import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormCont, FormControl, FormControl, FormControlrol, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl('example@domain.com'),
    name: new FormControl(''),
    username: new FormControl(''),
    pWord: new FormControl('********'),
  });

  constructor() { }

  ngOnInit() {
  }

}
