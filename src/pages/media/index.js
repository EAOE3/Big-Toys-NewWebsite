
const Media = props => {
    return(
        <section className="py-6" style={{position: 'relative', background: 'rgb(0,0,0)'}}>
            <div className="container" style={{display: 'grid', placeItems: 'center'}}>

                <div style={{width: '80%'}}>
                    <figure className="image is-16by9">
                        <iframe class="has-ratio" width="640" height="360"  src="https://www.youtube.com/embed/JLbGsN7vCt8?autoplay=0&mute=0&enablejsapi=1&loop=1&controls=1&playlist=JLbGsN7vCt8&vq=hd2160&rel=0&modestbranding=1" frameborder="0" allowfullscreen></iframe>
                    </figure>
                </div>

            </div>
        </section>
    );
}

export default Media;
