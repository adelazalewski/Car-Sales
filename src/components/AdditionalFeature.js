import React from 'react';

const AdditionalFeature = props => {
  console.log("additionalFeatureAddButton: ", props) // is getting the 4 items in the additionalFeatures array/is getting each of the fetures from the additionalFeatures array
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button  className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
