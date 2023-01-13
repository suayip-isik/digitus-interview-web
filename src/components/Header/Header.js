import React from 'react';
import digitus from '../../assets/digitus.png'
import style from './style';
import { FaPlus } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import { GrSearch } from 'react-icons/gr';
import { MdMail } from 'react-icons/md';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RxAvatar } from 'react-icons/rx';
import { BsChevronDown } from 'react-icons/bs';

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

                <button style={{ flex: 1, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 0 }}>
                    <label style={{ fontWeight: 'bold', color: 'gray' }}>Moms</label>
                </button>

                <button style={{ flex: 1, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 0 }}>
                    <label style={{ fontWeight: 'bold', color: 'gray' }}>Experts</label>
                </button>

                <button style={{ flex: 1, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 0 }}>
                    <label style={{ fontWeight: 'bold', color: 'gray' }}>Explore</label>
                </button>

                <button style={{ flex: 1, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 0 }}>
                    <label style={{ fontWeight: 'bold', color: 'gray' }}>Forum</label>
                </button>

                <button style={{ flex: 1, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 0 }}>
                    <label style={{ fontWeight: 'bold', color: 'gray' }}>MomTalk</label>
                </button>

            </div>

            <div style={style.rightContainer}>

                <div style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingRight: 5 }}>
                    <GrSearch size={20} color={'white'} />
                </div>

                <label style={{ color: 'lightgray', paddingRight: 5 }}>|</label>

                <div style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingRight: 5 }}>
                    <MdMail size={25} color={'black'} />
                </div>

                <label style={{ color: 'lightgray', paddingRight: 5 }}>|</label>

                <div style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingRight: 5 }}>
                    <IoMdNotificationsOutline size={25} color={'black'} />
                </div>

                <label style={{ color: 'lightgray', paddingRight: 5 }}>|</label>

                <div style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingRight: 5 }}>
                    <RxAvatar size={25} color={'black'} style={{ paddingRight: 5 }} />
                    <BsChevronDown size={10} color={'black'} style={{ paddingRight: 10 }} />
                </div>

            </div>

        </div>
    )
}
