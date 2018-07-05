import { ipcRenderer } from "electron";

export default (extensionEventName, requestData) =>
    new Promise(resolve => {
        ipcRenderer.send("onCallExensionerEvent", extensionEventName, requestData);
        ipcRenderer.once("onExensionerEventResponse", (evt, responseData) => {
            resolve(responseData);
        });
    });
