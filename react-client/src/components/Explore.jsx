import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {
  makeStyles,
  Typography,
  GridList,
  GridListTile
} from "@material-ui/core";
import styles from "../style/Explore";
import { useDispatch, useSelector } from "react-redux";
import { fetchBeaches } from "../actions/beach";
import { get } from "../helpers/request";
import BeachTile from "./BeachTile";

const useStyles = makeStyles(styles);

const Explore = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const beachData = useSelector(state => state.beaches);
  const [beaches, setBeaches] = useState([]);

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
      const res = await get("beaches");
      const beaches = res.data;
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
        {beaches && (
          <GridList
            cellHeight={400}
            className={classes.gridList}
            cols={3}
            spacing={50}
          >
            {beaches.map(beach => (
              <GridListTile key={beach.id} cols={1}>
                <BeachTile beach={beach} />
              </GridListTile>
            ))}
          </GridList>
        )}
      </div>
    </div>
  );
};

export default Explore;
