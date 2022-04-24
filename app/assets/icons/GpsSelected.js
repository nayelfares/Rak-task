import * as React from "react"
import Svg, { Path } from "react-native-svg"

const GpsSelected = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={32}
    viewBox="0 0 28 31"
    {...props}
  >
    <Path
      style={{
        stroke: "none",
        fillRule: "evenodd",
        fill: "#900DCC",
        fillOpacity: 1,
      }}
      d="M22.34 20.633c3.433 1.047 5.656 2.726 5.656 4.617C27.996 28.426 21.73 31 14 31S.004 28.426.004 25.25c0-1.938 2.336-3.648 5.898-4.691.13.191.262.382.395.57.277.394.566.781.863 1.16-2.496.652-4.098 1.656-4.098 2.773 0 1.965 4.844 3.555 10.825 3.555 5.976 0 10.82-1.59 10.82-3.555 0-1.046-1.387-1.992-3.59-2.64.434-.578.84-1.18 1.223-1.797Zm-3.742.683a18.138 18.138 0 0 1-4.004 3.22.578.578 0 0 1-.645.023c-2.117-1.301-4-2.934-5.57-4.832-2.031-2.477-3.305-5.22-3.746-7.872-.442-2.671-.028-5.25 1.34-7.347A9.198 9.198 0 0 1 8.05 2.27C9.988.777 12.203-.016 14.398 0a9.06 9.06 0 0 1 6.024 2.39 8.683 8.683 0 0 1 1.61 1.9c1.476 2.362 1.792 5.374 1.144 8.429a18.342 18.342 0 0 1-4.578 8.574ZM13.98 4.766c2.614 0 4.735 2.062 4.735 4.605 0 2.543-2.121 4.602-4.735 4.602-2.617 0-4.738-2.059-4.738-4.602 0-1.223.5-2.394 1.387-3.258a4.813 4.813 0 0 1 3.351-1.347Zm0 0"
    />
  </Svg>
)

export default GpsSelected
