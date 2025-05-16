import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <RotatingLines
      strokeColor="red"
      strokeWidth="5"
      
      animationDuration=""
      width="1000"
      visible={true}
    />
  )
}

export default Loader;
