export type UserSettings = {
    notifications: boolean;
    widgetLock: boolean;
}

export interface UserProfile {
    userEmail: string;
    userSettings: UserSettings;
    /** List of dashboard ID's that below to user (primary key) */
    userDashboards: {dashboardId: string, dashboardName: string, dashboardColor: string}[];
}