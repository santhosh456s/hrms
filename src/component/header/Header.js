import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { AiOutlineSend } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io'
import Avathar from './avathar/Avather';
const Header = ({ name }) => {
    return (
        <div className="container">
            <div className="header-container">
                <h1>{name}</h1>
                <div className="send-section">
                    <div className="search-container">
                        <input type="text" name='name' />
                        <BiSearch />
                    </div>
                    <AiOutlineSend />
                    <IoMdNotificationsOutline />
                </div>
            </div>
            <div className="avatar-container">
                <Avathar />
            </div>
        </div>
    )
}
export default Header;