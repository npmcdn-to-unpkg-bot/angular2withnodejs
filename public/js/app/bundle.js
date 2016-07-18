var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("post.service", ['angular2/http', 'rxjs/add/operator/map', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1, core_1;
    var PostService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PostService = (function () {
                function PostService(_http) {
                    this._http = _http;
                    this._url = "http://localhost:3000/message";
                }
                PostService.prototype.getData = function () {
                    return this._http.get(this._url)
                        .map(function (res) { return res.text(); });
                };
                PostService.prototype.sendData = function (post) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this._http.post(this._url, JSON.stringify(post), { headers: headers })
                        .map(function (res) { return res.text(); });
                };
                PostService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PostService);
                return PostService;
            }());
            exports_1("PostService", PostService);
        }
    }
});
System.register("app.component", ['angular2/core', "post.service", 'angular2/http'], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_2, post_service_1, http_2;
    var AppComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_postService) {
                    var _this = this;
                    this._postService = _postService;
                    this.message = { "id": 'kj', "name": 'io' };
                    this._postService.getData()
                        .subscribe(function (result) {
                        _this.name = result;
                        console.log(result);
                    });
                    this._postService.sendData(this.message)
                        .subscribe(function (result) {
                        // console.log(result);
                    });
                }
                AppComponent = __decorate([
                    core_2.Component({
                        selector: 'my-app',
                        template: "  \n        <h1>Hello {{name}}</h1>\n        \n    ",
                        providers: [post_service_1.PostService, http_2.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_2("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3Quc2VydmljZS50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUVJLHFCQUFvQixLQUFVO29CQUFWLFVBQUssR0FBTCxLQUFLLENBQUs7b0JBRHRCLFNBQUksR0FBQywrQkFBK0IsQ0FBQztnQkFHN0MsQ0FBQztnQkFFRCw2QkFBTyxHQUFQO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3lCQUMzQixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUUsT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBRzlCLENBQUM7Z0JBRUQsOEJBQVEsR0FBUixVQUFTLElBQUk7b0JBRVYsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDMUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztvQkFFcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzt5QkFDdEUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFFLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUc5QixDQUFDO2dCQXZCTDtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkE0QmIsa0JBQUM7WUFBRCxDQTNCQSxBQTJCQyxJQUFBO1lBM0JELHFDQTJCQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNwQkQ7Z0JBTUksc0JBQW9CLFlBQXdCO29CQU5oRCxpQkE4QkM7b0JBeEJ1QixpQkFBWSxHQUFaLFlBQVksQ0FBWTtvQkFIcEMsWUFBTyxHQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7b0JBSXZDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO3lCQUN0QixTQUFTLENBQUMsVUFBQSxNQUFNO3dCQUNiLEtBQUksQ0FBQyxJQUFJLEdBQUMsTUFBTSxDQUFDO3dCQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO29CQUNuQixDQUFDLENBQUMsQ0FBQztvQkFLRixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO3lCQUNwQyxTQUFTLENBQUMsVUFBQSxNQUFNO3dCQUdsQix1QkFBdUI7b0JBRTFCLENBQUMsQ0FBQyxDQUFDO2dCQU1YLENBQUM7Z0JBcENMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSxxREFHVDt3QkFDRCxTQUFTLEVBQUMsQ0FBQywwQkFBVyxFQUFDLHFCQUFjLENBQUM7cUJBQ3pDLENBQUM7O2dDQUFBO2dCQStCRixtQkFBQztZQUFELENBOUJBLEFBOEJDLElBQUE7WUE5QkQsdUNBOEJDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDdkNELG1CQUFTLENBQUMsNEJBQVksQ0FBQyxDQUFDIiwiZmlsZSI6Ii4uLy4uLy4uL1NlZWQgUHJvamVjdC9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHAsSGVhZGVyc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQb3N0U2VydmljZXtcclxuICAgIHByaXZhdGUgX3VybD1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tZXNzYWdlXCI7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOkh0dHApe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybClcclxuICAgICAgICAgICAgLm1hcChyZXM9PnJlcy50ZXh0KCkpO1xyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZW5kRGF0YShwb3N0KXtcclxuICAgIFxyXG4gICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmwsSlNPTi5zdHJpbmdpZnkocG9zdCkseyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5tYXAocmVzPT5yZXMudGV4dCgpKTtcclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgICBcclxuICAgIFxyXG59IiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQb3N0U2VydmljZX0gZnJvbSAnLi9wb3N0LnNlcnZpY2UnO1xuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvaHR0cCdcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGAgIFxuICAgICAgICA8aDE+SGVsbG8ge3tuYW1lfX08L2gxPlxuICAgICAgICBcbiAgICBgLFxuICAgIHByb3ZpZGVyczpbUG9zdFNlcnZpY2UsSFRUUF9QUk9WSURFUlNdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgXG4gICAgcHJpdmF0ZSBuYW1lOnN0cmluZztcbiAgICBwcml2YXRlIG1lc3NhZ2U9e1wiaWRcIjogJ2tqJywgXCJuYW1lXCI6ICdpbyd9O1xuICAgIFxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcG9zdFNlcnZpY2U6UG9zdFNlcnZpY2Upe1xuICAgICAgICB0aGlzLl9wb3N0U2VydmljZS5nZXREYXRhKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0PT57XG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lPXJlc3VsdDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG5cblxuXG4gICAgICAgICAgICAgdGhpcy5fcG9zdFNlcnZpY2Uuc2VuZERhdGEodGhpcy5tZXNzYWdlKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0PT57XG4gICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgXG5cblxuICAgIH1cblxufSIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
