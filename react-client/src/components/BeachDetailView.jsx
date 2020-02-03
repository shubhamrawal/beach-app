import React from "react";
import {
  makeStyles,
  Typography,
  GridList,
  GridListTile
} from "@material-ui/core";
// import { get } from "../helpers/request";
import Navbar from "./Navbar";
import styles from "../style/BeachDetailView";
import backdrop0 from "../assets/images/backdrop0.jpg";
import backdrop1 from "../assets/images/backdrop1.jpg";
import backdrop2 from "../assets/images/backdrop2.jpg";

const useStyle = makeStyles(styles);

const BeachDetailView = props => {
  const classes = useStyle();
  // const name = props.name;
  const { beach } = props.location.state;

  const photos = [
    { img: backdrop0, title: "backrop0", featured: true },
    { img: backdrop1, title: "backrop0", featured: false },
    { img: backdrop2, title: "backrop0", featured: false },
    { img: backdrop2, title: "backrop0", featured: false },
    { img: backdrop0, title: "backrop0", featured: false },
    { img: backdrop2, title: "backrop0", featured: true }
  ];

  // const [beach, setBeach] = useState({});

  // useEffect(() => {
  //   const getBeach = async () => {
  //     const res = await get(`beach/${name}`);
  //     const beach = res.data;
  //     setBeach(beach);
  //   };
  //   if (_.isEmpty(beachState)) {
  //     getBeach();
  //   } else {
  //     setBeach(beachState);
  //   }
  // }, [beachState, name]);

  return (
    <div className={classes.root}>
      <Navbar search={true} searchCallback={() => {}} />
      <div className={classes.body}>
        <Typography variant="h4">{beach.name}</Typography>
        <GridList cellHeight={200} spacing={1} cols={4}>
          {photos.map(photo => (
            <GridListTile key={photo.img} cols={photo.featured ? 2 : 1}>
              <img src={photo.img} alt={photo.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
};

export default BeachDetailView;
