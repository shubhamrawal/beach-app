const styles = theme => {
  return {
    modal: {
      display: "flex",
      marginTop: "10%",
      height: "fit-content",
      overflow: "scroll"
    },
    root: {
      backgroundColor: "white",
      width: "30%",
      margin: "0 auto",
      outline: "0",
      borderRadius: theme.spacing(2)
    },
    header: {
      textAlign: "center",
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      display: "flex",
      alignItems: "center"
    },
    title: {
      flex: 1
    },
    formInput: {
      borderRadius: "20px",
      paddingTop: "2%",
      width: "80%"
    },
    loadingTile: {
      textAlign: "center",
      marginTop: theme.spacing(1)
    },
    tile: {
      display: "flex",
      alignItems: "center",
      marginBottom: "2px"
    },
    tileImage: {
      border: "2px solid #ddd",
      borderRadius: theme.spacing(1),
      padding: "2px",
      marginLeft: theme.spacing(1),
      height: theme.spacing(5),
      width: theme.spacing(5),
      marginRight: theme.spacing(2)
    },
    spacer: {
      flex: 1
    },
    tileProgress: {
      marginRight: theme.spacing(2)
    },
    checkIcon: {
      color: "green",
      marginRight: theme.spacing(2)
    },
    action: {
      textAlign: "right",
      padding: theme.spacing(2)
    },
    submitButton: {
      margin: theme.spacing(1)
    }
  };
};

export default styles;
