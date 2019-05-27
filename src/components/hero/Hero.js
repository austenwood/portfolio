import React from "react"
import { Jumbotron } from "react-bootstrap"

//import custom styles
import "./hero.css"
import SocialRow from "../SocialRow/SocialRow"

const Hero = () => (
  <Jumbotron style={jumbo_styles} className="jumbo" fluid>
    <div className="jumbo_content">
      <h1>Austen Wood</h1>
      <br />
      <h3>
        I am a Computer Science major at California State University, Chico. My
        passion is software enginerring and machine learning.
      </h3>
      <p>Have something you'd like to discuss?</p>
      <p>
        Let's chat{" "}
        <a href="mailto:hi@austenwood.me">
          <span style={{ color: "blueviolet" }}>hi@austenwood.me</span>
        </a>
      </p>
    </div>
    <div>
      <SocialRow />
    </div>
  </Jumbotron>
)

const jumbo_styles = {
  backgroundColor: "#fff",
  paddingLeft: "1rem",
}

export default Hero
