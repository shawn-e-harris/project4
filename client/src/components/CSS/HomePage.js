import React from 'react'
import { Parallax } from "react-parallax"
import {Link} from "react-router-dom"
import Navbar from "./navbar"
// import Sticky from "../CSS/sticky"

// const image1 =
//     "https://images.unsplash.com/photo-1511406361295-0a1ff814c0ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
// const image2 =
//     "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
// const image3 =
//     "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const imageHP =
    "https://media1.tenor.com/images/001c41aa841b8d348247b229a961e9a4/tenor.gif?itemid=13946061";

const styles = {
    fontFamily: "sans-serif",
    // textAlign: "center"
};

const insideStyles = {
    textAlign: "center",
    color: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontSize: "30pt"
};

const bottomStyles = {
    color: "black",
    textAlign: "center",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontSize: "30pt"
};

export default function HomePage() {
    return (
        
        <div style={styles}>
            <Navbar/>
        <br/>
        {/* <Link style={userStyles} to="/user" className="users">Users</Link> */}
            {/* <h1>| | |</h1> */}
            {/* <Parallax bgImage={image3} blur={{ min: -1, max: 3 }}>
          <div style={{ height: 500 }}>
          <div style={insideStyles}>Dynamic Blur</div>
          </div>
          </Parallax>
          <h1>| | |</h1>
          <Parallax bgImage={image2} strength={-100}>
          <div style={{ height: 500 }}>
          <div style={insideStyles}>Reverse direction</div>
          </div>
        </Parallax> */}
            {/* <h1>| | |</h1> */}
            <Parallax
                bgImage={imageHP}
                strength={500}
                blur={{ min: -1, max: 3 }}
                renderLayer={percentage => (
                    <div>
                        <div
                            style={{
                                position: "absolute",
                                background: `rgba(88, 88, 88, ${percentage * 1})`,
                                left: "50%",
                                top: "50%",
                                borderRadius: "50%",
                                transform: "translate(-50%,-50%)",
                                width: percentage * 500,
                                height: percentage * 500
                            }}
                        />
                    </div>
                )}
            >
                <div style={{ height: 500 }}>
                    <div style={insideStyles}>Moments For Life</div>
                </div>
            </Parallax>
            {/* <StickyText/> */}
            <Parallax strength={500}>
                <div style={{ height: 500 }}>
                    <div style={bottomStyles}>Everybody Dies, But Not Everybody Lives</div>
                </div>
            </Parallax>
            {/* <Sticky/> */}
            {/* <div style={{ height: 500 }} /> */}
            {/* <h2>{"\u2728"}</h2> */}
        </div>

    )
}