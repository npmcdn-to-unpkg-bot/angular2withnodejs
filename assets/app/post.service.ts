import {Http,Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';


@Injectable()
export class PostService{
    private _url="http://localhost:3000/message";
    constructor(private _http:Http){

    }

    getData(){
        return this._http.get(this._url)
            .map(res=>res.text());
        

    }

    sendData(post){
    
       var headers = new Headers();
         headers.append('Content-Type', 'application/json');

        return this._http.post(this._url,JSON.stringify(post),{ headers: headers })
            .map(res=>res.text());
        

    }


     
    
}