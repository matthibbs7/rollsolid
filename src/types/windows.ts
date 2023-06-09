
export type WindowType = 'notes' | 'chart' | 'timer' | 'timeseries' | 'pie' | 'test' | 'reference' | 'hand' | 'implied odds' | 'pot odds' | 'hand ranking' | 'pre flop analysis';

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
    textContent?: string;
    chartData?: Array<{id: string, amount: number, hand: number}>;
    pieData?: Array<{id: string, amount: number, hand: string}>;
}