export type WindowType = 'notes' | 'chart' | 'timer' | 'test';

export interface WindowState {
    id: number;
    type: WindowType;
    x: string;
    y: string;
}