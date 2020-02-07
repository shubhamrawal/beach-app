const styles = theme => {
  return {
    navbar: {
      background: "transparent",
      // color: "#5d6d7e",
      color: "inherit",
      boxShadow: "none"
    },
    title: {
      textAlign: "left",
      flexGrow: 1,
      color: "inherit",
      textDecoration: "none"
    },
    menuButton: {
      paddingLeft: "10px",
      color: "inherit",
      textDecoration: "none"
    },
    search: {
      paddingRight: "2%"
    },
    avatar: {
      height: theme.spacing(3),
      width: theme.spacing(3)
    }
  };
};

export default styles;
