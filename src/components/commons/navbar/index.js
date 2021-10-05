import {useState, useEffect} from 'react';
import {
    logo_white_500
} from 'images';

import ConnectButton from 'components/connect-btn';

import {Link} from 'react-router-dom';

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


    return(
        <nav class={`navbar is-fixed-top ${window.scrollY > 0 ? 'has-background-dark' : 'has-background-black'}`} role="navigation" aria-label="main navigation">
            <div className="container">
                <div class="navbar-brand">
                    <a class="navbar-item" href="">
                      <img src={logo_white_500} alt="" width="64px" height="64px"/>
                    </a>

                    <a  id="navbar-burger" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar" onClick={onBurgerClicked}>
                      <span  className="has-text-white" aria-hidden="true"></span>
                      <span  className="has-text-white" aria-hidden="true"></span>
                      <span  className="has-text-white" aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbar" class="navbar-menu">
                <div class="navbar-start">
                    <Link className="has-text-white navbar-item has-text-centered-mobile" onClick={e => {props.set_section("HOME"); onBurgerIClicked(e)}} to="/home">
                        Home
                    </Link>

                    {/* }<Link className="has-text-white navbar-item has-text-centered-mobile" to="/faq">
                        FAQ
                    </Link> */}

                    <Link className="has-text-white navbar-item has-text-centered-mobile" onClick={e => {props.set_section("ROADMAP"); onBurgerIClicked(e)}} to="/home">
                        Roadmap
                    </Link>

                    <Link className="has-text-white navbar-item has-text-centered-mobile" to="/team">
                        Team
                    </Link>


                </div>

                <div class="navbar-end">
                    <div class="navbar-item has-text-centered-mobile">
                        <a class="is-size-4 " href="https://twitter.com/bigtoysnft?s=21" target="_blank" onClick={onBurgerIClicked}>
                            <span className="icon has-text-white" >
                                <i class="fab fa-twitter"></i>
                            </span>
                        </a>
                    </div>
                    <div class="navbar-item has-text-centered-mobile">
                        <a class="is-size-4 " href="https://www.instagram.com/bigtoysnft/" target="_blank" onClick={onBurgerIClicked}>
                            <span className="icon has-text-white">
                                <i class="fab fa-instagram"></i>
                            </span>
                        </a>
                    </div>
                    <div class="navbar-item has-text-centered-mobile">
                        <a class="is-size-4 " href="https://discord.gg/42QAfwhu" target="_blank" onClick={onBurgerIClicked}>
                            <span className="icon has-text-white">
                                <i class="fab fa-discord"></i>
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
