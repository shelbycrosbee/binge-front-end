import React from 'react';
import usePosition from '/Users/tombawel/code/binge-front-end/node_modules/use-position/dist/usePosition.min.js';
 
const UserLoc = () => {
  const { latitude, longitude, timestamp, accuracy, error } = usePosition(true);

  console.log(UserLoc)

  return (
    <code>
      latitude: {latitude}<br/>
      longitude: {longitude}<br/>
      timestamp: {timestamp}<br/>
      accuracy: {accuracy && `${accuracy}m`}<br/>
      error: {error}
    </code>
  );
};

export default UserLoc;