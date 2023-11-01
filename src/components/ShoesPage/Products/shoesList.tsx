import NikeAirForce107ProTech from '../../../images/Shoes/AirForce1/Nike Air Force 1 07 Pro-Tech.png'
import NikeAirForce1Mid07 from '../../../images/Shoes/AirForce1/Nike Air Force 1 Mid 07.png'
import NikeAirForce1LowRetro from '../../../images/Shoes/AirForce1/Nike Air Force 1 Low Retro.png'
import NikeAirForce107LV81 from '../../../images/Shoes/AirForce1/Nike Air Force 1 07 LV8 1.png'
import NikeAirForce107Premium from '../../../images/Shoes/AirForce1/Nike Air Force 1 07 Premium.png'
import Max90GORETEX from '../../../images/Shoes/AirMax/Nike Air Max 90 GORE-TEX.png'
import MAXVaporPLUS from '../../../images/Shoes/AirMax/Nike Air VaporMax Plus.png'
import Max270 from '../../../images/Shoes/AirMax/Nike Air Max 270.png'
import MaxTerrascapePlus from '../../../images/Shoes/AirMax/Nike Air Max Terrascape Plus.png'
import MaxSOLO from '../../../images/Shoes/AirMax/Nike Air Max Solo.png'
import DunkHigh85 from '../../../images/Shoes/Dunk/Nike Dunk High 85.png'
import DunkHighByYou from '../../../images/Shoes/Dunk/Nike Dunk High By You.png'
import DunkHighRetro from '../../../images/Shoes/Dunk/Nike Dunk High Retro.png'
import DunkLowBySuns from '../../../images/Shoes/Dunk/Nike Dunk Low By Suns.png'
import DunkMidPremium from '../../../images/Shoes/Dunk/Nike Dunk Mid Premium.png'
import DunkHigh1 from '../../../images/Shoes/Dunk/Women/Nike Dunk High 1.png'
import DunkHigh from '../../../images/Shoes/Dunk/Women/Nike Dunk High.png'
import DunkLowDisruptX from '../../../images/Shoes/Dunk/Women/Nike Dunk Low Disrupt x Serena Williams Design Crew.png'
import DunkLowUnlockedBy from '../../../images/Shoes/Dunk/Women/Nike Dunk Low Unlocked By You.png'
import DunkLowXParrisGoebel from '../../../images/Shoes/Dunk/Women/Nike Dunk Low x Parris Goebel.png'
import JordanAirJordan1MidSE from '../../../images/Shoes/Jordan/Air Jordan 1 Mid SE.png'
import Jordan5RetroSE from '../../../images/Shoes/Jordan/Air Jordan 5 Retro SE.png'
import Jordan6Retro from '../../../images/Shoes/Jordan/Air Jordan 6 Retro.png'
import JordanDíaDeMuertos from '../../../images/Shoes/Jordan/Día De Muertos.png'
import JordanJumpmanProQuick from '../../../images/Shoes/Jordan/Jordan Jumpman Pro Quick.png'

import {Shoe} from './interfaceShoe'

