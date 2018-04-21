import { Component } from '@angular/core';
import DemoManager from "../../managers/DemoManager";
import Sentiments from "../../contracts/SentimentEnum";

@Component({
    selector: 'responses',
    templateUrl: './responses.component.html'
})

export class ResponsesComponent {
    constructor() {
    }

    public Respond = (sentiment: Sentiments) => {

        let mgr = new DemoManager();

        mgr.Respond(sentiment);
    }
}