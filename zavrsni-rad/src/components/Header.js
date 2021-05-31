import React, { useContext, useEffect, useReducer, useState } from "react";
import "../components/Header.css";
import "aos/dist/aos.css";
import Haeadroom from "react-headroom";
import HeaderChangeContext from "./rolexwatchfolder/componentsJS/HeaderChangeContext";
import { Link } from "react-router-dom";

const reducer = (state, action) => {
    switch (action.type) {
        case 'burger-open':
            return {
                navUlvisibility: "hidden",
                navUlOpacity: "0",
                transitionDur: "0.3s",
                burger3spanDisplay: "inline",
                burger1spanWidth: "38px",
                burger1spanMarginTop: "2px",
                burger1SpanPadding: "0px",
                burger1SpanTransform: "rotate(180deg)",
                burger1SpanTransition: "0.3s ease-in-out",
                burger2SpanTransition: "0.3s ease-in-out",
                burger2SpanTransform: "rotate(180deg)",
                burger2SpanMargin: "4px",
                burger2SpanWidth: "38px",
                burger2SpanPadding: "0px"
            };
        case 'burger-close':
            return {
                navUlvisibility: "visible",
                navUlOpacity: "0.9",
                navDisplay: "none",
                transitionDur: "0.3s",
                burger3spanDisplay: "none",
                burger3TransitionDur: "0.5s",
                burger1spanWidth: "40px",
                burger1SpanPadding: "0px",
                burger1spaMargin: "0px",
                burger1spanMarginTop: "10px",
                burger1SpanTransform: "rotate(40deg)",
                burger1SpanTransition: "0.3s ease-in-out",
                burger2SpanTransition: "0.3s ease-in-out",
                burger2SpanTransform: "rotate(-40deg)",
                burger2SpanMarginTop: "-7px",
                burger2SpanWidth: "40px",
                burger2SpanPadding: "0px"
            };
    }
}


const Header = () => {

    const [state, dispatch] = useReducer(reducer, 0)
    const [rolexLogo] = React.useState("http://rolexwebsite.com/api/watches/images/rolex-logo.svg");
    const [status, setStatus] = useState(false)
    const [currentUser,setCurrentUser] = useState("")
    const ToogleBurger = () => {
        if (status == false) {
            setStatus(true)
        } else {
            setStatus(false);
        }
    }


    const [isMobile, setIsMobile] = useState();
    window.addEventListener("resize", function () {
        setIsMobile(window.innerWidth <= 800)
    })
    const isDay = useContext(HeaderChangeContext);
    const [enter, setEnter] = useState(false);


    useEffect(() => {
        setIsMobile(window.innerWidth <= 800)
        setCurrentUser(localStorage.getItem("userName"))
    }, [])

    return (
        <Haeadroom style={{ zIndex: 10 }}>
            <div className="nav">
                <div className="burger" onClick={(e) => { e.preventDefault(); ToogleBurger(); status ? dispatch({ type: 'burger-open' }) : dispatch({ type: 'burger-close' }) }}>
                    <span className="burger-span-1" style={{ transitionDuration: state.transitionDur, width: state.burger1spanWidth, marginTop: state.burger1spanMarginTop, padding: state.burger1SpanPadding, transform: state.burger1SpanTransform, transition: state.burger1SpanTransition }}></span>
                    <span className="burger-span-2" style={{ transitionDuration: state.transitionDur, width: state.burger2SpanWidth, marginTop: state.burger2SpanMarginTop, padding: state.burger2SpanPadding, transform: state.burger2SpanTransform, transition: state.burger2SpanTransition }}></span>
                    <span className="burger-span-3" style={{ display: state.burger3spanDisplay, transitionDuration: state.burger3TransitionDur }}></span>
                </div>
                <ul className="nav-ul" style={{ display: status ? "flex" : state.navDisplay, visibility: isMobile ? state.navUlvisibility : "visible", opacity: isMobile ? state.navUlOpacity : "1", transitionDuration: isMobile ? state.transitionDur : "0s" }}>
                    <div className="nav-left">
                        <li style={{ color: !isDay ? "white" : "goldenrod" }}><Link to="/watches/man">MAN'S WATCHES</Link></li>
                        <li style={{ color: !isDay ? "white" : "goldenrod" }}><Link to="/watches/woman">WOMAN'S WATCHES</Link></li>
                        <li style={{ color: !isDay ? "white" : "goldenrod" }}><Link to="/worldofrolex">WORLD OF ROLEX</Link></li>
                    </div>
                    <div className="nav-center">
                        <Link to="/"><img className="img-logo" src={rolexLogo} alt="rolex-logo" style={{ zIndex: 10 }} /></Link>
                    </div>
                    <div className="nav-right" style={{ display: "flex-start" }}>
                        <li style={{ color: !isDay ? "white" : "goldenrod", order: isMobile ? 2 : 1, marginRight: "0px", paddingRight: "0px" }}> <Link to="/rolexstory">EVERY ROLEX TELLS A STORY</Link></li>
                        {(() => {
                            if (localStorage.getItem("role") != "USER" && localStorage.getItem("role")!="ADMIN") {
                                return (
                                    <li style={{ color: !isDay ? "white" : "goldenrod", order: isMobile ? 1 : 2 }}><Link to="/login">LOG IN</Link></li>
                                )
                            } else if (localStorage.getItem("role") === "ADMIN") {
                                return (
                                    <div style={{ display: "flex", justifyContent: "center", flexDirection: isMobile ? "column" : "row", order: isMobile ? 2 : 1 }}>
                                        <ul onMouseEnter={() => setEnter(true)} onMouseLeave={() => setEnter(false)} style={{ width: isMobile ? "100%" : "110px", padding: "0px" }}>
                                            <Link to="/admin"><li style={{ order: isMobile ? 1 : 2, color: !isDay ? "white" : "goldenrod" }}>{localStorage.getItem("userName")}</li></Link>
                                            <Link to="/"><li style={{ order: isMobile ? 1 : 2, display: enter || isMobile ? "block" : "none", color: !isDay ? "white" : "goldenrod" }} onClick={() =>  localStorage.clear()}>LOG OUT</li></Link>
                                        </ul>
                                    </div>
                                )
                            } else if (localStorage.getItem("role") === "USER") {
                                return (
                                    <div style={{ display: "flex", justifyContent: "center", flexDirection: isMobile ? "column" : "row", order: isMobile ? 2 : 1 }}>
                                        <ul className="userName__div" onMouseEnter={() => setEnter(true)} onMouseLeave={() => setEnter(false)} style={{ width: isMobile ? "100%" : "110px", padding: "0px", }}>
                                            <Link to="/user"><li style={{ order: isMobile ? 1 : 2}}>{localStorage.getItem("userName")}</li></Link>
                                            <Link to="/user/cart"><li style={{ order: isMobile ? 1 : 2, display: enter || isMobile ? "block" : "none"}}>CART</li></Link>
                                            <Link to="/"><li style={{ order: isMobile ? 1 : 2, display: enter || isMobile ? "block" : "none" ,marginBottom:"10px"}} onClick={() => localStorage.clear()}>LOG OUT</li></Link>
                                        </ul>
                                    </div>
                                )
                            }
                        })()}
                    </div>
                </ul>
            </div>
        </Haeadroom>
    );
}
export default Header;