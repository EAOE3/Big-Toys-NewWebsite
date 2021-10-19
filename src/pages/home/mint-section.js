import {useEffect, useState} from 'react';
import {bat} from 'images';

import {connect} from 'react-redux';
import {request_connection, request_change_network, check_connected_to_operating_network} from 'redux/actions/walletActions';
import {start_minting_tx} from 'redux/actions/txActions';

import {mintpass} from 'images';

import {useFormik} from 'formik';
import * as Yup from 'yup';

const Mint = props => {

    const erc_contract = props.web3Reducer.contracts['ERC_CONTRACT'];

    const [webData, setWebData] = useState({
        userMints: 0,
        leftNFT: 0
    });

    const [validationSchema, setValidationSchema] = useState(
        Yup.object().shape({
            mintQuantity: Yup.number().min(1).max(1).required('required')
        })
    );

    const {wallet} = props;
    // console.log(webData);


    const target_date = Date.parse('Oct 19 2021 14:00:00 GMT-0500');
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
                    mintsLeft: webData.totalAllowedMintsPerUser - webData.userMints
                }
                setValidationSchema(
                    Yup.object().shape({
                        mintQuantity: Yup.number().min(1).max(webData.mintsLeft).required('required')
                    })
                );

                // console.log(webData);
            } catch (e) {
                console.log('ERROR CONSULTING DATA', e);
            }finally{
                setWebData(webData);
            }
        }
        else{
            setWebData({
                userMints: 0,
                leftNFT: 0
            });
        }
    }

    useEffect(
        () => {

            getWebData();
        }, []
    );




    const formik = useFormik({
        initialValues: {
            mintQuantity: 1,
        },
        validationSchema: validationSchema,
        onSubmit: async values => {

            await props.start_minting_tx({
                value: Number(webData.price) * Number(values.mintQuantity),
                amount: values.mintQuantity
            });
        },
    });

    useEffect(
        () => {
            getWebData();
            formik.setFieldValue("mintQuantity", 1);
        }, [props.txReducer.MINT_TX.success]
    );

    return(
        <div className="container has-text-centered px-3">




            <div className="has-text-centered" style={{width: '100%', display: 'grid', placeItems: 'center'}}>
                <div style={{width: '120px'}}>
                    <figure className="image is-square" >
                        <img src={bat} alt=""/>
                    </figure>
                </div>
            </div>
            <br/>
            <form onSubmit={formik.handleSubmit}>
                {
                    (target_date - current_date > 0) ?
                    // false ?
                        <button className="button is-cyellow has-text-black is-size-5 is-rounded" type="button" disabled><strong>MINT ON OCT 19</strong></button>
                    :
                        wallet && wallet.isConnected ?
                            wallet.connectedToOperatingNetwork ?
                                <div>
                                    {

                                    }
                                    <h1 className="subtitle has-text-white is-6 mb-4">{webData.userMints} NFT's minted</h1>

                                    <h1 className="subtitle has-text-white is-6 mb-4">{webData.mintsLeft} Mints left for this wallet </h1>
                                    <h1 className="subtitle has-text-white is-7 mb-4">{webData.leftNFT} NFT's left </h1>

                                    <button className={`button is-cyellow has-text-black is-size-5 is-rounded  ${props.txReducer.MINT_TX.loading ? 'is-loading is-warning' : ''}`} type="submit"><strong>MINT</strong></button>
                                </div>
                            :
                                <button className="button is-cyellow has-text-black is-size-5 is-rounded" type="button" onClick={e => props.request_change_network(1)}><strong>Change to ETH mainnet</strong></button>
                        :
                            <button className="button is-cyellow has-text-black is-size-5 is-rounded" type="button" onClick={e => props.request_connection()}><strong>Connect</strong></button>
                }

                <br/>
                <br/>
                {
                    (target_date - current_date > 0) ?
                    // false ?
                        null
                    :

                    <div className="has-text-centered" style={{width: '100%', display: 'grid', placeItems: 'center'}}>
                        <div style={{width: '300px'}}>
                            <div class="field">
                                <div class="control" style={{height: '80px'}}>
                                    <input class="input has-background-dark has-text-white has-text-centered" type="number" placeholder="ENTER THE NUMBER TO MINT" name="mintQuantity" value={formik.values.mintQuantity} onChange={formik.handleChange}/>
                                    <div className="help has-text-white">
                                    {
                                        formik.errors.mintQuantity
                                    }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </form>

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
        check_connected_to_operating_network,
        start_minting_tx
    }
)(Mint);
