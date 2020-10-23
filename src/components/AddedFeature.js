import React from 'react';
import {removeFeature} from "../actions/actions";
import {connect} from "react-redux";
const AddedFeature = props => {
  console.log("addedfeatureFilter: ",props);//is getting each feture from the features array which is empty rn, from its parent componenet added features
  
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => {props.removeFeature(props.feature)}} className="button">X</button>
      {props.feature.name}
    </li>
  );
};
const mapStateToProps = (state) => {
  return{features: state.car.features}
}
export default connect(mapStateToProps,{removeFeature})(AddedFeature);
