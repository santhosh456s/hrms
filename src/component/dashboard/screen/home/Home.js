import { React, useEffect } from 'react'
import Calendar from 'react-calendar';
import authentication from '../../../../hoc/authentication';
import Greeting from '../../../greeting/Greeting';
import Avathar from '../../../header/avathar/Avather';
import Header from '../../../header/Header';
import Recruitment from '../../../recruitent/Recruitment';
import Calendar_m from '../calender/Calender_m';
import Information from '../information/Information';


const Home = (props) => {

    // useEffect(() => {
    //     if (!props.isLogin) {
    //         props.history.push("/login");
    //     }
    // }, [props.isLogin]);

    const name = "Dashboard";
    return (

        <div className="home-container">
            <div className="H_caintainer">
                <Header name={name} />
            </div>
            <div className="main-container">
                <div className="right-container">
                    <div className="greeting_container">
                        <Greeting />
                    </div>
                    <div className="recrument_prograse">
                        <Recruitment />
                    </div>
                </div>

                <div className="side-container">
                    <div className="calender">
                        <Calendar_m />
                    </div>
                    <div className="information-c">
                        <Information />
                    </div>
                </div>
            </div>
        </div>

    );
}
export default authentication(Home);