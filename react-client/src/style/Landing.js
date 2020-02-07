import backdrop from "../assets/images/backdrop0.jpg";

const styles = theme => {
  return {
    root: {
      minHeight: "100vh",
      maxHeight: "100vh",
      paddingLeft: "10%",
      paddingRight: "10%",
      color: "#5d6d7e"
    },
    backdrop: {
      backgroundImage: `url(${backdrop})`,
      backgroundSize: "100% 100%"
    },
    landingtext: {
      color: "#5d6d7e",
      fontWeight: "900",
      width: "50%",
      paddingTop: "10%",
      paddingLeft: "2%",
      textAlign: "start"
    }
  };
};

export default styles;
