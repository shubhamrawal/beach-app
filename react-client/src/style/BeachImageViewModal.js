const styles = theme => {
  return {
    modal: {
      marginTop: theme.spacing(2),
      display: "flex",
      maxWidth: "80%",
      margin: "0 auto"
    },
    root: {
      display: "flex",
      outline: "0",
      color: "#5d6d7e"
    },
    left: {
      minWidth: "5%",
      maxWidth: "5%",
      height: "fit-content",
      marginTop: "45vh"
    },
    middle: {
      minWidth: "90%",
      maxWidth: "90%",
      overflow: "scroll",
      backgroundColor: "white",
      borderRadius: theme.spacing(2)
    },
    image: {
      height: "90%",
      width: "100%"
    },
    beachTile: {
      margin: theme.spacing(1)
    },
    beachDesc: {
      textAlign: "justify"
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
  };
};

export default styles;
