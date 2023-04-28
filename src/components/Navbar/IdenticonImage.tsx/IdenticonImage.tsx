import React from 'react';
import { Img } from '@chakra-ui/react';
import { identicon } from 'minidenticons';
import { useMemo } from 'react';

interface IdenticonImgProps {
    username: string,
    saturation: string,
    lightness: string,
    height: string,
    width: string,
}

export const IdenticonImg = ({ username, saturation, lightness, height, width, ...props }: IdenticonImgProps) => {
    const svgURI = useMemo(
        () => 'data:image/svg+xml;utf8,' + encodeURIComponent(identicon(username, saturation, lightness)),
        [username, saturation, lightness]
    );
    return <Img w={width} h={height} alt={username} src={svgURI} {...props} />;
};