import React, { useState } from "react";
import { Button } from "react-materialize";
import { useSelector } from "react-redux";

const SaveForLater = ({ product_id, quantity }) => {
  const user = useSelector((state) => state.auth.user);
  const [savedForLater, setSavedForLater] = useState(false);
  const handleClick = () => {
    console.log("this is the props", product_id, user.id, quantity);
    setSavedForLater(true);
  };
  return <Button onClick={handleClick}>Save for later</Button>;
};

export default SaveForLater;
