import { atom } from 'recoil';
import { WindowsState } from './windowsAtom';

export interface WorkspaceState {
    workspaces: Array<{id: string, name: string, workspace_stack: WindowsState}>;
    active: {id: string, name: string, workspace_stack: WindowsState};
}

// stack of stacks for workspaces feature
const defaultWorkspaceState: WorkspaceState = {
    workspaces: [{id: '1', name: 'Poker Workspace', workspace_stack: {stack: [{
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
        handleColor: '121212', //TODO # default #121212 -> overridden
        textContent: '<h1>Welcome to Rollsolid</h1><p></p><p>This is a <b>notes</b> widget.</p><p>You can load additional widgets to your <i>dashboard</i>.</p><p></p><code>p.s. you can edit this text!</code><p></p>',
    }, {
        widgetName: 'Timeseries Example',
        processId: -2,
        type: 'timeseries',
        x: 1100,
        y: 50,
        z: 2,
        width: 420,
        height: 420,
        isMinimizied: false,
        settingsOpen: false,
        handleColor: '121212',
        chartData: [{id: '1', amount: 250, hand: 1}, {id: '2', amount: 269, hand: 2}, {id: '3', amount: 100, hand: 3}, {id: '4', amount: 165, hand: 4}, {id: '5', amount: 180, hand: 5}, {id: '6', amount: 80, hand: 6}]
    }]}}, {id: '2', name: 'Workspace 2', workspace_stack: {stack: []}}
    , {id: '3', name: 'Workspace 3', workspace_stack: {stack: []}}
    ],
    active: {
        id: '1',
        name: 'Poker Workspace',
        workspace_stack: {stack: [{
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
            handleColor: '121212', //TODO # default #121212 -> overridden
            textContent: '<h1>Welcome to Rollsolid</h1><p></p><p>This is a <b>notes</b> widget.</p><p>You can load additional widgets to your <i>dashboard</i>.</p><p></p><code>p.s. you can edit this text!</code><p></p>',
        }, {
            widgetName: 'Timeseries Example',
            processId: -2,
            type: 'timeseries',
            x: 1100,
            y: 50,
            z: 2,
            width: 420,
            height: 420,
            isMinimizied: false,
            settingsOpen: false,
            handleColor: '121212',
            chartData: [{id: '1', amount: 250, hand: 1}, {id: '2', amount: 269, hand: 2}, {id: '3', amount: 100, hand: 3}, {id: '4', amount: 165, hand: 4}, {id: '5', amount: 180, hand: 5}, {id: '6', amount: 80, hand: 6}]
        }]},
    }
};

export const workspaceState = atom<WorkspaceState>({
    key: 'workspaceState',
    default: defaultWorkspaceState
});
