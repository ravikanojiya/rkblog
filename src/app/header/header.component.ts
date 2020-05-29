import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private titleService:Title,private service:AuthService) { }

  ngOnInit() {
  }
  get isLoggedIn() { return this.service.isLoggedIn() }

  setPageTitle(title: string) {
    this.titleService.setTitle(title);
  }
}
