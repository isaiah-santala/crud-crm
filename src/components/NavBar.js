import React from 'react';

function NavBar({changeView}) {
  const viewOptions = ['Home','Leads', 'Map']

  return (
    <div className="navBar">
      {viewOptions.map((e, i) => (  
          <button
            key={i}
            onClick={changeView}
            data-name={e}
          >{e}</button>
      ))}
    </div>
  );
}

export default NavBar;
