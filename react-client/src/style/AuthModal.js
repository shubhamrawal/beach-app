const styles = theme => {
  return {
    root: {
      backgroundColor: "white",
      textAlign: "center",
      marginLeft: "35%",
      marginRight: "35%",
      marginTop: "10%",
      outline: "0",
      borderRadius: "20px"
    },
    header: {
      paddingTop: "2%",
      paddingLeft: "2%",
      paddingRight: "7.5%",
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
    submitButton: {
      marginTop: "5%",
      marginBottom: "5%"
    }
  };
};

export default styles;
