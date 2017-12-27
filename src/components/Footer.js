import React, {Component} from "react";
import coverMain from "../assets/cover-5.jpg";

import "./Footer.css";


class Footer extends Component {
    render() {
        return (
            <div className="slide footer">
                <div className="slide__cover" style={{backgroundImage: 'url(' + coverMain + ')'}}/>
                <div className="slide__overlay"/>
                <div className="slide__inner container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="header__title footer__title">#лагерь_<a target="_blank"
                                                                                            rel="noopener noreferrer"
                                                                                            href="https://vverh.su">вверх</a>
                                    </div>
                                    <p className="header__subtitle">
                                        Волонтерский лагерь в Бельско-Устьенском детском доме-интернате для
                                        особенных детей проходит с 2000 года.
                                    </p>
                                </div>
                                <div className="footer__text col-lg-5">
                                    <p>Узнать больше:&nbsp;&nbsp;
                                        <a className="footer__social" href="https://www.facebook.com/CentreStepUP/"
                                           target="_blank"
                                           rel="noopener noreferrer">
                                            <i className="fa fa-facebook" aria-hidden="true"/>
                                        </a>
                                        <a className="footer__social" href="https://vk.com/public23520287"
                                           target="_blank"
                                           rel="noopener noreferrer">
                                            <i className="fa fa-vk" aria-hidden="true"/>
                                        </a>
                                        <a className="footer__social" href="https://www.instagram.com/step_up_centre/"
                                           target="_blank"
                                           rel="noopener noreferrer">
                                            <i className="fa fa-instagram" aria-hidden="true"/>
                                        </a>
                                    </p>
                                    <p>Сделано с <a target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://www.facebook.com/daniil.dntcare">אהבה</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer

