import { getManifest } from '@angular-architects/module-federation';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomRemoteConfig, CustomManifest } from '../models/config';
import { buildRoutes } from '../models/routes';
import { loadManifest } from '@angular-architects/module-federation';
import { ManifestService } from '../services/manifest.service';

@Component({
    selector: 'shell',
    templateUrl: './shell.component.html'
})
export class ShellComponent {
    remotes: CustomRemoteConfig[] = [];

    constructor(private readonly manifestService: ManifestService) {

    }

    async ngOnInit(): Promise<void> {
       this.remotes = await this.manifestService.configureRoutes();
    }
}
