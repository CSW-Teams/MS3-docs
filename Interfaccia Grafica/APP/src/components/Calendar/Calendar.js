import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Center({children}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {children}
    </div>
  );
}

export default function Calendar2() {
  const [value, onChange] = useState(new Date());
 

  return (
    <Center>
            <Calendar onChange={onChange} value={value}/>
    </Center>
  );
}