const shoesList: Shoe[] =[
    {
        id: 1,
        img: NikeAirForce107ProTech,
        name: `Nike Air Force 1 '07 Pro-Tech`,
        type: 'Air Force 1',
        gender: `Men's Shoes`,
        price: 155,
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
        stripePrice: "price_1O7akPGa5FM93Xwu5NLHka2r",
    },
    {
        id: 2,
        img: NikeAirForce1Mid07,
        name: `Nike Air Force 1 Mid '07`,
        type: 'Air Force 1',
        gender: `Men's Shoes`,
        price: 125,
        sizes: [7, 7.5, 9, 10.5, 11, 12.5, 13],
        stripePrice: 'price_1O7aqfGa5FM93XwuKSonFJLQ',
    },
    {
        id: 3,
        img: NikeAirForce1LowRetro,
        name: `Nike Air Force 1 Low Retro`,
        type: 'Air Force 1',
        gender: `Men's Shoes`,
        price: 71.97,
        oldPrice: 130,
        sizes: [7.5, 8, 9, 9.5, 11, 11.5],
        stripePrice: 'price_1O7b5rGa5FM93XwuhzMTSuxA',
    },
    {
        id: 4,
        img: NikeAirForce107LV81,
        name: `Nike Air Force 1 '07 LV8 1'`,
        type: 'Air Force 1',
        gender: `Men's Shoes`,
        price: 135,
        sizes: [7, 8.5, 9, 10, 11, 12],
        stripePrice: 'price_1O7blfGa5FM93XwulW1NSKpB',
    },
    {
        id: 5,
        img: NikeAirForce107Premium,
        name: `Nike Air Force 1 '07 Premium`,
        type: 'Air Force 1',
        gender: `Men's Shoes`,
        price: 90.97,
        oldPrice: 150,
        sizes: [7.5, 8.5, 9, 9.5, 11],
        stripePrice: 'price_1O7bnLGa5FM93XwuTcqR85wh',
    },
    {
        id: 6,
        img: Max90GORETEX,
        name: `Nike Air Max 90 GORE-TEX`,
        type: 'Air Max',
        gender: `Men's Shoes`,
        price: 160,
        sizes: [8, 9, 10, 10.5, 11.5, 12.5, 13],
        stripePrice: 'price_1O7bngGa5FM93XwujBJHTl7o',
    },
    {
        id: 7,
        img: MAXVaporPLUS,
        name: `Nike Air VaporMax Plus`,
        type: 'Air Max',
        gender: `Men's Shoes`,
        price: 210,
        sizes: [7, 8, 8.5, 9, 11],
        stripePrice: 'price_1O7bo7Ga5FM93XwuVlIWITZ7',
    },
    {
        id: 8,
        img: Max270,
        name: `Nike Air Max 270`,
        type: 'Air Max',
        gender: `Men's Shoes`,
        price: 165,
        sizes: [7.5, 8, 9, 10, 10.5, 11, 11.5, 12],
        stripePrice: 'price_1O7boTGa5FM93XwugLwdeNaZ',
    },
    {
        id: 9,
        img: MaxTerrascapePlus,
        name: `Nike Air Max Terrascape Plus`,
        type: 'Air Max',
        gender: `Men's Shoes`,
        price: 111.97,
        oldPrice:185,
        sizes: [7, 8.5, 9.5, 10, 12],
        stripePrice: 'price_1O7bonGa5FM93XwuA0qYx7KW',
    },
    {
        id: 10,
        img: MaxSOLO,
        name: `Nike Air Max Solo`,
        type: 'Air Max',
        gender: `Men's Shoes`,
        price: 79.97,
        oldPrice:100,
        sizes: [7, 8, 9, 10, 11, 11.5, 13],
        stripePrice: 'price_1O7bpOGa5FM93XwuyMEln7Iv',
    },
    {
        id: 11,
        img: DunkHighRetro,
        name: `Nike Dunk High Retro`,
        type: 'Dunk',
        gender: `Men's Shoes`,
        price: 130,
        sizes: [7, 8, 9.5, 10.5, 11, 12, 13],
        stripePrice: 'price_1O7bpuGa5FM93XwucGHEuByk',
    },
    {
        id: 12,
        img: DunkHigh85,
        name: `Nike Dunk High 85`,
        type: 'Dunk',
        gender: `Men's Shoes`,
        price: 77.97,
        oldPrice: 140,
        sizes: [7, 7.5, 9, 10, 11.5, 12.5],
        stripePrice: 'price_1O7bqRGa5FM93Xwuw5Zoyco8',
    },
    {
        id: 13,
        img: DunkMidPremium ,
        name: `Nike Dunk Mid Premium`,
        type: 'Dunk',
        gender: `Men's Shoes`,
        price: 140,
        sizes: [7.5, 8.5, 9, 10.5, 12, 13],
        stripePrice: 'price_1O7bqxGa5FM93XwuSEatJTZH',
    },
    {
        id: 14,
        img: DunkHighByYou,
        name: `Nike Dunk High By You`,
        type: 'Dunk',
        gender: `Men's Shoes`,
        price: 155,
        sizes: [8, 9, 10, 11, 12],
        stripePrice: 'price_1O7brVGa5FM93XwutjucSVOE',
    },
    {
        id: 15,
        img: DunkLowBySuns,
        name: `Nike Dunk Low By Suns`,
        type: 'Dunk',
        gender: `Men's Shoes`,
        price: 150,
        sizes: [7, 7.5, 9, 9.5, 11],
        stripePrice: 'price_1O7brnGa5FM93XwuXImFWxsA',
    },
    {
        id: 16,
        img: DunkLowUnlockedBy,
        name: `Nike Dunk Low Unlocked By You`,
        type: `Dunk`,
        gender: `Women's Shoes`,
        price: 150,
        sizes: [7, 7.5, 8, 9, 10, 11, 11.5],
        stripePrice: 'price_1O7bs2Ga5FM93XwuDHms4JbK',
    },
    {
        id: 17,
        img: DunkHigh,
        name: `Nike Dunk High`,
        type: `Dunk`,
        gender: `Women's Shoes`,
        price: 130,
        sizes: [8, 9, 10, 10.5, 11.5],
        stripePrice: 'price_1O7bsKGa5FM93XwuD0SB31lu',
    },
    {
        id: 18,
        img: DunkLowXParrisGoebel,
        name: `Nike Dunk Low x Parris Goebel`,
        type: `Dunk`,
        gender: `Women's Shoes`,
        price: 125,
        sizes: [7, 8.5, 9, 10, 11, 12, 13],
        stripePrice: 'price_1O7bsdGa5FM93XwuTIuVDr3G',
    },
    {
        id: 19,
        img: DunkHigh1,
        name: `Nike Dunk High 1`,
        type: `Dunk`,
        gender: `Women's Shoes`,
        price: 98.97,
        oldPrice:120,
        sizes: [7.5, 8, 9.5, 10.5, 11],
        stripePrice: 'price_1O7bsyGa5FM93XwucdtvQ2fc',
    },
    {
        id: 20,
        img: DunkLowDisruptX,
        name: `Nike Dunk Low Disrupt x Serena Williams Design Crew`,
        type: `Dunk`,
        gender: `Women's Shoes`,
        price: 120,
        sizes: [7, 7.5, 8.5, 9, 10, 10.5, 11],
        stripePrice: 'price_1O7btEGa5FM93Xwu93XjzSvL',
    },
    {
        id: 21,
        img: Jordan5RetroSE,
        name: `Air Jordan 5 Retro SE`,
        type: `Jordan`,
        gender: `Men's Shoes`,
        price: 225,
        sizes: [7.5, 8, 9, 9.5, 10, 11, 11.5, 12],
        stripePrice: 'price_1O7btfGa5FM93XwuPJJ68VCi',
    },
    {
        id: 22,
        img: Jordan6Retro,
        name: `Air Jordan 6 Retro`,
        type: `Jordan`,
        gender: `Men's Shoes`,
        price: 200,
        sizes: [8, 8.5, 9, 10, 11],
        stripePrice: 'price_1O7btyGa5FM93XwuwKrXQqnU',
    },
    {
        id: 23,
        img: JordanDíaDeMuertos,
        name: `Día De Muertos`,
        type: `Jordan`,
        gender: `Men's Shoes`,
        price: 165,
        sizes: [7.5, 8, 9, 10, 10.5, 11.5, 12],
        stripePrice: 'price_1O7buHGa5FM93Xwu5oeDWPqZ',
    },
    {
        id: 24,
        img: JordanJumpmanProQuick,
        name: `Jordan Jumpman Pro Quick`,
        type: `Jordan`,
        gender: `Men's Shoes`,
        price: 116.97,
        oldPrice: 145,
        sizes: [7, 8, 8.5, 9, 10, 10.5, 12, 12.5],
        stripePrice: 'price_1O7buXGa5FM93XwukTjYaZoI',
    },
    {
        id: 25,
        img: JordanAirJordan1MidSE,
        name: `Air Jordan 1 Mid SE`,
        type: `Jordan`,
        gender: `Men's Shoes`,
        price: 87.97,
        oldPrice: 135,
        sizes: [7, 7.5, 8, 9, 9.5, 11, 12.5, 13],
        stripePrice: 'price_1O7buoGa5FM93XwumqFP8zLA',
    },

]


export default shoesList