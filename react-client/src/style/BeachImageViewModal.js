const styles = theme => {
  return {
    modal: {
      marginTop: theme.spacing(2),
      display: "flex",
      maxWidth: "80%",
      margin: "0 auto",
      overflow: "scroll"
    },
    root: {
      display: "flex",
      outline: "0"
    },
    left: {
      minWidth: "5%",
      maxWidth: "5%",
      height: "fit-content",
      marginTop: "45vh"
    },
    middle: {
      minWidth: "90%",
      maxWidth: "90%"
    },
    image: {
      height: "90%",
      width: "100%"
    },
    right: {
      minWidth: "5%",
      maxWidth: "5%",
      height: "fit-content",
      marginTop: "45vh"
    },
    navIcon: {
      color: theme.palette.primary.contrastText
    }

    // modal: {
    //   marginTop: "1%",
    //   // height: "fit-content",
    //   overflow: "scroll"
    // },
    // modalLeft: {
    //   backgroundColor: "red",
    //   width: "fit-content",
    //   height: "fit-content",
    //   position: "sticky"
    //   // justify: "center",
    //   // position: "absolute",
    //   // top: "45%"
    //   // marginTop: "45vh"
    // },
    // modalRight: {
    //   backgroundColor: "green",
    //   width: "fit-content",
    //   height: "fit-content",
    //   justify: "center",
    //   marginTop: "55vh",
    //   marginRight: "0 auto"
    // },
    // root: {
    //   // maxWidth: "75%",
    //   // margin: "0 auto",
    //   // outline: "0"
    //   display: "flex",
    //   outline: "0"
    // },
    // grid: {
    //   display: "flex",
    //   flexWrap: "none"
    // },
    // mainContent: {
    //   width: "75%",
    //   // backgroundColor: "white",
    //   margin: "0 auto",
    //   height: "fit-content"
    // },
    // image: {
    //   // maxHeight: "80vh",
    //   // width: "auto"
    //   width: "100%",
    //   height: "90vh"
    //   // display: "flex"
    // },
    // leftArrow: {
    //   width: "5%",
    //   height: "fit-content",
    //   textAlign: "center",
    //   position: "absolute",
    //   top: "45%"
    // },
    // rightArrow: {
    //   width: "5%",
    //   height: "fit-content",
    //   textAlign: "center",
    //   position: "absolute",
    //   top: "45%",
    //   right: "0"
    // }
  };
};

export default styles;
