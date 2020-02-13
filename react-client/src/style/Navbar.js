const styles = theme => {
  return {
    navbar: {
      background: "transparent",
      // color: "#5d6d7e",
      color: "inherit",
      boxShadow: "none"
    },
    grid: {
      backgroundColor: "red"
    },
    title: {
      color: "inherit",
      textDecoration: "none"
    },
    spacer: {
      flexGrow: 1
    },
    menuButton: {
      margin: theme.spacing(1),
      color: "inherit",
      textDecoration: "none"
    },
    search: {
      margin: theme.spacing(1)
    }
  };
};

export default styles;
