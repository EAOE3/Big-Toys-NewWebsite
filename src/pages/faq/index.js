import faqData from './faq-data';

const Faq = props => {
    return(
        <div>
            <section className="py-6 has-background-black">
                <div className="container has-text-centered">

                    <h1 className="title has-text-white is-size-3">FAQ</h1>
                    <br/>

                    <ul>
                        {
                            faqData.map( (faq, i) =>
                                <li className=" mb-5" key={i}>
                                    <h1 className="title has-text-white is-size-4 mb-1">({i+1})</h1>
                                    <h1 className="title has-text-white is-size-4 mb-1">{faq.title}</h1>
                                    <div className=" has-text-white ">{faq.body}</div>
                                </li>
                            )
                        }
                    </ul>

                </div>
            </section>
        </div>
    );
}

export default Faq;
