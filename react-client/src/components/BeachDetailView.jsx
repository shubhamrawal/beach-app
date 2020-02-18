import React, { useEffect, useState, useRef } from "react";
import {
  makeStyles,
  Typography,
  GridList,
  GridListTile,
  Grid,
  Button
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Link } from "@reach/router";
import {
  fetchBeach,
  unsetBeach,
  markBeachVisited,
  markBeachWishlisted
} from "../actions/beach";
import { addPhoto } from "../actions/user";
import { withAuth } from "../helpers/auth";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import _isEmpty from "lodash/isEmpty";
import styles from "../style/BeachDetailView";
import PhotoUploadModal from "./PhotoUploadModal";
import BeachImageViewModal from "./BeachImageViewModal";
import { getFirebaseDownloadUrl } from "../helpers/storage";

const useStyle = makeStyles(theme => styles(theme));

const BeachDetailView = props => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const beach = useSelector(state => state.beach.currentBeach);
  const photos = useSelector(state => state.beach.photos);
  const name = props.name;
  const numCols = 4;
  const visitedText = ["No memories added yet", "Start by adding some..."];
  const unvisitedText = [
    "Mark the beach as visited",
    "And start adding some memories..."
  ];

  const [fileInput] = useState(React.createRef());
  const [uploadOpen, setUploadOpen] = useState(false);
  const [imageViewOpen, setImageViewOpen] = useState(false);
  const [openImageUrl, setOpenImageUrl] = useState("");
  const [photoUrls, setPhotoUrls] = useState({});
  const [seeAll, setSeeAll] = useState(false);

  const usePrevious = value => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };
  const prevPhotos = usePrevious(photos);

  useEffect(() => {
    dispatch(fetchBeach(name));
    return () => {
      dispatch(unsetBeach());
    };
  }, [dispatch, name]);

  useEffect(() => {
    if (!_isEmpty(photos)) {
      const diff = photos.filter(photo => !prevPhotos.includes(photo));
      // fetch photos
      diff.forEach(async refId => {
        const url = await getFirebaseDownloadUrl(refId);
        setPhotoUrls(p => {
          const el = {};
          el[refId] = url;
          return { ...p, ...el };
        });
      });
    }
  }, [photos, prevPhotos]);

  useEffect(() => {
    if (openImageUrl) {
      setImageViewOpen(true);
    }
  }, [openImageUrl]);

  const handleMarkViewed = () => {
    dispatch(markBeachVisited(beach.id, !beach.visited));
  };

  const handleMarkWishlisted = () => {
    dispatch(markBeachWishlisted(beach.id, !beach.wishlist));
  };

  const mapEmptyPhotoGridText = arr => {
    return arr.map(text => (
      <Typography key={text} variant="body1">
        {text}
      </Typography>
    ));
  };

  const handleFileUpload = () => {
    setUploadOpen(true);
  };

  const handleUploadClose = () => {
    setUploadOpen(false);
  };

  const handleImageViewOpen = url => {
    setOpenImageUrl(url);
  };

  const handleImageViewClose = () => {
    setOpenImageUrl("");
    setImageViewOpen(false);
  };

  const dispatchPhoto = async photoRefId => {
    await setUploadOpen(false);
    dispatch(addPhoto(photoRefId));
  };

  const getPhotoUrls = () => {
    return seeAll
      ? Object.values(photoUrls)
      : Object.values(photoUrls).slice(0, numCols - 1);
  };

  // const getKeyForUrl = url => {
  //   return Object.keys(photoUrls).filter(key => photoUrls[key] === url);
  // };

  const BeachDetailViewTitle = () => {
    return (
      <Grid container spacing={2} justify="space-between">
        <Grid item>
          <div className={classes.title}>
            <Typography variant="h4">{beach.name}</Typography>
            {beach.visited && <CheckCircleIcon className={classes.titleIcon} />}
          </div>
          <Typography variant="body1" color="textSecondary">
            {`${beach.location}, ${beach.state}, ${beach.country}`}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            className={classes.titleButton}
            variant="contained"
            color={beach.visited ? "secondary" : "primary"}
            onClick={() => withAuth(handleMarkViewed, props.uri)}
          >
            {beach.visited ? "Mark as unvisited" : "Mark as visited"}
          </Button>
          <Button
            className={classes.titleButton}
            variant="contained"
            color={beach.wishlist ? "secondary" : "primary"}
            onClick={() => withAuth(handleMarkWishlisted, props.uri)}
          >
            {beach.wishlist ? "Remove from wishlist" : "Add to wishlist"}
          </Button>
          {beach.visited && (
            <>
              <input
                // accept=".jpeg, .jpg, .jpe, .jfif, .jif, .png .HEIC"
                accept="image/*, image/heic"
                className={classes.fileUpload}
                id="contained-button-file"
                multiple
                type="file"
                ref={fileInput}
                onChange={handleFileUpload}
              />
              <label htmlFor="contained-button-file">
                <Button
                  className={classes.titleButton}
                  variant="contained"
                  color="primary"
                  component="span"
                >
                  Add memories
                </Button>
              </label>
              <PhotoUploadModal
                open={uploadOpen}
                handleClose={handleUploadClose}
                dispatchPhoto={dispatchPhoto}
                beachId={beach.id}
                files={fileInput.current ? fileInput.current.files : []}
              />
            </>
          )}
        </Grid>
      </Grid>
    );
  };

  const BeachDetailViewPhotoGrid = () => {
    return (
      <GridList
        className={classes.gridList}
        cellHeight={200}
        spacing={10}
        cols={numCols}
      >
        {getPhotoUrls().map((url, index) => (
          <GridListTile
            key={url}
            cols={index % (numCols + 1) === 0 ? 2 : 1}
            rows={1}
          >
            <img
              src={url}
              alt={`beach-${url}`}
              onClick={() => handleImageViewOpen(url)}
              className={classes.gridListImage}
            />
          </GridListTile>
        ))}
      </GridList>
    );
  };

  const BeachDetailViewEmptyPhotoGrid = () => {
    return (
      <div className={classes.emptyPhotoGrid}>
        {beach.visited
          ? mapEmptyPhotoGridText(visitedText)
          : mapEmptyPhotoGridText(unvisitedText)}
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <Navbar search={true} searchCallback={() => {}} />
      {!_isEmpty(beach) && (
        <div className={classes.body}>
          <BeachDetailViewTitle />
          <div className={classes.memories}>
            <Grid container alignItems="center" justify="space-between">
              <Grid item>
                <Typography variant="h5" className={classes.memoriesTitle}>
                  Memories
                </Typography>
              </Grid>
              {!_isEmpty(photos) && beach.visited && (
                <Grid item>
                  <Link
                    to=""
                    onClick={() => setSeeAll(!seeAll)}
                    className={classes.memoriesLink}
                  >
                    {seeAll ? "See less" : "See all"}
                  </Link>
                </Grid>
              )}
            </Grid>
            {!_isEmpty(photos) && beach.visited ? (
              <BeachDetailViewPhotoGrid />
            ) : (
              <BeachDetailViewEmptyPhotoGrid />
            )}
            <BeachImageViewModal
              open={imageViewOpen}
              handleClose={handleImageViewClose}
              currentPhoto={openImageUrl}
              photos={Object.values(photoUrls)}
              beach={beach}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BeachDetailView;
