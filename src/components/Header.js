import React, {Component} from "react";

import "./Header.css";
import cover from "../assets/cover-2.png";


class Header extends Component {

    scrollNext() {
        document.querySelector('.main').scrollIntoView({
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <div className="slide header">
                <div className="slide__cover" style={{backgroundImage: 'url(' + cover + ')'}}/>
                <div className="slide__overlay"/>
                <div className="slide__inner container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="header__title">#лагерь_<a target="_blank" rel="noopener noreferrer"
                                                                              href="https://vverh.su">вверх</a></div>
                                    <p className="header__subtitle">
                                        Волонтерский лагерь в Бельско-Устьенском детском доме-интернате для
                                        особенных детей проходит с 2000 года.
                                    </p>
                                </div>
                                <div className="header__text col-lg-6">
                                    <p>Чтобы помочь преодолеть изоляцию, в которой оказываются дети в закрытом
                                        учреждении,
                                        дать
                                        стимул для дальнейшего развития и сделать каникулы в стенах детского
                                        дома
                                        интересными, в
                                        небольшую деревню в Псковской области приезжают волонтеры из разных
                                        городов
                                        России и
                                        стран
                                        мира.
                                    </p>
                                    <p>За годы существования лагерь качественно изменил отношение сотрудников
                                        детского дома
                                        к своей
                                        работе и дал толчок к развитию системы поддержки выпускников детского
                                        дома.
                                    </p>
                                    <p>Лагерь дает каждому ребенку - вне зависимости от его способней -
                                        возможность
                                        принимать
                                        участие в развивающих занятиях, учавствовать в проектах и просто
                                        общаться с новыми
                                        людьми.
                                    </p>
                                    <p>Подробнее о проекте на&nbsp;<a href="https://vverh.su/activity/projects/letnij-lager/"
                                           target="_blank"
                                           rel="noopener noreferrer">сайте Вверх</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide__btns row">
                    <button className="header__btn btn btn-link" onClick={this.scrollNext}>
                        <i className="fa fa-angle-down" aria-hidden="true"/>
                    </button>
                </div>
            </div>
        )
    }
}

export default Header

