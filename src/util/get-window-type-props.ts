import { WindowType } from '@/types/windows';

export const getWindowTypeProps = (type: WindowType) => {
    switch (type) {
    case 'timer':
        return {
            title: 'Timer'
        };
    case 'notes':
        return {
            title: 'Notes'
        };
    default:
        return {};
    }
};