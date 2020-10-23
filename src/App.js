import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';




const App = () => {
  



  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures  />
      </div>
      <div className="box">
        <AdditionalFeatures  />
        <Total  />
      </div>
    </div>
  );
};

export default App;


//so my inital state is the one above 
//my reducer needs to do 2 things add a new feture from the additionalFeatures array to the features array and to remove a feature from the features arary --- 2 onClick events 