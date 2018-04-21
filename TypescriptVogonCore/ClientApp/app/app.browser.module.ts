import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModuleShared } from './app.shared.module';
import { AppComponent } from './components/app/app.component';
import { RouterModule } from '@angular/router';
import { ResponsesComponent } from "./components/responses/responses.component";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        ResponsesComponent
    ],
    imports: [
        BrowserModule,
        AppModuleShared,
        RouterModule.forRoot([
            { path: 'responses', component: ResponsesComponent }
        ])
    ],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl }
    ]
})
export class AppModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
