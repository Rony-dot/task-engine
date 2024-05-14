import { TaskService } from "./TaskService";

const IS_MOCK = true;

const callApiService = (requestConfig) => {
    return IS_MOCK ? TaskService(requestConfig) : fetch(requestConfig);

}

export const getTasks = (requestParams) => {
    return callApiService({
        method: "GET",
        url: "/getTasks",
        params: requestParams
    });
}

export const addTask = (requestParams) => {
    return callApiService({
        method: "POST",
        url: "/addTask",
        params: requestParams
    });
}