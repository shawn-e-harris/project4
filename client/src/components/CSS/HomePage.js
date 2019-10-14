import React from 'react'
import { Parallax } from "react-parallax"
import { Link } from "react-router-dom"
import Navbar from "./navbar"
// import Sticky from "../CSS/sticky"

const imageHP =
    "https://media1.tenor.com/images/001c41aa841b8d348247b229a961e9a4/tenor.gif?itemid=13946061";

const styles = {
    fontFamily: "sans-serif",
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
            <Navbar />
            <br />
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
            <Parallax strength={500}>
                <div style={{ height: 500 }}>
                    <div style={bottomStyles}>Everybody Dies, But Not Everybody Lives</div>
                </div>
            </Parallax>
        </div>

    )
}