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
                    this.message = { "id": "121", "name": "shuklaJi" };
                    this._postService.getData()
                        .subscribe(function (result) {
                        _this.name = result;
                        console.log(result);
                    });
                    this._postService.sendData(this.message)
                        .subscribe(function (result) {
                        console.log(result);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3Quc2VydmljZS50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUVJLHFCQUFvQixLQUFVO29CQUFWLFVBQUssR0FBTCxLQUFLLENBQUs7b0JBRHRCLFNBQUksR0FBQywrQkFBK0IsQ0FBQztnQkFHN0MsQ0FBQztnQkFFRCw2QkFBTyxHQUFQO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3lCQUMzQixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUUsT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBRzlCLENBQUM7Z0JBRUQsOEJBQVEsR0FBUixVQUFTLElBQUk7b0JBRVYsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDMUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztvQkFFcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzt5QkFDdEUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFFLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUc5QixDQUFDO2dCQXZCTDtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkE0QmIsa0JBQUM7WUFBRCxDQTNCQSxBQTJCQyxJQUFBO1lBM0JELHFDQTJCQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNwQkQ7Z0JBTUksc0JBQW9CLFlBQXdCO29CQU5oRCxpQkE4QkM7b0JBeEJ1QixpQkFBWSxHQUFaLFlBQVksQ0FBWTtvQkFIcEMsWUFBTyxHQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDLENBQUM7b0JBSTlDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO3lCQUN0QixTQUFTLENBQUMsVUFBQSxNQUFNO3dCQUNiLEtBQUksQ0FBQyxJQUFJLEdBQUMsTUFBTSxDQUFDO3dCQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO29CQUNuQixDQUFDLENBQUMsQ0FBQztvQkFLRixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO3lCQUNwQyxTQUFTLENBQUMsVUFBQSxNQUFNO3dCQUdsQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUV2QixDQUFDLENBQUMsQ0FBQztnQkFNWCxDQUFDO2dCQXBDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUscURBR1Q7d0JBQ0QsU0FBUyxFQUFDLENBQUMsMEJBQVcsRUFBQyxxQkFBYyxDQUFDO3FCQUN6QyxDQUFDOztnQ0FBQTtnQkErQkYsbUJBQUM7WUFBRCxDQTlCQSxBQThCQyxJQUFBO1lBOUJELHVDQThCQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztZQ3ZDRCxtQkFBUyxDQUFDLDRCQUFZLENBQUMsQ0FBQyIsImZpbGUiOiIuLi8uLi8uLi9TZWVkIFByb2plY3QvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLEhlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUG9zdFNlcnZpY2V7XHJcbiAgICBwcml2YXRlIF91cmw9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvbWVzc2FnZVwiO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDpIdHRwKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0YSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmwpXHJcbiAgICAgICAgICAgIC5tYXAocmVzPT5yZXMudGV4dCgpKTtcclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2VuZERhdGEocG9zdCl7XHJcbiAgICBcclxuICAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsLEpTT04uc3RyaW5naWZ5KHBvc3QpLHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAubWFwKHJlcz0+cmVzLnRleHQoKSk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAgXHJcbiAgICBcclxufSIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UG9zdFNlcnZpY2V9IGZyb20gJy4vcG9zdC5zZXJ2aWNlJztcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgICBcbiAgICAgICAgPGgxPkhlbGxvIHt7bmFtZX19PC9oMT5cbiAgICAgICAgXG4gICAgYCxcbiAgICBwcm92aWRlcnM6W1Bvc3RTZXJ2aWNlLEhUVFBfUFJPVklERVJTXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIFxuICAgIHByaXZhdGUgbmFtZTpzdHJpbmc7XG4gICAgcHJpdmF0ZSBtZXNzYWdlPXtcImlkXCI6IFwiMTIxXCIsIFwibmFtZVwiOiBcInNodWtsYUppXCJ9O1xuICAgIFxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcG9zdFNlcnZpY2U6UG9zdFNlcnZpY2Upe1xuICAgICAgICB0aGlzLl9wb3N0U2VydmljZS5nZXREYXRhKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0PT57XG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lPXJlc3VsdDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG5cblxuXG4gICAgICAgICAgICAgdGhpcy5fcG9zdFNlcnZpY2Uuc2VuZERhdGEodGhpcy5tZXNzYWdlKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0PT57XG4gICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgXG5cblxuICAgIH1cblxufSIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
