import { ipcRenderer } from "electron";

export default {
    requestMainProcess(promisifiedCallback) {
        return new Promise(resolve => {
            ipcRenderer.send("requestMainProcess", promisifiedCallback);
            ipcRenderer.once("responseMainProcess", (evt, responseData) => {
                resolve(responseData);
            });
        });
    }
};
