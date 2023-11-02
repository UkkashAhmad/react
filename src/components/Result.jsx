import React, { useState } from 'react';
function Result() {
 const [Book1,setBook1]=useState(0);
 const [Book2,setBook2]=useState(0);
 const [Book3,setBook3]=useState(0);
 const [Book4,setBook4]=useState(0);
 const [Book5,setBook5]=useState(0);
 const [Book6,setBook6]=useState(0);
 const [Total,setTotal]=useState(0);
// Event handler for the first input
const handleBook1Change = (event) => {
    setBook1(Number(event.target.value));
  };

  // Event handler for the second input
  const handleBook2Change = (event) => {
    setBook2(Number(event.target.value));
  };

  // Event handler for the second input
  const handleBook3Change = (event) => {
    setBook3(Number(event.target.value));
  };

  // Event handler for the second input
  const handleBook4Change = (event) => {
    setBook4(Number(event.target.value));
  };

  // Event handler for the second input
  const handleBook5Change = (event) => {
    setBook5(Number(event.target.value));
  };

  // Event handler for the second input
  const handleBook6Change = (event) => {
    setBook6(Number(event.target.value));
  };
  // Event handler for the button click
  const handleAddClick = () => {
    const sum = Book1 + Book2 + Book3 + Book4 + Book5 + Book6 ;
    setTotal(sum);
  };

  return (
    <div>
      <h2>Add Book 1 Numbers</h2>
      <label htmlFor="Book1">Enter  first Book number: </label>
      <input
        type="number"
        id="Book1"
        value={Book1}
        onChange={handleBook1Change}
      />

<h2>Add Book 2 Numbers</h2>
      <label htmlFor="Book2">Enter  secend Book number: </label>
      <input
        type="number"
        id="Book2"
        value={Book2}
        onChange={handleBook2Change}
      />

<h2>Add Book 3 Numbers</h2>
      <label htmlFor="Book3">Enter  3rd Book number: </label>
      <input
        type="number"
        id="Book3"
        value={Book3}
        onChange={handleBook3Change}
      />


<h2>Add Book 4 Numbers</h2>
      <label htmlFor="Book4">Enter   Book 4 number: </label>
      <input
        type="number"
        id="Book4"
        value={Book4}
        onChange={handleBook4Change}
      />

<h2>Add Book 5 Numbers</h2>
      <label htmlFor="Book5">Enter  Book 5 number: </label>
      <input
        type="number"
        id="Book5"
        value={Book5}
        onChange={handleBook5Change}
      />


<h2>Add Book 6 Numbers</h2>
      <label htmlFor="Book6">Enter   Book 6 number: </label>
      <input
        type="number"
        id="Book6"
        value={Book6}
        onChange={handleBook6Change}
      />

      <button onClick={handleAddClick}>Add</button>

      <p>Result: {Total}</p>
    </div>
  );
}

export default Result;

