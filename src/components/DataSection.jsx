import React from 'react';
import useDate from '../customHooks/useDate';
function DataSection() {
    const date = useDate();
    // console.log("date", date);
  return (
      <div>
          <h1>Date every second</h1>
          <p>{date.toLocaleString()}</p>
      </div>
  );
}

export default React.memo(DataSection);