import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional, PLATFORM_ID }  from '@angular/core';

import {tap} from 'rxjs/operators';
 
@Injectable()
export class AppInitService {
    data: any;

    constructor(
        public httpClient: HttpClient,
        @Inject(PLATFORM_ID) private platformId: {},
        @Inject('APP_BASE_URL') @Optional() private readonly baseUrl: string
    ) {
        if (isPlatformBrowser(platformId)) {
            this.baseUrl = document.location.origin;
        }
    }
    
    Init() {
        console.log('baseUrl', this.baseUrl);
        const t = this.baseUrl;
        return this.httpClient.get('http://localhost:4000/assets/config/app.json')
            .pipe(
                tap((resp) => {
                    console.log('result', resp);
                    this.data = resp;
                })
            ).toPromise();
    }
}