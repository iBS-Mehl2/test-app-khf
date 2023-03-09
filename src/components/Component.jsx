import React from "react";

const Component = () => {
  const user = {
    firstName: "Test",
    lastName: "Name",
  };
  return (
    <>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
    </>
  );
};

export default Component;
