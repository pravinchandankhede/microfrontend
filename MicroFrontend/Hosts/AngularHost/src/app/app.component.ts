import { Component } from '@angular/core';
import { CustomManifest, CustomRemoteConfig } from './models/config';
import { Router } from '@angular/router';
import { getManifest } from '@angular-architects/module-federation';
import { buildRoutes } from './models/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularHost';
}
