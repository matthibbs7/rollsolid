import { atom } from 'recoil';
import { WindowsState } from './windowsAtom';

export interface WorkspaceState {
    workspaces: Array<{id: string, name: string, workspace_stack: WindowsState}>;
    active: {id: string, name: string, workspace_stack: WindowsState};
}

// stack of stacks for workspaces feature
const defaultWorkspaceState: WorkspaceState = {
    workspaces: [{id: '1', name: 'Poker Workspace', workspace_stack: {stack: [{
        processId: -1,
        type: 'pie',
        x: 20,
        y: 250,
        z: 0,
        width: 460,
        height: 400,
        isMinimizied: false,
        settingsOpen: false,
        handleColor: '121212',
        pieData: [{id: '1', amount: 300, hand: 'Matt'}, {id: '2', amount: 120, hand: 'Nate'}, {id: '3', amount: 400, hand: 'Patrick'}]
    },
    {
        widgetName: 'Demo Widget', // default type title -> can be overridden in settings
        processId: -3,
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
    }, 
    {
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
            processId: -1,
            type: 'pie',
            x: 20,
            y: 250,
            z: 0,
            width: 460,
            height: 400,
            isMinimizied: false,
            settingsOpen: false,
            handleColor: '121212',
            pieData: [{id: '1', amount: 300, hand: 'Matt'}, {id: '2', amount: 120, hand: 'Nate'}, {id: '3', amount: 400, hand: 'Patrick'}]
        },
        {
            widgetName: 'Preflop Analysis',
            processId: -4,
            type: 'pre flop analysis',
            x: 800,
            y: 80,
            z: 4,
            width: 400,
            height: 500,
            isMinimizied: false,
            settingsOpen: false,
            handleColor: '121212',
        },
        {
            widgetName: 'Hand Reference',
            processId: -6,
            type: 'reference',
            x: 560,
            y: 40,
            z: 6,
            width: 100,
            height: 400,
            isMinimizied: false,
            settingsOpen: false,
            handleColor: '121212',
        },
        {
            widgetName: 'Bettings Odds',
            processId: -5,
            type: 'pot odds',
            x: 580,
            y: 400,
            z: 5,
            width: 300,
            height: 300,
            isMinimizied: false,
            settingsOpen: false,
            handleColor: '121212',
        },
        {
            widgetName: 'Timeseries Example',
            processId: -2,
            type: 'timeseries',
            x: 400,
            y: 180,
            z: 1,
            width: 420,
            height: 390,
            isMinimizied: false,
            settingsOpen: false,
            handleColor: '121212',
            chartData: [{id: '1', amount: 250, hand: 1}, {id: '2', amount: 269, hand: 2}, {id: '3', amount: 100, hand: 3}, {id: '4', amount: 165, hand: 4}, {id: '5', amount: 180, hand: 5}, {id: '6', amount: 80, hand: 6}, {id: '7', amount: 100, hand: 7}, {id: '8', amount: 160, hand: 8}]
        },
        {
            widgetName: 'minimized widget', // default type title -> can be overridden in settings
            processId: -7,
            type: 'notes',
            x: 200,
            y: 220,
            z: 7,
            width: 460, // px val
            height: 360,
            isMinimizied: true,
            settingsOpen: false,
            handleColor: '121212', //TODO # default #121212 -> overridden
            textContent: '<p>Nice! You`ve found a widget that was <b>minimized</b>.</p><p></p><p>You can <b><i>minimize</i></b> widgets by clicking the button with two arrows on the top right of a widget.</p><p></p><p>To <b><i>close</i></b> a widget, click the button with a cross in the top right of a widget or click the cross in the minimized widget view.</p>',
        },
        {
            widgetName: 'Demo Widget', // default type title -> can be overridden in settings
            processId: -3,
            type: 'notes',
            x: 80,
            y: 80,
            z: 2,
            width: 460, // px val
            height: 360,
            isMinimizied: false,
            settingsOpen: false,
            handleColor: '121212', //TODO # default #121212 -> overridden
            textContent: '<h1>Welcome to Rollsolid</h1><p></p><p>This is a <b>notes</b> widget.</p><p>You can load additional widgets to your <i>dashboard</i>.</p><p></p><code>p.s. you can edit this text!</code><p></p>',
        }, 
        ]},
    }
};

export const workspaceState = atom<WorkspaceState>({
    key: 'workspaceState',
    default: defaultWorkspaceState
});
