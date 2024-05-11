import { dummyTasks } from "../utils/mockData";

export const ApiService = (requestConfig) => {
    switch (requestConfig.url) {
        case "/getTasks":
            return new Promise((resolve, rejecct) => {
                // resolve({ data: dummyTasks })
                setTimeout(() => {
                    resolve({ data: dummyTasks })
                }, 3 * 1000);
            });
            break;

        default:
            break;
    }
};
