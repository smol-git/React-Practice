import React from 'react';
import { List } from 'react-virtualized';

//const listItems = Array.from({ length: 100 }, (v, i) => `Item ${i + 1}`);
const listItems = [];
for (let i = 1; i <= 100; i++) {
  listItems.push(`Item ${i}`);
}

function MyListComponent() {
  return (                         // jsx with react virtualization
    <div>
      <h1>List Example</h1>
      <List
        width={300}            // Width of the list
        height={400}           // Height of the list
        rowCount={listItems.length} // Total number of items
        rowHeight={50}         // Height of each item
        rowRenderer={({ key, index, style }) => (
          <div key={key} style={style}>
            {listItems[index]}
          </div>
        )}
      />
    </div>
  );

  // return(                     // jsx without react virtualization
  //   <div>
  //   <h1>Basic List Example</h1>
  //   <div style={{ width: '300px', height: '400px', overflow: 'auto' }}>
  //     <ul>
  //       {listItems.map((item, index) => (
  //         <li key={index}>{item}</li>
  //       ))}
  //     </ul>
  //   </div>
  // </div>
  // );
}

export default MyListComponent;
