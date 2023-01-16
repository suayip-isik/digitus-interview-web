import React from 'react';
import styles from './PostComponent.style';
import { BsThreeDots } from 'react-icons/bs';
import { IoIosHeartEmpty } from 'react-icons/io';
import { RiShareForwardLine } from 'react-icons/ri'
import { CiBookmark } from 'react-icons/ci';
import { BsDot } from 'react-icons/bs';
import { RxAvatar } from 'react-icons/rx';


export default function PostComponent({ image, imageAlt, name, title, likeNumber, shareNumber, minNumber, viewNumber, commentNumber, description, tags, isSponsor }) {
    return (
        <div style={styles.container}>

            <div style={Object.assign(isSponsor ? { backgroundImage: "linear-gradient(to right, #E5D2EE, #D2E8EE)" } : {}, styles.headerContainer)}>
                <RxAvatar size={35} />
                <div style={styles.headerCenterContainer}>
                    <label style={styles.headerName}>{name}</label>
                    <label style={Object.assign(isSponsor ? { color: 'red' } : { color: 'rgb(255, 191, 0)', }, styles.headerTitle)}>{title}</label>
                </div>
                <BsThreeDots size={30} color={'black'} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {
                    image && <img style={{ width: '100%' }} src={image} alt={imageAlt} />
                }
            </div>

            <div style={styles.bottomContainer}>

                <div style={styles.bottomContentContainer}>


                    <div style={styles.actionContainer}>

                        <div style={styles.actionContainerRight}>

                            <div style={{ paddingRight: 20, display: 'flex', flexDirection: 'column' }}>
                                <IoIosHeartEmpty size={40} color={'#e2e9eb'} />
                                <label style={{ color: 'black' }}>{likeNumber}</label>
                            </div>

                            <div style={{ paddingRight: 10, display: 'flex', flexDirection: 'column' }}>
                                <RiShareForwardLine size={40} color={'#e2e9eb'} />
                                <label style={{ color: 'black' }}>{shareNumber}</label>
                            </div>

                        </div>

                        <div style={{ display: 'flex' }}>
                            <CiBookmark size={40} color={'#e2e9eb'} />
                        </div>

                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: 5, paddingBottom: 5 }}>
                        <label style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>{minNumber}&nbsp;</label>
                        <label style={{ fontSize: 12, color: 'gray' }}>Min</label>
                        <BsDot size={13} color={'gray'} />

                        <label style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>{viewNumber}&nbsp;</label>
                        <label style={{ fontSize: 12, color: 'gray' }}>views</label>
                        <BsDot size={13} color={'gray'} />

                        <label style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>{commentNumber}&nbsp;</label>
                        <label style={{ fontSize: 12, color: 'gray' }}>Comments</label>

                    </div>

                    <div style={{ textAlign: 'left' }}>
                        <label style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>{description}</label>
                    </div>

                    <div style={{ paddingTop: 5, display: 'flex', }}>
                        {
                            tags.map((val, i) => {
                                return (
                                    <label key={i} style={{ fontSize: 12, color: 'gray' }}><b style={{ color: 'black' }}>#</b>{val}&nbsp;</label>
                                );
                            })
                        }
                    </div>

                </div>

                <hr style={{ paddingBottom: 0, marginBottom: 0, color: 'lightgray', backgroundColor: 'lightgray', border: 'none', minHeight: 1 }}></hr>

                <div style={{ display: 'flex', alignItems: 'center', borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>

                    <textarea style={{
                        resize: 'none',
                        borderWidth: 0,
                        flex: 1,
                        borderBottomLeftRadius: 10,
                        paddingLeft: 10,
                        paddingTop: 5,
                        fontFamily: 'unset',
                        color: 'gray'
                    }} placeholder={'Comment This'} />

                    <div style={{ borderBottomLeftRadius: 10, paddingLeft: 30, paddingRight: 30 }}>
                        <button style={{
                            borderWidth: 1,
                            borderColor: '#fafaeb',
                            paddingTop: 5,
                            paddingBottom: 5,
                            paddingLeft: 7,
                            paddingRight: 7,
                            borderRadius: 10,
                            backgroundColor: '#f0f0f0',
                            color: 'gray',
                        }}>Post</button>
                    </div>
                </div>


            </div>




        </div>
    )
}
