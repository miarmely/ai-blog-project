import { OneDash } from "../miar/miar-dash/OneDash";
import "./LatestNews.css";
import { SocialMediaIconBox, SocialMediaIcon } from "../partner/SocialMediaIcon";

export default function LatestNews() {
    return (
        <div id="latest-news-navbar">
            <div className='nav-left'>
                <h2>LATEST NEWS</h2>
                <h4>Incredible events happened on AI side. Incredible events Incredible events Incredible Incredible events happened on AI side. events Incredible events Incredible Incredible events Incredible events Incredible Incredible...</h4>
            </div>

            <div className='nav-right'>
                <div className="info-text">
                    <span>Follow Us</span>
                    <OneDash width="30px" />
                </div>

                <SocialMediaIconBox
                    size="25px"
                    iconColor="white"
                >
                    <SocialMediaIcon name="instagram" />
                    <SocialMediaIcon name="x" />
                    <SocialMediaIcon name="facebook" />
                    <SocialMediaIcon name="youtube" />
                    <SocialMediaIcon name="linkedin" />
                    <SocialMediaIcon name="pinterest" />
                </SocialMediaIconBox>
            </div>
        </div >
    );
}