import React from 'react';

const AddedFeature = props => {
  console.log("addedfeatureFilter: ",props);//is getting each feture from the features array which is empty rn, from its parent componenet added features
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
