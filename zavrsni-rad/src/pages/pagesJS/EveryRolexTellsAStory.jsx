import React from "react";
import WatchesVideo from "../../components/menwatchesfolder/menwatchesJS/WatchesVideo";
import PersonWatchCard from "../../components/rolexwatchfolder/componentsJS/PersonWatchCard";
import "../pagesCSS/EveryRolexTellsAStory.css";
import Footer from "../../components/rolexwatchfolder/componentsJS/Footer.jsx";

const EveryRolexTellsAStory = () => {

    const [rolexStory] = React.useState("http://rolexwebsite.com/every-rolex-tells-a-story-cover.mp4");
    const [person] = React.useState("http://rolexwebsite.com/ertas-hub-roger-federer_rfederer_16tl_0569.webp");
    return(
        <div className="rolex__story">
            <WatchesVideo videoLink={rolexStory} text={"EVERY ROLEX TELLS A STORY"}/>
            <div className="person__cards_wrapper">
                <PersonWatchCard personImage={person}/>
                <PersonWatchCard personImage={person}/>
                <PersonWatchCard personImage={person}/>
                <PersonWatchCard personImage={person}/>
                <PersonWatchCard personImage={person}/>
                <PersonWatchCard personImage={person}/>
            </div>
            <Footer/>
        </div>
    );
}
export default EveryRolexTellsAStory;