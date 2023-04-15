import { WindowState } from "@/types/windows";
import { atom } from "recoil";

// TypeScript interface
export interface MinimizedWindowsState {
    stack: Array<WindowState>;
}

// Auth Modal, default state
const defaultMinimizedWindowsState: MinimizedWindowsState = {
    stack: [],
}

export const minimizedWindowsState = atom<MinimizedWindowsState>({
    key: 'minimizedWindowsState',
    default: defaultMinimizedWindowsState
})
