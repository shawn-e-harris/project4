import React from 'react'
import { Parallax } from "react-parallax"

const imageBottom = "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80";


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
      <div style={{ height: 50 }}></div>
      <Parallax bgImage={imageBottom} strength={500}>
        <div style={{ height: 500 }}>
          <div style={bottomStyles}>CARPE DIAM</div>
        </div>
      </Parallax>
      <div style={{ height: 100 }}>
      </div>
    </div>
  )
}
