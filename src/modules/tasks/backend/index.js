export default function() {
    return {
        properties: {},
        events: {
            onLogBackend: requestData => {
                console.log("--- Log ", requestData);
            }
        }
    };
}
