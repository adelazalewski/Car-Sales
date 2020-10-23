import React from 'react';
import {connect} from "react-redux";
import {addFeature} from "../actions/actions";


const AdditionalFeature = props => {
  console.log("additionalFeatureAddButton: ", props) // is getting the 4 items in the additionalFeatures array/is getting each of the fetures from the additionalFeatures array
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => {props.addFeature(props.feature)}} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  return{
    name: state.additionalFeatures.name,
    price: state.additionalFeatures.price
  }
  
}


export default connect(mapStateToProps,{addFeature})(AdditionalFeature);
