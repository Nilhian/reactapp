import React , { useState} from 'react';


const SearchBox = () => {
    const [value, setValue] = useState("");
    

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("search ", searchTerm);
  };

  const reset = () => {
    setValue('');
  }


  return (
    <div className="App">
      <h1>Ricerca Email</h1>

      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange} />
          <button className="btn" onClick={() => onSearch(value)}> Cerca </button>
          <button type="button" onClick={() => reset()} className="btn" >Clear</button>
        </div>

      </div>
    </div>
  );

}

export default SearchBox;