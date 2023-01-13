import React from 'react';
import digitus from '../../assets/digitus.png'
import style from './style';
import { FaPlus } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi'

export default function Header() {
    return (
        <div style={style.container}>

            <div style={style.leftContainer}>
                <img src={digitus} alt={'Digitus'} style={style.image} />
            </div>

            <div style={style.menuBarContainer}>

                <div style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <FiPlus size={30} color={'white'} style={{ backgroundColor: 'orchid', borderRadius: 15, marginRight: 10 }} />
                </div>

                <div style={{ flex: 1, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <label style={{ fontWeight: 'bold', color: 'gray' }}>Moms</label>
                </div>

                <div style={{ flex: 1, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <label style={{ fontWeight: 'bold', color: 'gray' }}>Experts</label>
                </div>

                <div style={{ flex: 1, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <label style={{ fontWeight: 'bold', color: 'gray' }}>Explore</label>
                </div>

                <div style={{ flex: 1, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <label style={{ fontWeight: 'bold', color: 'gray' }}>Forum</label>
                </div>

                <div style={{ flex: 1, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <label style={{ fontWeight: 'bold', color: 'gray' }}>MomTalk</label>
                </div>

            </div>

            <div style={style.rightContainer}></div>
        </div>
    )
}
