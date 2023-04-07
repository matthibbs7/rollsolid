import { atom } from "recoil";

export interface Window {
    id: number
    title: string;
    size: {w: string, h: string};
    position?: {x: number, y: number};
}

// TypeScript interface
export interface ActiveWindowsState {
    process: Map<number, Window>;
    currentId: number;
}

// Auth Modal, default state
const defaultActiveWindowsState: ActiveWindowsState = {
    process: new Map<number, Window>(),
    currentId: 0,
}

export const activeWindowsState = atom<ActiveWindowsState>({
    key: 'activeWindowState',
    default: defaultActiveWindowsState
})
