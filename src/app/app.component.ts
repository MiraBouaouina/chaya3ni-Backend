import { Component, OnInit, ChangeDetectorRef, Output } from '@angular/core';
import { UserService } from './pages/user.service';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from "@angular/router";
import { Pages } from './interfaces/pages';
import { Location } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public appPages: Array<Pages>;

  constructor(
    private platform: Platform,
    private location: Location,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    private user: UserService, private router: Router,private http: HttpClient,private ref: ChangeDetectorRef
  ) {
     interval(100).subscribe(x =>
      this.ngOnInit());
    this.appPages = [
      {
        title: 'Home',
        url: '/home-results',
        direct: 'root',
        icon: 'home'
      },
      {
        title: 'Nous Contacter',
        url: '/about',
        direct: 'forward',
        icon: 'mail'
      },

      {
        title: 'Liste Favoris',
        url: '/settings',
        direct: 'forward',
        icon: 'heart'
      },
      {
        title: 'Partenaires',
        url: '/partenaires',
        direct: 'forward',
        icon: 'people'
      },
      {
        title: 'Consulter traçabilité',
        url: '/tracabilite',
        direct: 'forward',
        icon: 'pin'}
      
    ];

    this.initializeApp();
  }
  @Output()
  userDetails: any;
  ttt:any;
    ngOnInit() {
      let httpOptions = {
        headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
      };
      this.http.get(`${this.user.uri}/userProfile`,httpOptions).subscribe(
        data => {
          this.userDetails = data;
        },
        err => { 
          console.log(err);
          
        }
      );
    }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }).catch(() => {});
  }

  goToEditProgile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    this.user.deleteToken();
    this.router.navigate(['/']);
  }
}
