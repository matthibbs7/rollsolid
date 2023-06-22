import React from 'react';
import { Text } from '@chakra-ui/react';

interface PlayCardProps {
    fontSize: string;
    suit: 'spade' | 's' | 'club' | 'c' | 'heart' | 'h' | 'diamond' | 'd';
    value: 'A' | 'a' | 'K' | 'k' | 'Q' | 'q' | 'J' | 'j' | '10' | 't' | '9' | '8' | '7' | '6' | '5' | '4' | '3' | '2';
}

const PlayCard = ({ fontSize, suit, value }: PlayCardProps) => {

    const getCardFace = (s: string, v: string) => {

        if (s === 'spade' || s === 's') {
            switch (v) {
            case 'A':
            case 'a':
                return '🂡';
            case 'K':
            case 'k':
                return '🂮';
            case 'Q':
            case 'q':
                return '🂭';  
            case 'J':
            case 'j':
                return '🂫';   
            case '10':
            case 't':
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
            
        } else if (s === 'heart' || s === 'h') {
            switch (v) {
            case 'A':
            case 'a':
                return '🂱';
            case 'K':
            case 'k':
                return '🂾';
            case 'Q':
            case 'q':
                return '🂽';  
            case 'J':
            case 'j':
                return '🂻';   
            case '10':
            case 't':
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
            
        } else if (s === 'diamond' || s === 'd') {
            switch (v) {
            case 'A':
            case 'a':
                return '🃁';
            case 'K':
            case 'k':
                return '🃎';
            case 'Q':
            case 'q':
                return '🃍';  
            case 'J':
            case 'j':
                return '🃋';   
            case '10':
            case 't':
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
            case 'a':
                return '🃑';
            case 'K':
            case 'k':
                return '🃞';
            case 'Q':
            case 'q':
                return '🃝';  
            case 'J':
            case 'j':
                return '🃛';   
            case '10':
            case 't':
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