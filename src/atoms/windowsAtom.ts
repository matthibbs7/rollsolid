import { WindowState } from '@/types/windows';
import { atom } from 'recoil';

// TypeScript interface
export interface WindowsState {
    stack: Array<WindowState>;
}

// Auth Modal, default state
// stack of stacks for workspaces feature
const defaultWindowsState: WindowsState = {
    stack: [{
        widgetName: 'Demo Widget', // default type title -> can be overridden in settings
        processId: -1,
        type: 'notes',
        x: 80,
        y: 80,
        z: 1,
        width: 460, // px val
        height: 360,
        isMinimizied: false,
        settingsOpen: false,
        handleColor: '#121212', //TODO # default #121212 -> overridden
        textContent: '<h1>Welcome to Rollsolid</h1><p>This is a <b>notes</b> widget.</p><p></p><p>You can load additional widgets to your <i>dashboard</i>.</p><p></p><code>p.s. you can edit this text!</code><p></p>',
    }],
};

export const windowsState = atom<WindowsState>({
    key: 'windowsState',
    default: defaultWindowsState
});
