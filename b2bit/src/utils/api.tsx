import axios, {HeadersDefaults} from "axios";

interface CommonHeaderProperties extends HeadersDefaults {
    Authorization: string;
    ContentType: string;
}

export default axios.create({
    baseURL: "https://frontendproject.b2bit.company",
});
