import React from 'react';
import { useSelector } from 'react-redux';

export default function Navbar() {
  // utilizamos useSelector para obtener los datos del store
  const { allItems } = useSelector((store) => store);
  const completed = allItems.filter((item) => item.complete === true).length;
  const incomplete = allItems.filter((item) => item.complete === false).length;
  return (
    <>
      <h2 className="text-blue-500">Total Tasks: {allItems.length}</h2>
      <h5 className="text-blue-300">
        Total: Completed {completed} - Incomplete {incomplete}
      </h5>
    </>
  );
}
