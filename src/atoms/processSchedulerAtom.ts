import { atom } from 'recoil';

// TypeScript interface
export interface ProcessSchedulerState {
    previousId: number;
    processMatrix: Set<number>;
}

// Auth Modal, default state
const defaultProcessSchedulerState: ProcessSchedulerState = {
    previousId: -1,
    processMatrix: new Set<number>(),
};

export const processSchedulerState = atom<ProcessSchedulerState>({
    key: 'processSchedulerState',
    default: defaultProcessSchedulerState,
});
