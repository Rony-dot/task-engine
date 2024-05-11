import { ApiService } from "./TaskService";

const IS_MOCK = true;

const callApiService = (requestConfig) => {
    return IS_MOCK ? ApiService(requestConfig) : fetch(requestConfig);

}

export const getTasks = (requestParams) => {
    return callApiService({
        method: "GET",
        url: "/getTasks",
        params: requestParams
    });
}