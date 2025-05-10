import CardModel from './card-model'
import { Box, Image, Text, Heading } from 'theme-ui'
import Buttons from './button'

/** @jsxImportSource theme-ui */
export default function shipwrecked() {
    return (
        <CardModel>
            color="white"
            sx={{
                backgroundSize: 'cover',
                backgroundColor: 'rgb(82, 165, 212)',
                fontFamily: "Phantom Sans",
                objectFit: "contain"
            }}
            position={[null, 'bottom', 'bottom']}
            <Global
                styles={`
                @font-face {
                    font-family: 'Phantom Sans';
                    src: url('https://assets.hackclub.com/fonts/Phantom_Sans_0.7/Bold.woff')
                        format('woff'),
                        url('https://assets.hackclub.com/fonts/Phantom_Sans_0.7/Bold.woff2')
                        format('woff2');
                    font-weight: bold;
                    font-style: normal;
                    font-display: swap;
                }
                `}
            />
        </CardModel>
    )
}