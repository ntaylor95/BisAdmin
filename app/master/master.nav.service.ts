import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

export class Nav {
    constructor(public id: number, public name: string, public router: string, public children: Array<Nav>) { }
}

@Injectable()
export class NavService {
    constructor(private _http: Http) { }

    getVehicles() {
        return this._http.get('api/MainNav.json')
            .map((response: Response) => <Nav[]>response.json().data)
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    getSecondary(id: number) {
        return this.getVehicles()
            .map(navs => navs.find(nav => nav.id == id).children)
            .do(navs => console.log(navs));
    }

    getTertiary(id: number) {
        return this.getSecondary(id)
            .map(navs => navs.find(nav => nav.id == id).children)
            .do(navs => console.log(navs));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
