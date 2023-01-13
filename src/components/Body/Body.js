import React from 'react';
import { RxAvatar } from 'react-icons/rx';
import { BsEmojiSmile } from 'react-icons/bs';
import { HiOutlinePlus } from 'react-icons/hi';
import { BsThreeDots } from 'react-icons/bs';
import { IoIosHeartEmpty } from 'react-icons/io';
import { RiShareForwardLine } from 'react-icons/ri'
import { CiBookmark } from 'react-icons/ci';
import { BsDot } from 'react-icons/bs';

export default function Body({ className }) {
    return (
        <div className={className}>

            {/* Body Left View */}
            <div style={{ flex: 1, backgroundColor: 'lightgray' }}>

            </div>


            {/* Body Center View */}
            <div style={{ flex: 1.5, paddingTop: 20, marginLeft: '1%', marginRight: '1%' }}>

                {/* New Post Component */}
                <div style={{ borderRadius: 10, backgroundColor: 'white', marginBottom: 30, paddingLeft: 10, paddingRight: 10, }}>

                    <div style={{ paddingTop: 20, paddingBottom: 5, textAlign: 'start', display: 'flex', justifyContent: 'flex-start' }}>
                        <div style={{ paddingRight: 10, display: 'flex', justifyContent: 'flex-start', }}>
                            <RxAvatar size={50} style={{ color: 'gray' }} />
                        </div>
                        <textarea style={{ backgroundColor: '#f0f0f0', borderWidth: 0, borderRadius: 10, display: 'flex', flex: 1, minHeight: 100, resize: 'none' }} />

                    </div>

                    <div style={{ alignItems: 'center', justifyContent: 'flex-end', display: 'flex', paddingTop: 10, paddingBottom: 10 }}>
                        <BsEmojiSmile size={25} color={'gray'} style={{ paddingRight: 20 }} />
                        <HiOutlinePlus size={25} color={'gray'} />
                    </div>

                </div>

                {/* Posts Component */}
                <div style={{ marginTop: 20, borderRadius: 10 }}>

                    <div style={{ display: 'flex', backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                        <RxAvatar size={35} />
                        <div style={{ paddingLeft: 10, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', backgroundColor: 'white', flex: 1, }}>
                            <label style={{ fontWeight: 'bold', color: '#36454F' }}>Şuayip Işık</label>
                            <label style={{ fontWeight: 'bold', color: 'rgb(255, 191, 0)' }}>Mobile Application Developer</label>
                        </div>
                        <BsThreeDots size={30} color={'black'} />
                    </div>

                    <div>
                        <img style={{ width: '100%' }} src='https://parade.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMDEyNTIwOTA0NTcy/japanese-names-jpg.jpg' alt='post_photo' />
                    </div>

                    <div style={{ backgroundColor: 'white', marginBottom: 200, borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>

                        <div style={{ paddingLeft: 20, paddingRight: 20, }}>


                            <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 10, alignItems: 'center' }}>

                                <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>

                                    <div style={{ paddingRight: 20, display: 'flex', flexDirection: 'column' }}>
                                        <IoIosHeartEmpty size={40} color={'#e2e9eb'} />
                                        <label style={{ color: 'black' }}>3</label>
                                    </div>

                                    <div style={{ paddingRight: 10, display: 'flex', flexDirection: 'column' }}>
                                        <RiShareForwardLine size={40} color={'#e2e9eb'} />
                                        <label style={{ color: 'black' }}>1</label>
                                    </div>

                                </div>

                                <div style={{ display: 'flex' }}>
                                    <CiBookmark size={40} color={'#e2e9eb'} />
                                </div>

                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: 5, paddingBottom: 5 }}>
                                <label style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>1&nbsp;</label>
                                <label style={{ fontSize: 12, color: 'gray' }}>Min</label>
                                <BsDot size={13} color={'gray'} />

                                <label style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>4&nbsp;</label>
                                <label style={{ fontSize: 12, color: 'gray' }}>views</label>
                                <BsDot size={13} color={'gray'} />

                                <label style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>5&nbsp;</label>
                                <label style={{ fontSize: 12, color: 'gray' }}>Comments</label>

                            </div>

                            <div style={{ textAlign: 'left' }}>
                                <label style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Lorem Ipsum, kısaca Lipsum, masaüstü yayıncılık ve basın yayın sektöründe kullanılan taklit yazı bloğu olarak tanımlanır...</label>
                            </div>

                            <div style={{ paddingTop: 5, display: 'flex', }}>
                                <label style={{ fontSize: 12, color: 'lightgray' }}>#child&nbsp;#doctor&nbsp;#hospital&nbsp;#fever</label>
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

            </div>

            {/* Body Right View */}
            <div style={{ flex: 1, backgroundColor: 'gray' }}>

            </div>

        </div>
    )
}
