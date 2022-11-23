import React from 'react'
import s from './FriendMessage.module.css'
import {message0} from "../HW1";

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: any) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент
                    src={message0.user.avatar}
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        Dimych
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        Nice, fine! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis dolorum eius modi totam! Distinctio harum mollitia necessitatibus nisi voluptatem.
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                10:11
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
