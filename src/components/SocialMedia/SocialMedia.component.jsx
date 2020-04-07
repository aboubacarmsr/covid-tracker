import React from 'react'
import './SocialMedia.styles.scss'

const SocialMedia = () => {
    return ( 
        <div className="social-container">
            <ul className="social-icons">
                <li><a href="https://www.instagram.com/who/?hl=fr"><i className="fa fa-instagram"></i></a></li>
                <li><a href="https://twitter.com/hashtag/covid-19"><i className="fa fa-twitter"></i></a></li>
                <li><a href="https://www.youtube.com/results?search_query=covid+19"><i className="fa fa-youtube"></i></a></li>
                <li><a href="https://www.facebook.com/coronavirus_info/?page_source=search"><i className="fa fa-facebook"></i></a></li>
            </ul>
        </div>
     );
}
 
export default SocialMedia;