const footer = props => {
    return(
        <footer class="footer has-background-black pb-6">
            <div class="container has-text-centered">

                <p>
                    <a href="https://twitter.com/bigtoysnft?s=21" target="_blank">
                        <span className="icon has-text-white is-size-4">
                            <i class="fab fa-twitter"></i>
                        </span>
                    </a>
                    &nbsp;&nbsp;
                    <a href="https://www.instagram.com/bigtoysnft/" target="_blank">
                        <span className="icon has-text-white is-size-4">
                            <i class="fab fa-instagram"></i>
                        </span>
                    </a>
                    &nbsp;&nbsp;
                    <a  href="https://discord.gg/CaJbjeWE" target="_blank">
                        <span className="icon has-text-white is-size-4">
                            <i class="fab fa-discord"></i>
                        </span>
                    </a>



                    <hr className="has-background-white"/>
                </p>
                <h1 className="has-text-white is-size-6">Copyright © 2021 BigToys All rights reserved</h1>
            </div>
        </footer>
    );
}

export default footer;
