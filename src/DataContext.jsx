// import React, { useContext, useState, useEffect } from "react";

// const DataContext = React.createContext();

// export function useData() {
//   return useContext(DataContext);
// }

// export function DataProvider({ children }) {

//   const [data, setData] = useState('test');
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // fetch("http://localhost:3000/items")
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((response) => {
//         setData(response);
//         setError(null);
//       })
//       .catch(setError);
//   }, []);


//   return (
//     <DataContext.Provider
//       value={ data}
//     >
//       {children}
//     </DataContext.Provider>
//   );
// }
