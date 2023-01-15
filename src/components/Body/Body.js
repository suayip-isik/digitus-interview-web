import React from 'react';
import { RxAvatar } from 'react-icons/rx';
import { BsEmojiSmile } from 'react-icons/bs';
import { HiOutlinePlus } from 'react-icons/hi';
import PostComponent from '../PostComponent/';

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

                <PostComponent
                    name={'Şuayip Işık'}
                    title={'Mobile Application Developer'}
                    image={'https://parade.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMDEyNTIwOTA0NTcy/japanese-names-jpg.jpg'}
                    imageAlt={'post_photo'}
                    likeNumber={5}
                    shareNumber={8}
                    minNumber={7}
                    viewNumber={6}
                    commentNumber={4}
                    description={'Lorem Ipsum, kısaca Lipsum, masaüstü yayıncılık ve basın yayın sektöründe kullanılan taklit yazı bloğu olarak tanımlanır...'}
                    tags={['child','doctor','hospital','ever']}
                />

            </div>

            {/* Body Right View */}
            <div style={{ flex: 1, backgroundColor: 'gray' }}>

            </div>

        </div>
    )
}
