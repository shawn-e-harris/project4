import React from 'react'
import { Parallax } from "react-parallax"

const imageBottom = "https://media2.giphy.com/media/8gN2JlDwtsdLW/giphy.gif";


const bottomStyles = {
  color: "black",
  textShadow: "1px 1px 5px white",
  textAlign: "center",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  fontSize: "30pt"
};

export default function Sticky() {
  return (
    <div>
      <Parallax bgImage={imageBottom} strength={500}>
                <div style={{ height: 500 }}>
                    <div style={bottomStyles}>Everybody Dies, But Not Everybody Lives</div>
                </div>
            </Parallax>
            <div style={{ height: 100 }}>
                </div>
    </div>
  )
}
