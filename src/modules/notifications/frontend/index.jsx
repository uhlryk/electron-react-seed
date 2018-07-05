import React from "react";
import RootComponent from "./RootComponent";

export default function() {
    return {
        properties: {
        },
        events: {
            onRenderRootComponent: () => <RootComponent/>
        }
    };
}
