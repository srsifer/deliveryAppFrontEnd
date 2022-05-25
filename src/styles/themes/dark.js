import {shade} from 'polished'

export default  {
    title: 'dark',

    colors: {
        primary: "#f6943c",
        secundary: "#002B54",
        background: '#001427',
        shadows: shade(0.70, '#001427'),
    },

    cardScheme: {
        cardBg: 'white',
        cardFooterBg: '#f6943c',
        cardButtonColor: 'red',
        cardInputColor: 'red'
    },

    font: {
        color: {
            primary: 'white',
            secundary: 'white',
            otherColor: '#333'
        }
    },

    totalPriceScheme: { 
        colorBg: '#FF7F50',
        fontColor: 'white'
    }
}

/* "Davys Grey":"565554",
"Blue NCS":"2e86ab",
"Green Yellow Crayola":"f6f5ae", */

