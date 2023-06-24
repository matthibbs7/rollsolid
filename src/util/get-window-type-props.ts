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
    };
    case 'implied odds': {
        return {
            title: 'Implied Odds'
        };
    };
    case 'pot odds': {
        return {
            title: 'Betting Odds'
        };
    };
    case 'hand ranking': {
        return {
            title: 'Ranking Calculator'
        };
    };
    case 'pre flop analysis': {
        return {
            title: 'Pre-Flop Analysis',
            moduleSize: {minWidth: '240px', minHeight: '300px'}
        };
    };
    default:
        return {
            title: 'Not Found'
        };
    }
};