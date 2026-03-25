"use client";

import { DebugPanel } from "./original";

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