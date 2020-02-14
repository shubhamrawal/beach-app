const styles = theme => {
  return {
    modal: {
      marginTop: "1%",
      // height: "fit-content",
      overflow: "scroll"
    },
    root: {
      // maxWidth: "75%",
      // margin: "0 auto",
      // outline: "0"
      display: "flex",
      outline: "0"
    },
    grid: {
      display: "flex",
      flexWrap: "none"
    },
    mainContent: {
      width: "75%",
      // backgroundColor: "white",
      margin: "0 auto",
      height: "fit-content"
    },
    image: {
      // maxHeight: "80vh",
      // width: "auto"
      width: "100%",
      height: "90vh"
      // display: "flex"
    },
    leftArrow: {
      width: "5%",
      height: "fit-content",
      textAlign: "center",
      position: "absolute",
      top: "45%"
    },
    rightArrow: {
      width: "5%",
      height: "fit-content",
      textAlign: "center",
      position: "absolute",
      top: "45%",
      right: "0"
    }
  };
};

export default styles;
