import React from "react";
import "../componentsCSS/YouMayAlsoLike.css";
import MenWatchCard from "../../menwatchesfolder/menwatchesJS/MenWatchCard";
import { useReducer,useState } from "react";
import { useEffect } from "react";


const initialState = {
    transfDesktop: `translateX(${50}%)`,
    transfMobile:`translateX(${100}%)`,
    displayBtnLeft: "hidden",
    displayBtnRight: "visible",
    bgColorLeftSpan: "green",
    bgColorRightSpan: "silver"
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'next':
            return {
                transfDesktop: `translateX(${-50}%)`,
                displayBtnRight: "hidden",
                displayBtnLeft: "visible",
                bgColorLeftSpan: "silver",
                bgColorRightSpan: "green"
            };

        case 'prev':
            return {
                transfDesktop: `translateX(${50}%)`,
                displayBtnRight: "visible",
                displayBtnLeft: "hidden",
                bgColorLeftSpan: "green",
                bgColorRightSpan: "silver"
            };
    }
}



const YouMayAlsoLike = ({ mayLikeWatches }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    
    const [isMobile, setIsMobile] = useState(window.innerWidth<=800)

    useEffect(() => {
        
    },[])

    useEffect(() =>{
        window.addEventListener("resize", function () {
            setIsMobile(window.innerWidth <= 800)
            state.transfMobile=`translateX(${100}%)`;
        })
    },[isMobile])

    return (
        <div className="may-like-wrapper">
            <h1 className="may-like">YOU MAY ALSO LIKE</h1>
            <div className="slider-div">
                
                <span className="btn-left" onClick={(e) => { e.preventDefault(); dispatch({ type: 'prev' }) }} style={{ visibility: state.displayBtnLeft }}>
                    <svg height="30" width="30">
                        <path d="m18.96 30-15.82-15 15.82-15 3.90 3.90-11.66 11.10 11.66 11.10z"></path>
                    </svg>
                </span>

                <div className="slider-wrapper" >
                    <div className="slider" style={{ transform: isMobile ?  state.transfMobile : state.transfDesktop}}>
                        {
                            mayLikeWatches.map((item, key) => (
                                <MenWatchCard key={key} watchModel={item.model} watchCardImage={item.imageWatchCard} watchHead={item.model} watchDesc={item.desc} />
                            ))
                        }
                    </div>
                </div>

                <span className="btn-right" onClick={(e) => { e.preventDefault(); dispatch({ type: 'next' }) }} style={{ visibility: state.displayBtnRight }}>
                    <svg height="30" width="30">
                        <path d="m10.04 0 15.82 15-15.82 15-3.90-3.90 11.66-11.10-11.66-11.10z"></path>
                    </svg>
                </span>
            </div>

            <div className="toogle-span">
                <span className="prev-span" onClick={(e) => { e.preventDefault(); dispatch({ type: 'prev' }) }} style={{ backgroundColor: state.bgColorLeftSpan }}></span>
                <span className="next-span" onClick={(e) => { e.preventDefault(); dispatch({ type: 'next' }) }} style={{ backgroundColor: state.bgColorRightSpan }}></span>    
            </div>
        </div>
    );
}
export default YouMayAlsoLike;