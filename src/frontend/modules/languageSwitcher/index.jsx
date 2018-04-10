import RootComponent from "./RootComponent";
import React from "react";

export default function() {
    return {
        properties: {
        },
        events: {
            onRenderRootComponent: () => <RootComponent/>
        }
    };
}

