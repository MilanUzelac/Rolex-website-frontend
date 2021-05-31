import React, { useEffect } from "react";
import "../components/Header.css";
import "../components/index.css";
import DiscoverRolexCart from "../components/DiscoverRolexCart.js";
import Watchmaking from "../components/WatchMaking.js";
import UnderMeltingIce from "../components/UnderMeltingIce.js";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/rolexwatchfolder/componentsJS/Footer.jsx";
import WatchesVideo from "../components/menwatchesfolder/menwatchesJS/WatchesVideo.jsx";

const IndexPage = () => {

    useEffect(() => {
        AOS.init({
            duration: 700
        });
    });


    useEffect(() => {
    
        /*const fetchData = async () => {
            const result = await axios("http://rolexwebsite.com/api/watches/getImagesFrontPage");
            setData(result.data);

        };
        fetchData();*/
    }, []);



    const [frontImageUrl] = React.useState("http://rolexwebsite.com/api/watches/images/seavideo.mp4");
    const [frontPagePerpetualVid] = React.useState("http://rolexwebsite.com/api/watches/images/homepage-rolex-watchmaking-calibre.mp4");
    const [rolexHistory] = React.useState("http://rolexwebsite.com/api/watches/images/homepage-grid-history-1905-1919.jpg");
    const [rolexMentor] = React.useState("http://rolexwebsite.com/api/watches/images/homepage-rmp-dance-2020.jpg");
    const [underIce] = React.useState("http://rolexwebsite.com/api/watches/images/homepage-rolex-org-under-the-pole.jpg");
    
    return (
        <div className="homepage">
            {/* <Link to="/users">Show list of users</Link>*/}
            <WatchesVideo text={""} videoLink={frontImageUrl}/>
            

            {/* <div className="video-wrapper">
                <video className="video1" loop autoPlay muted>
                    <source src={frontImageUrl} type="video/mp4" />
                        Your browser does not support HTML5 video.
                </video>
            </div> */}
            <div className="about-rolex-watches" data-aos="fade-up" data-aos-once="false" >
                <p>ROLEX WATCHES ARE CRAFTED FROM THE FINEST RAW MATERIALS AND ASSEMBLED WITH<br />SCRUPULOUS ATTENTION TO DETAIL. EVERY COMPONENT IS DESIGNED, DEVELOPED AND <br />PRODUCED IN-HOUSE TO THE MOST EXACTING STANDARDS.  </p>
            </div>
{/* 
            <div className="special">
                {Object.values(data).map(item => (
                    <div className="imageWrapper">
                        <Card image={item.imageUrls[0]} model={item.model} material={item.material} />
                    </div>
                ))}
            </div> */}

            <Watchmaking videoWatchMaking={frontPagePerpetualVid} text1={"Watchmaking"} text2={"ROLEX PERPETUAL MOVEMENTS"} text3={"PRECISION, ROBUSTNESS, RELIABILITY"} />

            <div className="discover-rolex" data-aos="zoom-in" data-aos-once="false">
                <p>Discovering Rolex</p>
                <div className="discover-wrapper">
                    <DiscoverRolexCart image={rolexHistory} text="ROLEX HISTORY" text2="1905 - 1919 Early years" />
                    <DiscoverRolexCart image={rolexMentor} text="ROLEX MENTOR AND PROTEGE" text2="The programme on Rolex.org" />
                </div>
                <UnderMeltingIce imgUrl={underIce} text1={"UNDER THE MELTING ICE"} text2={"The expedition on Rolex.org"} />
            </div>
             <Footer />
         
        </div>
    );
}
export default IndexPage;