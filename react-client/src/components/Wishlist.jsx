import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GridViewBase from "./GridViewBase";
import { fetchWishlist } from "../actions/user";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.beach.wishlist);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      await dispatch(fetchWishlist());
      setLoaded(true);
    };
    loadData();
  }, [dispatch]);

  return <GridViewBase loaded={loaded} title="Wishlist" beaches={wishlist} />;
};

export default Wishlist;
