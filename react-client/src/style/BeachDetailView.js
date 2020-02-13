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
      marginTop: theme.spacing(4),
      marginLeft: theme.spacing(3),
      textAlign: "start"
    },
    photoGrid: {
      marginTop: theme.spacing(4)
    },
    title: {
      display: "flex",
      alignItems: "center"
    },
    titleIcon: {
      color: "green",
      margin: theme.spacing(1)
    },
    titleButton: {
      margin: theme.spacing(1)
    },
    fileUpload: {
      display: "none"
    },
    gridList: {
      paddingTop: "2%"
    },
    gridListImage: {
      height: "100%",
      width: "100%"
    },
    emptyPhotoGrid: {
      marginTop: theme.spacing(4)
    },
    memories: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4)
    },
    // memoriesTitle: {
    //   flex: 1
    // },
    memoriesLink: {
      color: "inherit",
      textDecoration: "none"
    }
  };
};

export default styles;
