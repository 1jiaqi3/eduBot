import React from 'react';
import { Link, hashHistory } from 'react-router';
import style from '../../../public/css/landing.css';
import { Topbar } from '../views/topbar';

export class Landing extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={style.outterBg}>
                <Topbar i1="About Us" i2="Github" i3="Contact Us" i4="Sign In" i5="Sign Up" className="nav"/>
                <h1 className={style.h1}>The Ultimate Bridge Between Teachers And Students</h1>
                <h2 className={style.h2}>Your Best Versatile Friend To Learn And Teach With</h2>
                <div className={style.innerBg + ' ' + style.group}>
                    <div className={style.teacher}>
                        <p className={style.txt}>
                            For teachers
                        </p>
                    </div>
                    <div className={style.student}>
                        <p className={style.txt}>
                            For students
                        </p>
                    </div>
                </div>

            </div>
        );
    }
}