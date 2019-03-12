import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '91';
  constructor(public router: Router,
              private authService: AuthService) { }

  navLinksConnect = [
    {
      label: 'Contact info',
      link: './connect/info',
      index: 0
    },
    {
      label: 'Empty jobs',
      link: './connect/jobs',
      index: 1
    },
    {
      label: 'Staff',
      link: './connect/staff',
      index: 2
    },
    {
      label: 'Send note about the website',
      link: './connect/note',
      index: 3
    }
  ];
  navLinksProducts = [
    {
      label: 'Kitchen',
      link: './products/kitchen',
      index: 3
    },
    {
      label: 'Living room',
      link: './products/livingroom',
      index: 3
    },
    {
      label: 'Bedroom',
      link: './products/bedroom',
      index: 3
    },
    {
      label: 'Bathroom',
      link: './products/bathroom',
      index: 3
    },
    {
      label: 'Techs',
      link: './products/techs',
      index: 3
    }
  ];

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

}
