import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Back = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#fff",
        fillOpacity: 1,
      }}
      d="m9.688 12.004 8.98-8.977c.246-.246.383-.578.383-.93a1.3 1.3 0 0 0-.383-.925l-.79-.79A1.3 1.3 0 0 0 16.954 0c-.351 0-.683.137-.93.383L5.332 11.074a1.309 1.309 0 0 0-.383.93c0 .355.137.684.383.934l10.68 10.68c.25.245.578.382.93.382.351 0 .68-.137.93-.383l.784-.789a1.313 1.313 0 0 0 0-1.855Zm0 0"
    />
  </Svg>
)


export default Back
