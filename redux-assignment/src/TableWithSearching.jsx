import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';


const TableWithSearching = ({ data }) => {

  const [searchTerm, setSearchTerm] = useState('');

//  filter search data using filter method
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
    
<div className="input-group rounded">
  {/* when user  serach change input value  */}
  <input type="search"   value={searchTerm}  onChange={(e) => setSearchTerm(e.target.value)} className="form-control rounded" placeholder="Shirt" aria-label="Search" aria-describedby="search-addon" />
  <span className="input-group-text border-0">
  <FaSearch />
  </span>
</div>

  
      <table className="table">
        
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Category</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {/* table data show using map method dynamic  */}
    {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.Category}</td>
              <td>
              <button className='btn btn-primary me-2'>Read</button>
        <button className='btn btn-info me-2'>Edit</button>
        <button className='btn btn-danger' >Delete</button>
              </td>
            
            </tr>
          ))}
  </tbody>
</table>
    </div>
  );
};



export default TableWithSearching;
