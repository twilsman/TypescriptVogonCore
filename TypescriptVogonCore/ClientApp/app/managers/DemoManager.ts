import swal from "sweetalert";
import DemoResponse from "../contracts/DemoResponse";
import Sentiments from "../contracts/SentimentEnum";
import DemoAccessor from "../accessors/DemoAccessor";

class DemoManager {

    SentimentStatusLookup: { [sentiment: number]: string};

    constructor() {
        this.SentimentStatusLookup = {};

        this.SentimentStatusLookup[Sentiments.Nice] = "success";
        this.SentimentStatusLookup[Sentiments.Mean] = "error";
        this.SentimentStatusLookup[Sentiments.Sarcastic] = "warning";
        
    }

    Respond = async (sentiment: Sentiments) => {

        let acc: DemoAccessor = new DemoAccessor();

        let inspirations = await acc.GetResponses();

        let filtered: DemoResponse[] = inspirations.filter((r: DemoResponse): any => {

            if (r.Sentiment == sentiment) return r;
        });

        swal("", filtered[0].Value, this.SentimentStatusLookup[sentiment]);
    }

}

export default DemoManager
