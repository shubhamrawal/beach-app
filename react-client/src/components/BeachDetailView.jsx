import React, { useEffect } from "react";
import {
  makeStyles,
  Typography,
  GridList,
  GridListTile
} from "@material-ui/core";
// import { get } from "../helpers/request";
import { fetchBeach } from "../actions/beach";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import styles from "../style/BeachDetailView";
import backdrop0 from "../assets/images/backdrop0.jpg";
import backdrop1 from "../assets/images/backdrop1.jpg";
import backdrop2 from "../assets/images/backdrop2.jpg";

const useStyle = makeStyles(theme => styles(theme));

const BeachDetailView = props => {
  const classes = useStyle();
  const name = props.name;

  const photos = [
    { img: backdrop0, title: "backrop0", featured: true },
    { img: backdrop1, title: "backrop1", featured: false },
    { img: backdrop2, title: "backrop2", featured: false },
    { img: backdrop2, title: "backrop3", featured: false },
    { img: backdrop0, title: "backrop4", featured: false },
    { img: backdrop2, title: "backrop5", featured: true }
  ];

  const dispatch = useDispatch();
  const beach = useSelector(state => state.beach.currentBeach);
  // const [beach, setBeach] = useState({});

  useEffect(() => {
    dispatch(fetchBeach(name));
  }, [dispatch, name]);

  return (
    <div className={classes.root}>
      <Navbar search={true} searchCallback={() => {}} />
      {beach && (
        <div className={classes.body}>
          <Typography variant="h4">{beach.name}</Typography>
          <GridList
            className={classes.gridList}
            cellHeight={200}
            spacing={1}
            cols={4}
          >
            {photos.map(photo => (
              <GridListTile key={photo.title} cols={photo.featured ? 2 : 1}>
                <img src={photo.img} alt={photo.title} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      )}
    </div>
  );
};

export default BeachDetailView;
