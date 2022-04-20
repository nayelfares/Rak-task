import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Package = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} {...props}>
    <Path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#414751",
        fillOpacity: 1,
      }}
      d="M14.785 4.895 10.023.215.914 6.508l2.996 4.508ZM14.785 17.195 3.91 11.07.312 14.63l9.75 7.473Zm0 0"
    />
    <Path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#414751",
        fillOpacity: 1,
      }}
      d="m14.844 19.355-4.989 4.473-6.19-4.207.046 3.922 11.035 6.242 10.875-6.336v-3.515l-6.223 3.91Zm0 0"
    />
    <Path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#414751",
        fillOpacity: 1,
      }}
      d="m14.898 17.195 4.563 4.938 9.484-7.184-3.168-3.879ZM29.766 6.797 20.832.215l-5.934 4.68 10.88 6.12Zm0 0"
    />
  </Svg>
)

export default Package
