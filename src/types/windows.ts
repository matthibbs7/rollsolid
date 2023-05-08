
export type WindowType = 'notes' | 'chart' | 'timer' | 'test';

export interface WindowState {
    widgetName?: string;
    processId: number;
    type: WindowType;
    x: number;
    y: number;
    z: number;
    width: number | string; // px val
    height: number | string;
    isMinimizied: boolean;
    settingsOpen?: boolean;
    handleColor?: string;
}