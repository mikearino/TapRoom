
import React from 'react';
import Photo from './Photo';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
  var mainStyles = {
    // color: '#black',
    // background: 'grey',
    margin: 'auto',
    width: '50%',
    // border: '3px solid green',
    padding: '10px'
  }
  console.log(props.kegList)
  return (
    <div>
      <hr/>
      {props.kegList.map((keg) =>
        <Keg name={keg.name}
          brand={keg.brand}
          abv={keg.price}
          price={keg.abv}
          flavor={keg.flavor}
          timeOpen={keg.timeOpen}
          key={keg.id} />
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;
