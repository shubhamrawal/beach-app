import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GridViewBase from "./GridViewBase";
import { fetchWishlist } from "../actions/user";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.beach.wishlist);

  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);

  return <GridViewBase title="Wishlist" beaches={wishlist} />;
};

export default Wishlist;
