import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GridViewBase from "./GridViewBase";
import { fetchBeaches } from "../actions/beach";

const Explore = () => {
  const dispatch = useDispatch();
  const beaches = useSelector(state => state.beach.beaches);

  useEffect(() => {
    dispatch(fetchBeaches());
  }, [dispatch]);

  return <GridViewBase title="Explore" beaches={beaches} />;
};

export default Explore;
