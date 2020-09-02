import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  private linkTheme = document.querySelector('#theme');

  constructor( private settingsService: SettingsService  ) {}

  ngOnInit() {
    this.settingsService.checkCurrentTheme();
  }

  changeTheme( theme: string ) {
    //Sin usar servicio
    // const url = `./assets/css/colors/${ theme }.css`;
    // this.linkTheme.setAttribute('href', url);
    // localStorage.setItem('theme', url );

    //Usando servicio
    this.settingsService.changeTheme( theme );
    
  }

}
