"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var home_component_1 = require('./home/home.component');
var router_1 = require("@angular/router");
var slider_1 = require("@angular2-material/slider");
var core_2 = require("@angular2-material/core");
var button_1 = require("@angular2-material/button");
var card_1 = require("@angular2-material/card");
var radio_1 = require("@angular2-material/radio");
var checkbox_1 = require("@angular2-material/checkbox");
var tooltip_1 = require("@angular2-material/tooltip");
var icon_1 = require("@angular2-material/icon");
require('hammerjs');
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', loadChildren: function () { return new Promise(function (resolve) {
            require.ensure([], function (require) {
                resolve(require('./about/about.module').AboutModule);
            });
        }); }
    }
];
var AppModule = (function () {
    function AppModule(mdIconRegister) {
        mdIconRegister.registerFontClassAlias('hotshots', 'ht');
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                core_2.MdCoreModule,
                card_1.MdCardModule,
                button_1.MdButtonModule,
                radio_1.MdRadioModule,
                checkbox_1.MdCheckboxModule,
                tooltip_1.MdTooltipModule,
                slider_1.MdSliderModule,
                icon_1.MdIconModule,
                router_1.RouterModule.forRoot(appRoutes)
            ],
            providers: [core_2.OVERLAY_PROVIDERS, core_2.MdUniqueSelectionDispatcher, icon_1.MdIconRegistry],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
