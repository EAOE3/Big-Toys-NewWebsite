import {useState, useEffect} from 'react';
import {
    logo_white
} from 'images';

import ConnectButton from 'components/connect-btn';

import {connect} from 'react-redux';
import {set_section} from 'redux/actions/navbarActions';

import './navbar.scss';

const Navbar = props => {

    const [scroll, setSscroll] = useState(0);

    useEffect(
        () => {



            window.addEventListener('scroll', e => {
                setSscroll(window.scrollY);
            })
        },
        []
    );

    const onBurgerClicked= e => {
        e.preventDefault();

        const target = e.currentTarget.dataset.target;
        const $target = document.getElementById(target);
        e.currentTarget.classList.toggle('is-active');
        $target.classList.toggle('is-active');
    }

    const onBurgerIClicked = e => {
        // e.preventDefault();
        const navbar = document.getElementById("navbar");
        navbar.classList.toggle('is-active');
        const navbarBurger = document.getElementById("navbar-burger");
        navbarBurger.classList.toggle('is-active');
    }
    console.log(window.scrollY);

    return(
        <nav class={`navbar is-fixed-top ${window.scrollY > 0 ? 'has-background-dark' : 'has-background-black'}`} role="navigation" aria-label="main navigation">
            <div className="container">
                <div class="navbar-brand">
                    <a class="navbar-item" href="">
                      <img src={logo_white} alt="" width="64px" height="60px"/>
                    </a>

                    <a  id="navbar-burger" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar" onClick={onBurgerClicked}>
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbar" class="navbar-menu">
                <div class="navbar-start">
                    <a className="has-text-white navbar-item has-text-centered-mobile" onClick={e => {props.set_section("HOME"); onBurgerIClicked(e)}}>
                        Home
                    </a>

                    <a className="has-text-white navbar-item has-text-centered-mobile" onClick={e => {props.set_section("FAQ"); onBurgerIClicked(e)}}>
                        FAQ
                    </a>

                    <a className="has-text-white navbar-item has-text-centered-mobile" onClick={e => {props.set_section("ROADMAP"); onBurgerIClicked(e)}}>
                        Roadmap
                    </a>

                    <a className="has-text-white navbar-item has-text-centered-mobile" onClick={ e => {props.set_section("TEAM"); onBurgerIClicked(e)}}>
                        Team
                    </a>


                </div>

                <div class="navbar-end">
                    <div class="navbar-item has-text-centered-mobile">
                        <a class="is-size-4 " href="https://twitter.com/TheRedApeFamily" target="_blank" onClick={onBurgerIClicked}>
                            <span className="icon has-text-white" >
                                <i class="fab fa-twitter"></i>
                            </span>
                        </a>
                    </div>
                    <div class="navbar-item has-text-centered-mobile">
                        <a class="is-size-4 " href="https://www.youtube.com/channel/UCLCsACZQEeKOzjfbK2kIo9A" target="_blank" onClick={onBurgerIClicked}>
                            <span className="icon has-text-white">
                                <i class="fab fa-instagram"></i>
                            </span>
                        </a>
                    </div>
                    <div class="navbar-item has-text-centered-mobile">
                        <a class="is-size-4 " href="https://discord.gg/76n76gXSTg" target="_blank" onClick={onBurgerIClicked}>
                            <span className="icon has-text-white">
                                <i class="fab fa-discord"></i>
                            </span>
                        </a>
                    </div>
                    <div class="navbar-item has-text-centered-mobile">
                        <a class="is-size-4 " href="https://discord.gg/76n76gXSTg" target="_blank" onClick={onBurgerIClicked}>
                            <span className="icon has-text-white">
                                <i class="fab fa-telegram-plane"></i>
                            </span>
                        </a>
                    </div>


                    <div className="navbar-item has-text-centered-mobile">
                        <ConnectButton/>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    );
}

export default connect(
    null,
    {
        set_section
    }
)(Navbar);
