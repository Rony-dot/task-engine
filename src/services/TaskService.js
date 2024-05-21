import { dummyTasks } from "../utils/mockData";

export const TaskService = (requestConfig) => {
    switch (requestConfig.url) {
        case "/getTasks":
            return new Promise((resolve, rejecct) => {
                // resolve({ data: dummyTasks })
                setTimeout(() => {
                    resolve({ data: dummyTasks })
                }, 3 * 1000);
            });
            break;

        case "/addTask":
            return new Promise((resolve, rejecct) => {
                // resolve({ data: dummyTasks })
                setTimeout(() => {
                    resolve({ data: dummyTasks })
                }, 3 * 1000);
            });
            break;

        case "/deleteTask":
            return new Promise((resolve, rejecct) => {
                // resolve({ data: dummyTasks })
                setTimeout(() => {
                    resolve({ data: dummyTasks })
                }, 2 * 1000);
            });
            break;

        default:
            break;
    }
};
