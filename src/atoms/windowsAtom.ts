import { WindowState } from '@/types/windows';
import { atom } from 'recoil';

// TypeScript interface
export interface WindowsState {
    stack: Array<WindowState>;
}

// Auth Modal, default state
const defaultWindowsState: WindowsState = {
    stack: [],
};

export const windowsState = atom<WindowsState>({
    key: 'windowsState',
    default: defaultWindowsState
});
