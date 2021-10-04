import {useEffect, useRef} from 'react';

import {connect} from 'react-redux';
import {set_section} from 'redux/actions/navbarActions';

import roadmapData from './roadmap-data';
import teamData from '../team-data';
import {
    logo_white,
    bat
 } from 'images';


import ReactHtml from 'raw-html-react';


const HomePage = props => {

    const homeSection = useRef(null);
    const faqSection = useRef(null);
    const roadMapSection = useRef(null);
    const teamSection = useRef(null);

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
            <section className="hero is-dark is-large" ref={homeSection} >
                <div className="hero-body bg-gradient">
                    <div className="container has-text-centered">


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




                    </div>
                </div>
            </section>

            <section className="py-6 has-background-black">
                <div className="container has-text-centered">

                    <div className="has-text-centered" style={{width: '100%', display: 'grid', placeItems: 'center'}}>
                        <div style={{width: '120px'}}>
                            <figure className="image is-square" >
                                <img src={bat} alt=""/>
                            </figure>
                        </div>
                    </div>
                    <br/>
                    <button className="button is-cyellow has-text-black is-size-5 is-rounded"><strong>MINT</strong></button>
                    <br/>
                    <br/>
                    <div className="has-text-centered" style={{width: '100%', display: 'grid', placeItems: 'center'}}>
                        <div style={{width: '230px'}}>
                            <div className="has-background-dark is-size-7 has-text-white">
                                ENTER THE AMOUNT OF MINT PASSES YOU WANT TO MINT
                            </div>
                        </div>
                    </div>
                    <br/>
                    <h1 className="title has-text-white is-5 mb-3">YOU CAN MINT A MAXIMUM OF 100 MINT PASSES PER WALLET</h1>
                    <h1 className="title has-text-white is-5 mb-3">PLEASE USE YOUR COMPUTER ONLY TO MINT FROM THE WEBSITE</h1>
                    <h1 className="title has-text-white is-5 mb-3">SUPPORTED WALLETS: METAMASK</h1>

                </div>
            </section>

            <section className="py-6 has-background-dark">
                <div className="container has-text-centered">
                    <h1 className="title has-text-white is-size-3">WHAT IS BIG TOYS?</h1>
                    <br/>
                    <div className="has-background-dark is-size-5 has-text-white">
                        BIG TOYS IS A PROJECT THAT BRINGS YOU THE MOST <br/>
                        INCREDIBLE VEHICULES A HUMAN MIND CAN EVER IMAGINE.
                    </div>
                    <br/>
                    <div className="has-background-dark is-size-5 has-text-white">
                        IN PHASE 1.0, BIG TOYS IS BRINGING THE FAMOUS JUSTICE MOBILE TO LIFE!
                    </div>
                    <br/>
                    <div className="has-background-dark is-size-5 has-text-white">
                        10000 GENERATIVE JUSTICE MOBILE CARS WITH OVER 170 HAND-DRAWN <br/> FEATURES WILL BE AVAILABLE TO MINT… AND ONE LUCKY WINNER WILL TAKE <br/> THE IRL JUSTICE MOBILE HOME!
                    </div>
                    <br/>
                    <button className="button is-cpurple has-text-white is-size-5 is-rounded"><strong>JOINT DISCORD</strong></button>

                </div>
            </section>

            <section className="py-6 has-background-black" ref={roadMapSection}>
                <div className="container has-text-centered">

                    <h1 className="title has-text-white is-size-3">ROADMAP AND TIMELINE</h1>
                    <br/>

                    <ul>
                        {
                            roadmapData.map( (content, i) =>
                                <li className=" mb-5" key={i}>
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
                <div className="container has-text-centered">

                <h1 className="title has-text-white is-size-3">MEET THE TEAM</h1>
                <br/>

                <div className="columns px-3 is-variable is-8">
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
