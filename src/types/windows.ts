
export type WindowType = 'notes' | 'chart' | 'timer' | 'test';

export interface WindowState {
    widgetName?: string; // default type title -> can be overridden in settings
    processId: number;
    type: WindowType;
    x: number;
    y: number;
    z: number;
    width: number | string; // px val
    height: number | string;
    isMinimizied: boolean;
    settingsOpen: boolean;
    handleColor: string; //TODO # default #121212 -> overridden
    lockPosition?: boolean; //TODO 
}