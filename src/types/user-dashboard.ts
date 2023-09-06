import { WorkspaceState } from '@/atoms/workspaceAtom';

export interface UserDashboard {
    dashboardName: string;
    dashboardColor: string;
    dashboardWorkspaces: WorkspaceState;
}