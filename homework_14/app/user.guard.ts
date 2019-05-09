import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserGuard implements CanActivate {

    constructor(private dataService: DataService, private _router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        if (this.dataService.getCachedDataById(route.params.uuid))
            return true

        this._router.navigate(['/']);

        return false
    }

}