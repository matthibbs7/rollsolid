import { WindowState } from '@/types/windows';
import { atom } from 'recoil';

export interface WindowsState {
    stack: Array<WindowState>;
}

export interface WorkspaceState {
    previousProcessId: number,
    workspaces: Array<{id: string, name: string, workspace_stack: WindowsState}>;
    active: {id: string, name: string, workspace_stack: WindowsState};
}

// stack of stacks for workspaces feature
const defaultWorkspaceState: WorkspaceState = {
    previousProcessId: 101,
    workspaces: [{id: '100', name: 'Poker Workspace', workspace_stack: {stack: []}}],
    active: {
        id: '100',
        name: 'Poker Workspace',
        workspace_stack: {stack: []},
    }
};

export const workspaceState = atom<WorkspaceState>({
    key: 'workspaceState',
    default: defaultWorkspaceState,
});
