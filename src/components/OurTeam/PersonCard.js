import React, { useEffect } from "react"
//animations
import Aos from "aos"
import "aos/dist/aos.css"
//styled components
import { Card } from "./PersonStyles"

function PersonCard({ photo, fullName, title, description }) {
  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])
  return (
    <Card data-aos="slide-up">
      <div style={{ backgroundImage: `url(${photo})` }}></div>
      <div>
        <p>{fullName}</p>
        <h4>{title}</h4>
      </div>
      <p
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      ></p>
    </Card>
  )
}

export default PersonCard
