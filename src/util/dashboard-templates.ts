import { WorkspaceState } from '@/atoms/workspaceAtom';

export const SandboxTemplate: WorkspaceState = {
    active: 
        {
            id: '1', 
            name: 'Poker Workspacet', 
            workspace_stack: {
                stack: [
                    {
                        handleColor: '121212',
                        height: '400px',
                        isMinimizied: false,
                        processId: 99,
                        settingsOpen: false,
                        type: 'notes',
                        width: '400px',
                        x: 814,
                        y: 268,
                        z: 0
                    },
                    {
                        handleColor: '121212',
                        height: '350px',
                        isMinimizied: false,
                        processId: 102,
                        settingsOpen: false,
                        type: 'pot odds',
                        width: '355px',
                        x: 254,
                        y: 72,
                        z: 0
                    },
                    {
                        handleColor: '121212',
                        height: '204px',
                        isMinimizied: false,
                        processId: 105,
                        settingsOpen: false,
                        textContent: '<p>Fuck this shit <strong>BOY</strong></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>',
                        type: 'notes',
                        width: '200px',
                        x: 30,
                        y: 63,
                        z: 0
                    }
                ]
            }
        }
    ,
    workspaces: [
        {
            name: 'Poker Workspacet',
            id: '1', 
            workspace_stack: {
                stack: [{
                    handleColor: '121212',
                    height: '400px',
                    isMinimizied: false,
                    processId: 99,
                    settingsOpen: false,
                    type: 'notes',
                    width: '400px',
                    x: 814,
                    y: 268,
                    z: 0
                },
                {
                    handleColor: '121212',
                    height: '350px',
                    isMinimizied: false,
                    processId: 102,
                    settingsOpen: false,
                    type: 'pot odds',
                    width: '355px',
                    x: 254,
                    y: 72,
                    z: 0
                },
                {
                    handleColor: '121212',
                    height: '204px',
                    isMinimizied: false,
                    processId: 105,
                    settingsOpen: false,
                    textContent: '<p>Fuck this shit <strong>BOY</strong></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>',
                    type: 'notes',
                    width: '200px',
                    x: 30,
                    y: 63,
                    z: 0
                }]
            }
        }
    ],
    previousProcessId: 100, 
};

export const StarterTemplate = {
    active: [
        {
            id: '1', 
            name: 'Poker Workspacet', 
            workspace_stack: {
                stack: []
            }
        }
    ],
    workspaces: [
        {
            name: 'Poker Workspacet',
            id: '1', 
            workspace_stack: {
                stack: []
            }
        }
    ],
    previousProcessId: 100, 
};
