const styles = theme => {
  return {
    root: {
      minHeight: "100vh",
      maxHeight: "100vh",
      paddingLeft: "10%",
      paddingRight: "10%",
      color: "#5d6d7e"
    },
    body: {
      paddingTop: "2%",
      paddingLeft: "2%",
      textAlign: "start"
    },
    gridList: {
      paddingTop: "2%"
    },
    emptyText: {
      marginTop: theme.spacing(4)
    }
  };
};

export default styles;
