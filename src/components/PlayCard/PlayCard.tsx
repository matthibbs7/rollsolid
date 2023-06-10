import React from 'react';
import { Text } from '@chakra-ui/react';

interface PlayCardProps {
    fontSize: string;
    suit: 'spade' | 'club' | 'heart' | 'diamond';
    value: 'A' | 'K' | 'Q' | 'J' | '10' | '9' | '8' | '7' | '6' | '5' | '4' | '3' | '2';
}

const PlayCard = ({ fontSize, suit, value }: PlayCardProps) => {

    const getCardFace = (s: string, v: string) => {

        if (s === 'spade') {
            switch (v) {
            case 'A':
                return '🂡';
            case 'K':
                return '🂮';
            case 'Q':
                return '🂭';  
            case 'J':
                return '🂫';   
            case '10':
                return '🂪';
            case '9':
                return '🂩';
            case '8':
                return '🂨';
            case '7':
                return '🂧';
            case '6':
                return '🂦';  
            case '5':
                return '🂥';
            case '4':
                return '🂤';
            case '3':
                return '🂣';
            case '2':
                return '🂢';        
            default:
                return '';
            }
            
        } else if (s === 'heart') {
            switch (v) {
            case 'A':
                return '🂱';
            case 'K':
                return '🂾';
            case 'Q':
                return '🂽';  
            case 'J':
                return '🂻';   
            case '10':
                return '🂺';
            case '9':
                return '🂹';
            case '8':
                return '🂸';
            case '7':
                return '🂷';
            case '6':
                return '🂶';  
            case '5':
                return '🂵';
            case '4':
                return '🂴';
            case '3':
                return '🂳';
            case '2':
                return '🂲';        
            default:
                return '';
            }
            
        } else if (s === 'diamond') {
            switch (v) {
            case 'A':
                return '🃁';
            case 'K':
                return '🃎';
            case 'Q':
                return '🃍';  
            case 'J':
                return '🃋';   
            case '10':
                return '🃊';
            case '9':
                return '🃉';
            case '8':
                return '🃈';
            case '7':
                return '🃇';
            case '6':
                return '🃆';  
            case '5':
                return '🃅';
            case '4':
                return '🃄';
            case '3':
                return '🃃';
            case '2':
                return '🃂';        
            default:
                return '';
            }
            
        } else {
            switch (v) {
            case 'A':
                return '🃑';
            case 'K':
                return '🃞';
            case 'Q':
                return '🃝';  
            case 'J':
                return '🃛';   
            case '10':
                return '🃚';
            case '9':
                return '🃙';
            case '8':
                return '🃘';
            case '7':
                return '🃗';
            case '6':
                return '🃖';  
            case '5':
                return '🃕';
            case '4':
                return '🃔';
            case '3':
                return '🃓';
            case '2':
                return '🃒';        
            default:
                return '';
            }
                
        }

        return 0;
    };

    return (
        
        <Text color='#666666' fontSize={fontSize}>{getCardFace(suit, value)}</Text>
        
    );
};
export default PlayCard;