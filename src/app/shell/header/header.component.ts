import { Title } from '@angular/platform-browser';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

import { AuthenticationService, CredentialsService } from '@app/auth';
import {
  faCoffee,
  faSign,
  faSignInAlt,
  faSignOutAlt,
  faRegistered,
  faUserPlus,
  faDonate,
  faNewspaper,
  faProjectDiagram,
  faChartPie,
  faUsers,
  faInfo,
  faInfoCircle,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() sidenav!: MatSidenav;
  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
  faUserPlus = faUserPlus;
  faDonate = faDonate;
  faNewspaper = faNewspaper;
  faProjectDiagram = faProjectDiagram;
  faChartPie = faChartPie;
  faUsers = faUsers;
  faInfoCircle = faInfoCircle;
  faUser = faUser;

  constructor(
    private router: Router,
    private titleService: Title,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService
  ) {}

  ngOnInit() {}

  logout() {
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/'], { replaceUrl: true }));
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }

  get token() {
    return this.credentialsService.credentials && this.credentialsService.credentials.token;
  }

  get title(): string {
    return this.titleService.getTitle();
  }
}
