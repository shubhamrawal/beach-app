import React from "react";
import Navbar from "./Navbar";
import {
  makeStyles,
  Typography,
  GridList,
  GridListTile
} from "@material-ui/core";
import _isEmpty from "lodash/isEmpty";
import styles from "../style/GridViewBase";
import BeachTile from "./BeachTile";
import EmptyBeachTile from "./EmptyBeachTile";

const useStyles = makeStyles(theme => styles(theme));

const GridViewBase = props => {
  const classes = useStyles();
  // const [beachFilter, setBeachFilter] = useState([]);

  const loader = [...Array(6).keys()];

  // const search = (str, val) => {
  //   return str.toLowerCase().includes(val);
  // };

  const handleSearchFilter = val => {
    // val = val.toLowerCase();
    // if (!val) {
    //   setBeachFilter(beaches);
    // } else {
    //   setBeachFilter(
    //     beaches.filter(
    //       beach =>
    //         search(beach.name, val) ||
    //         search(beach.location, val) ||
    //         search(beach.state, val) ||
    //         search(beach.country, val)
    //     )
    //   );
    // }
  };

  return (
    <div className={classes.root}>
      <Navbar search={true} searchCallback={handleSearchFilter} />
      <div className={classes.body}>
        <Typography variant="h4">{props.title}</Typography>
        {/* {JSON.stringify(beachData)} */}
        <GridList
          cellHeight={400}
          className={classes.gridList}
          cols={3}
          spacing={50}
        >
          {!props.loaded ? (
            loader.map(key => (
              <GridListTile key={key} cols={1}>
                <EmptyBeachTile />
              </GridListTile>
            ))
          ) : _isEmpty(props.beaches) ? (
            <div className={classes.emptyText}>
              <Typography variant="body1">No beaches found</Typography>
              <Typography variant="body1">
                Start by exploring some beaches and adding them to the list...
              </Typography>
            </div>
          ) : (
            props.beaches.map(beach => (
              <GridListTile key={beach.name} cols={1}>
                <BeachTile beach={beach} />
              </GridListTile>
            ))
          )}
        </GridList>
      </div>
    </div>
  );
};

export default GridViewBase;
