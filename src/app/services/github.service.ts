import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class GithubService{
    private username = 'gayati';
    private client_id = 'Iv1.9297e936b1d3aa98';
    private client_secret='bdcc122e8d9966eef1c9efba2f76c5e5d38c81d1';
    
    constructor(private _http:HttpClient){
        console.log('Github Service Init...');
    }
    
    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .pipe(map(res => res));
    }
    
    getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .pipe(map(res => res));
    }
    
    updateUsername(username:string){
        this.username = username;
    }
}