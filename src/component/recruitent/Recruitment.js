import React from 'react';
import Avather from '../header/avathar/Avather'
const recruitments = [
    {
        image: `../../ image / my_photo1.jpg`,
        name: "santhosh",
        designation: "Softwere Devlaper",
        status: "First Round",

    },
    {
        image: "../../image/my_photo1.jpg",
        name: "shreesha",
        designation: "Coding ",
        status: "Final round",

    },
    {
        image: "../../image/my_photo1.jpg",
        name: "Rakesh",
        designation: "Programmer",
        status: "Secand round",

    }
]
const Recruitment = () => {
    return (
        <div className="recruitment-container">
            <h2>Recruitment Progress</h2>
            <table>

                <tr className="table-heading">
                    <th>image</th>
                    <th>name</th>
                    <th>designation</th>
                    <th>status</th>
                    <th>...</th>

                </tr>

                {recruitments.map(recruitment => {
                    return [
                        <tr>
                            <td><Avather /></td>
                            <td>{recruitment.name}</td>
                            <td>{recruitment.designation}</td>
                            <td>{recruitment.status}</td>
                            <td>...</td>
                        </tr>
                    ]
                })}
            </table>
            <div className='rerecruitment-footer'>
                <p>Showing 4 out of {recruitments.length} Result</p>
                <button>View All</button>
            </div>
        </div>
    );
}

export default Recruitment;
