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
    case 'timeseries':
        return {
            title: 'Timeseries'
        };
    case 'pie':
        return {
            title: 'Pie Chart'
        };
    case 'reference': {
        return {
            title: 'Hand Reference'
        };
    }
    default:
        return {};
    }
};