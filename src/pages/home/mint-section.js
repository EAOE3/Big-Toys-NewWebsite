import {useEffect, useState} from 'react';
import {bat} from 'images';

import {connect} from 'react-redux';
import {request_connection, request_change_network, check_connected_to_operating_network} from 'redux/actions/walletActions';

const Mint = props => {

    const erc_contract = props.web3Reducer.contracts['ERC_CONTRACT'];

    const [webData, setWebData] = useState(null);

    const {wallet} = props;



    const target_date = Date.parse('Oct 10 2021 14:00:00 GMT-0500');
    const current_date = Date.parse( new Date() );


    useEffect(
        () => {
            props.check_connected_to_operating_network();
        }, [props.wallet.networkId]
    );

    useEffect(
        () => {
            getWebData();
        }, [props.wallet.connectedToOperatingNetwork, props.wallet.currentAccount]
    );

    const getWebData = async () => {
        if(props.wallet.connectedToOperatingNetwork){
            let webData = null;
            try {
                webData = await erc_contract.methods.webData(props.wallet.currentAccount).call();
                webData = {
                    ...webData,
                    mintsLeft: webData.maxMint - webData.userMints
                }
                console.log(webData);
            } catch (e) {
                console.log('ERROR CONSULTING DATA', e);
            }finally{
                setWebData(webData);
            }
        }
        else{
            setWebData(null);
        }
    }

    useEffect(
        () => {

            getWebData();
        }, []
    );

    return(
        <div className="container has-text-centered px-3">

            <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                    <figure className="image is-16by9">
                        <iframe class="has-ratio" width="640" height="360"  src="https://www.youtube.com/embed/mKnynwKZoCY?autoplay=1&mute=0&enablejsapi=1&loop=0&controls=0&playlist=mKnynwKZoCY&vq=hd2160&rel=0&modestbranding=1" frameborder="0" allowfullscreen></iframe>
                    </figure>
                </div>
            </div>


            <div className="has-text-centered" style={{width: '100%', display: 'grid', placeItems: 'center'}}>
                <div style={{width: '120px'}}>
                    <figure className="image is-square" >
                        <img src={bat} alt=""/>
                    </figure>
                </div>
            </div>
            <br/>
            {
                (target_date - current_date > 0) ?
                    <button className="button is-cyellow has-text-black is-size-5 is-rounded" disabled><strong>MINT ON OCT 10</strong></button>
                :
                    wallet && wallet.isConnected ?
                        wallet.connectedToOperatingNetwork ?
                            <button className="button is-cyellow has-text-black is-size-5 is-rounded"><strong>MINT</strong></button>
                        :
                            <button className="button is-cyellow has-text-black is-size-5 is-rounded" onClick={e => props.request_change_network(4)}><strong>Change to ETH mainnet</strong></button>
                    :
                        <button className="button is-cyellow has-text-black is-size-5 is-rounded" onClick={e => props.request_connection()}><strong>Connect</strong></button>
            }

            <br/>
            <br/>
            {
                /*

                <div className="has-text-centered" style={{width: '100%', display: 'grid', placeItems: 'center'}}>
                    <div style={{width: '300px'}}>
                        <div class="field">
                            <div class="control">
                                <input class="input has-background-dark has-text-white has-text-centered" type="text" placeholder="ENTER THE NUMBER TO MINT"/>
                            </div>
                        </div>
                    </div>
                </div>

                */
            }

            <br/>
            <h1 className="title has-text-white is-6 mb-3">YOU CAN MINT A MAXIMUM OF 100 MINT PASSES PER WALLET</h1>
            <h1 className="title has-text-white is-6 mb-3">PLEASE USE YOUR COMPUTER ONLY TO MINT FROM THE WEBSITE</h1>
            <h1 className="title has-text-white is-6 mb-3">SUPPORTED WALLET: METAMASK</h1>

        </div>
    );
}

const mapStateToProps = state => ({
    wallet: state.walletReducer,
    web3Reducer: state.web3Reducer,
    txReducer: state.txReducer
});

export default connect(
    mapStateToProps,
    {
        request_connection,
        request_change_network,
        check_connected_to_operating_network
    }
)(Mint);
