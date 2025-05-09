import React from 'react';
import './footer.css';
import FooterNavItem from '../components/FooterNavItem';

function Footer() {
    const usefulLinks = [
        'Home',
        'About us',
        'My List',
        'Terms of service',
        'Privacy policy',
    ];
    const locations = [
        'Nairobi',
        'Mombasa',
        'Kisumu',
        'Nakuru',
        'Eldoret',
    ];
    return (
        <footer id="footer" className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12 footer-info">
                            <a href="/" className="logo d-flex align-items-center">
                                <span>CINEMA</span>
                            </a>
                            <p>
                            Passionate web developer exploring React and APIs. I love creating sleek, user-friendly 
                            interfaces and learning new tech every day. Let’s build something amazing together!
                            </p>
                            <div className="social-links mt-3">
                                <a href="https://twitter.com" className="twitter" target="_blank" rel="noopener noreferrer">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                                <a href="https://facebook.com" className="facebook" target="_blank" rel="noopener noreferrer">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                                <a href="https://instagram.com" className="instagram" target="_blank" rel="noopener noreferrer">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                                <a href="https://youtube.com" className="youtube" target='_blank' rel="noopener noreferrer">
                                    <ion-icon name="logo-youtube"></ion-icon>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                {usefulLinks.map(link => (
                                    <FooterNavItem key={link} name={link} />
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Our Cinemas</h4>
                            <ul>
                                {locations.map(link => (
                                    <FooterNavItem key={link} name={link} />
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-3 col-12 footer-contact text-center text-md-start">
                            <h4>Contact Us</h4>
                            <p>
                                A108 KANU Street <br /> 
                                NAKURU 20100, <br />
                                KENYA<br />
                                <strong>Phone: </strong> +254 7951 60491<br />
                                <strong>Email: </strong> abelsifuna@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    <strong>
                        <span>ABEl^Cfuna Technology</span>
                    </strong>
                    . All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="https://github.com/Cfuna22">ABEl^Cfuna Technology</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;