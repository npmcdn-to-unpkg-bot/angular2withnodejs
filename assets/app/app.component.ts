import {Component} from 'angular2/core';
import {PostService} from './post.service';
import {HTTP_PROVIDERS} from 'angular2/http'


@Component({
    selector: 'my-app',
    template: `  
        <h1>Hello {{name}}</h1>
        
    `,
    providers:[PostService,HTTP_PROVIDERS]
})
export class AppComponent {
    
    private name:string;
    private message={"id": 'kj', "name": 'io'};
    

    constructor(private _postService:PostService){
        this._postService.getData()
            .subscribe(result=>{
                this.name=result;
            console.log(result)
            });
            



             this._postService.sendData(this.message)
                .subscribe(result=>{
        
            
               // console.log(result);
                
            });


            


    }

}