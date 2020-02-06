import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {
  makeStyles,
  Typography,
  GridList,
  GridListTile
} from "@material-ui/core";
import _isEmpty from "lodash/isEmpty";
import styles from "../style/Explore";
import { useDispatch, useSelector } from "react-redux";
import { fetchBeaches } from "../actions/beach";
import { get } from "../helpers/request";
import BeachTile from "./BeachTile";
import EmptyBeachTile from "./EmptyBeachTile";

const useStyles = makeStyles(styles);

const Explore = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const beachData = useSelector(state => state.beaches);
  const [beaches, setBeaches] = useState([]);

  const loader = [...Array(6).keys()];

  const search = (str, val) => {
    return str.toLowerCase().includes(val);
  };

  const handleSearchFilter = val => {
    val = val.toLowerCase();
    if (!val) {
      setBeaches(beachData.beaches);
    } else {
      setBeaches(
        beachData.beaches.filter(
          beach =>
            search(beach.name, val) ||
            search(beach.location, val) ||
            search(beach.state, val) ||
            search(beach.country, val)
        )
      );
    }
  };

  useEffect(() => {
    const getBeaches = async () => {
      const beaches = await get("beaches");
      dispatch(fetchBeaches(beaches));
      setBeaches(beaches);
    };
    getBeaches();
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Navbar search={true} searchCallback={handleSearchFilter} />
      <div className={classes.body}>
        <Typography variant="h4">Explore</Typography>
        {/* {JSON.stringify(beachData)} */}
        <GridList
          cellHeight={400}
          className={classes.gridList}
          cols={3}
          spacing={50}
        >
          {_isEmpty(beaches)
            ? loader.map(key => (
                <GridListTile key={key} cols={1}>
                  <EmptyBeachTile />
                </GridListTile>
              ))
            : beaches.map(beach => (
                <GridListTile key={beach.name} cols={1}>
                  <BeachTile beach={beach} />
                </GridListTile>
              ))}
        </GridList>
      </div>
    </div>
  );
};

export default Explore;
