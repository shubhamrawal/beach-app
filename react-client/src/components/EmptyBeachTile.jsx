import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const EmptyBeachTile = () => {
  return (
    <div>
      <Skeleton variant="rect" height={200} />
      <Skeleton height={50} />
      <Skeleton height={25} />
      <Skeleton />
      <Skeleton />
    </div>
  );
};

export default EmptyBeachTile;
