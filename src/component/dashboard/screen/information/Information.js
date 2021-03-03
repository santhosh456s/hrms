import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";

const Information = () => {
    return (
        <div className="information-container">
            <div className="avather-container1">
                <p className="avatar"></p>
                <div className="avatar-name">
                    <p>Santhosh</p>
                    <p>santhu</p>
                </div>
            </div>
            <div className="information-icone">
                <AiOutlinePhone />
                <HiOutlineMail />
                <BiDotsHorizontalRounded />
            </div>
            <div className="details">
                <p>Joined Date <span>11- Apr-1016</span></p>
                <p>Projects <span>32 Active</span></p>
                <p>Accomplishments <span>125</span></p>
            </div>
            <button>View More</button>
        </div>
    )
}
export default Information;