import React from 'react';
import { Link } from 'react-router';
import style from '../../../public/css/topbar.css';

export class Topbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav>
                <ul className={style.group + " " + style.ul}>
                    <li className={style.itemLeft}><Link className={style.a} to={"#"}>{this.props.i1}</Link></li>
                    <li className={style.itemLeft}><Link className={style.a} to={"#"}>{this.props.i2}</Link></li>
                    <li className={style.itemLeft}><Link className={style.a} to={"#"}>{this.props.i3}</Link></li>
                    <li className={style.itemRight}><Link className={style.a} to={"#"}>{this.props.i4}</Link></li>
                    <li className={style.itemRight}><Link className={style.a} to={"#"}>{this.props.i5}</Link></li>
                </ul>
            </nav>
        );
    }
}