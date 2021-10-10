import {useEffect, useRef, useState} from 'react';

import {connect} from 'react-redux';
import {set_section} from 'redux/actions/navbarActions';


import Mint from './mint-section';

import roadmapData from './roadmap-data';
import teamData from '../team-data';
import {
    logo_white,
    mintpass
 } from 'images';

import ReactHtml from 'raw-html-react';

import './home.scss';



const HomePage = props => {

    const homeSection = useRef(null);
    const faqSection = useRef(null);
    const roadMapSection = useRef(null);
    const teamSection = useRef(null);

    useEffect(
        () => {
            const target_date = Date.parse('Oct 19 2021 14:00:00 GMT-0500');
            setInterval(() => {
                const current_date = Date.parse( new Date() );
                var distance = target_date - current_date;

                // Time calculations for days, hours, minutes and seconds
              const days = Math.floor(distance / (1000 * 60 * 60 * 24));
              const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              const seconds = Math.floor((distance % (1000 * 60)) / 1000);

              setTime({
                  days,
                  hours,
                  minutes,
                  seconds
              });

            }, 1000);
        }, []
    );

    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });



    const {navbarReducer} = props;

    useEffect(
        () => {
            let y = 0;
            switch (navbarReducer.section) {
                case "HOME":
                    window.scrollTo(0, 0);
                    break;

                case "FAQ":
                    y = faqSection.current.scrollIntoView()
                    window.scrollBy(0, -45);
                    break;

                case "ROADMAP":
                    y = roadMapSection.current.scrollIntoView()
                    window.scrollBy(0, -45);
                    break;

                case "TEAM":
                    y = teamSection.current.scrollIntoView()
                    window.scrollBy(0, -45);
                    break;



                default: break;

            }
            // console.log(y);
        }, [navbarReducer.section]
    );

    return(
        <div className="home">
            <section className="hero is-dark is-medium" ref={homeSection} style={{position: 'relative'}}>
                <div className="background-video ias-flex">




                    <figure className="image is-16by9">
                        <iframe class="has-ratio" width="100%" height="100%"  src="https://www.youtube.com/embed/_0bbi8UAfks?autoplay=1&mute=1&enablejsapi=1&loop=1&controls=0&playlist=_0bbi8UAfks&vq=hd720&rel=0&modestbranding=1" frameborder="0" allowfullscreen></iframe>
                    </figure>
                    {/*
                        small screens
                            <iframe class="has-ratio" width="100%" height="100%"  src="https://www.youtube.com/embed/_0bbi8UAfks?autoplay=1&mute=1&enablejsapi=1&loop=1&controls=1&playlist=_0bbi8UAfks&vq=hd720&rel=0&modestbranding=1" frameborder="0" allowfullscreen></iframe>


                      */}
                </div>
                <div className="invisible-panel">
                </div>
                <div className="hero-body bg-gradient">
                    <div className="container has-text-centered px-3">


                        <div className="has-text-centered mb-5" style={{width: '100%', display: 'grid', placeItems: 'center'}}>
                            <div style={{width: '120px'}}>
                                <figure className="image is-square" >
                                    <img src={logo_white} alt=""/>
                                </figure>
                            </div>
                        </div>


                        <h1 className="title has-text-white mb-0">BIG TOYS</h1>
                        <h1 className="title has-text-white">GET SPOILED LIKE NEVER BEFORE</h1>



                        <h1 className="subtitle has-text-white mt-3">
                            WE ARE THE NFT THAT KEEPS ON GIVING, <br/>
                            OUR UTILITY IS OUR COMMUNITY.
                        </h1>

                        <a href="https://discord.gg/42QAfwhu" target="_blank" className="button is-cpurple has-text-white is-size-5 is-rounded"><strong>JOIN DISCORD</strong></a>

                        <br/><br/>
                        <h1 className="subtitle has-text-white mt-3">
                            MINT THIS PASS FOR 0.02 ETH FOR A CHANCE TO WIN THIS PRICELESS CAR
                        </h1>

                        <h1 className="subtitle has-text-white mt-3">
                            {time.days} DAYS {time.hours} HOURS {time.minutes} MINUTES {time.seconds} SECONDS
                        </h1>

                    </div>
                </div>
            </section>




            <section className="py-6 has-background-black is-hidden" style={{position: 'relative'}}>
                <Mint/>
            </section>

            <section className="py-6 has-background-dark">
                <div className="container has-text-centered px-3">
                    <div className="columns">
                        <div className="column">
                            <h1 className="title has-text-white is-size-3">WHAT IS BIG TOYS?</h1>
                            <br/>
                            <div className="has-background-dark is-size-5 has-text-white">
                                BIG TOYS IS A PROJECT THAT BRINGS YOU THE MOST <br/>
                                INCREDIBLE VEHICLES A HUMAN MIND CAN EVER IMAGINE.
                            </div>
                            <br/>
                            <div className="has-background-dark is-size-5 has-text-white">
                                IN PHASE 1.0, BIG TOYS IS BRINGING THE FAMOUS JUSTICE MOBILE TO LIFE AND GIVING IT AWAY TO A LUCKY WINNER!
                            </div>
                            <br/>
                            <div className="has-background-dark is-size-5 has-text-white">
                                10000 GENERATIVE JUSTICE MOBILE CARS WITH OVER 170 HAND-DRAWN FEATURES WILL BE AVAILABLE TO MINT… AND ONE LUCKY WINNER WILL TAKE THE IN REAL LIFE JUSTICE MOBILE HOME!
                            </div>
                        </div>
                        <div className="column" style={{display: 'grid', placeItems: 'center'}}>
                            <div style={{width: '350px'}}>
                                <figure className="image is-squaer" >
                                    <img src={mintpass} alt="" style={{borderRadius: '10px'}}/>
                                </figure>
                            </div>
                        </div>
                    </div>

                    <br/>
                </div>
            </section>

            <section className="py-6 has-background-black" ref={roadMapSection}>
                <div className="container has-text-centered px-3">

                    <h1 className="title has-text-white is-size-3">ROADMAP AND TIMELINE</h1>
                    <br/>

                    <ul>
                        {
                            roadmapData.map( (content, i) =>
                                <li className=" mb-6" key={i}>
                                    <h1 className="title has-text-white is-size-4 mb-1">({i+1})</h1>
                                    <h1 className="title has-text-white is-size-4">{content.title}</h1>
                                    <ReactHtml html={content.body}/>
                                </li>
                            )
                        }
                    </ul>

                </div>
            </section>

            <section className="py-6 has-background-dark" ref={teamSection}>
                <div className="container has-text-centered px-3">

                <h1 className="title has-text-white is-size-3">MEET THE TEAM</h1>
                <br/>

                <div className="columns px-3">
                    {
                        teamData.map( (t, i) =>
                            <div className="column has-text-centered" key={i}>
                                <div className="has-text-centered" style={{width: '100%', display: 'grid', placeItems: 'center'}}>
                                    <div style={{width: '180px'}}>
                                        <figure className='image is-square'>
                                            <img className="is-rounded bwToColorImg" src={t.imageurl} alt="" style={{boxShadow: '0px 0px 1px 5px #585858, 3px 3px 1px 5px rgba(0, 0, 0, 0.5)'}}/>
                                        </figure>
                                    </div>
                                </div>

                                <br/>

                                <div className="" style={{height:"100px"}}>
                                    <h1 className="title has-text-white is-5 has-text-centered">{t.name}</h1>
                                    <h1 className="subtitle has-text-white is-6 has-text-centered">{t.charge}</h1>
                                </div>
                                <h1 className="subtitle has-text-white is-5 has-text-centered"><ReactHtml html={t.link}/></h1>
                            </div>
                        )
                    }
                </div>

                </div>
            </section>







        </div>
    );
}

const mapStateToProps = state => ({
    navbarReducer: state.navbarReducer
});

export default connect(
    mapStateToProps,
    {
        set_section
    }
)(HomePage);
