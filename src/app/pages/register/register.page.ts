import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { UserService } from '../user.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
  export class RegisterPage implements OnInit {
  ngOnInit(): void {
  }
  public onRegisterForm: FormGroup;
    constructor(private fb: FormBuilder, private us: UserService ,public navCtrl: NavController,
      public menuCtrl: MenuController,public toastController: ToastController,
      public loadingCtrl: LoadingController,) {
      this.createForm();
    }
    async presentToast() {
      const toast = await this.toastController.create({
        message: 'Inscription reussi',
        duration: 2000
      });
      toast.present();
    }
    async erreurToast() {
      const toast = await this.toastController.create({
        message: 'email deja existe',
        duration: 2000
      });
      toast.present();
    }
    createForm() {
      this.onRegisterForm= this.fb.group({
        fullName: ['', Validators.required ],
       /* email: ['', Validators.required],*/
       email: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)(\.[A-Za-z]{2,})$'), Validators.required])],
        password: ['', Validators.required ],
        birthdate: [null, Validators.compose([
          Validators.required
        ])],
        phone: [null, Validators.compose([
          Validators.required,Validators.minLength(8),Validators.maxLength(12)
        ])]
      });
    }
    inscrit(form: FormGroup) {
      this.us.postUser(form.value).subscribe(
        res => {
          this.presentToast();
          this.goToLogin();
        },
        err => {
        this.erreurToast();
        }
      );
    }
    goToLogin() {
      this.navCtrl.navigateRoot('/');
    }
  }
