import React from 'react';
import { RxAvatar } from 'react-icons/rx';
import { BsEmojiSmile } from 'react-icons/bs'
import { HiOutlinePlus } from 'react-icons/hi'

export default function Body({ className }) {
    return (
        <div className={className}>

            <div style={{ flex: 1, backgroundColor: 'lightgray' }}></div>


            <div style={{ flex: 1.5, paddingTop: 20, marginLeft: '1%', marginRight: '1%' }}>

                <div style={{ borderRadius: 10, backgroundColor: 'white' }}>

                    <div style={{ paddingTop: 20, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, textAlign: 'start', display: 'flex', justifyContent: 'flex-start' }}>
                        <div style={{ paddingRight: 10, display: 'flex', justifyContent: 'flex-start', }}>
                            <RxAvatar size={50} style={{ color: 'gray' }} />
                        </div>
                        <textarea style={{ backgroundColor: '#f0f0f0', borderWidth: 0, borderRadius: 10, display: 'flex', flex: 1, minHeight: 100, resize: 'none' }} />

                    </div>

                    <div style={{ alignItems: 'center', justifyContent: 'flex-end', display: 'flex', paddingRight: 10, paddingTop: 10, paddingBottom: 10 }}>
                        <BsEmojiSmile size={25} color={'gray'} style={{ paddingRight: 20 }} />
                        <HiOutlinePlus size={25} color={'gray'} />
                    </div>
                </div>

            </div>


            <div style={{ flex: 1, backgroundColor: 'gray' }}></div>

        </div>
    )
}
