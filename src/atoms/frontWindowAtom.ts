import { atom } from 'recoil';

// TypeScript interface
export interface FrontWindowState {
    maxZ: number;
    // id: number;
}

// Auth Modal, default state
const defaultFrontWindowState: FrontWindowState = {
    maxZ: 0,
};

export const frontWindowState = atom<FrontWindowState>({
    key: 'frontWindowState',
    default: defaultFrontWindowState
});
