"use client";

import { DebugPanel } from "./base";

export default function DebugPanelDemo() {
    return (
        <DebugPanel
            title="Live Interaction Debug"
            enableClickCount
            enableMouseTracking
            enableKeyTracking
        />
    );
}