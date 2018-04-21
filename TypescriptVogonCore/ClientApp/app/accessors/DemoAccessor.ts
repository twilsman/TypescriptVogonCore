import * as $ from "jquery";
import DemoResponse from "../contracts/DemoResponse";

class DemoAccessor {

    constructor() { }

    GetResponses = async (): Promise<DemoResponse[]> => {

        let settings: JQueryAjaxSettings = {

            url: "/data/responses.json",

            dataFilter: (data: string, type: string): string => {

                let json: any = JSON.parse(data);

                let result: DemoResponse[] = json.map((i: any): DemoResponse => {
                    return {
                        Sentiment: i.sentiment,
                        Value: i.text
                    };
                });

                return JSON.stringify(result);
            },

            dataType: "json",

            success: () => { }
        }

        return $.ajax(settings);

    }
}

export default DemoAccessor;