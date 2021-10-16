import React from "react"
import { useIntl } from "gatsby-plugin-react-intl"

import { IndustriesBox } from "./IndustriesStyles"
import medicine from "../../../../assets/medicine.svg"
import farmacology from "../../../../assets/farmacology.svg"
import foodIndustry from "../../../../assets/food-industry.svg"
import laboratories from "../../../../assets/laboratories.svg"
import engineering from "../../../../assets/engineering.svg"

function Industries() {
  const intl = useIntl()
  return (
    <IndustriesBox>
      <div>
        <img src={medicine} alt={intl.formatMessage({ id: "medicine" })}></img>
        <p>{intl.formatMessage({ id: "medicine" })}</p>
      </div>
      <div>
        <img
          src={farmacology}
          alt={intl.formatMessage({ id: "farmacology" })}
        ></img>
        <p>{intl.formatMessage({ id: "farmacology" })}</p>
      </div>
      <div>
        <img
          src={foodIndustry}
          alt={intl.formatMessage({ id: "food-industry" })}
        ></img>
        <p>{intl.formatMessage({ id: "food-industry" })}</p>
      </div>
      <div>
        <img
          src={laboratories}
          alt={intl.formatMessage({ id: "laboratories" })}
        ></img>
        <p>{intl.formatMessage({ id: "laboratories" })}</p>
      </div>
      <div>
        <img
          src={engineering}
          alt={intl.formatMessage({ id: "engineering" })}
        ></img>
        <p>{intl.formatMessage({ id: "engineering" })}</p>
      </div>
    </IndustriesBox>
  )
}

export default Industries
