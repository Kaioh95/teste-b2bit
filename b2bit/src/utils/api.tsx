import axios, {HeadersDefaults} from "axios";
import { ErrorInterceptor } from "./errorInterceptor";
import { responseInterceptor } from "./responseInterceptor";

const api = axios.create({
    baseURL: "https://frontendproject.b2bit.company",
});

api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => ErrorInterceptor(error),
);

export { api };
