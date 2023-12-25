import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Registration from './Components/Registration';
import PostList from './Components/PostList';
import PostForm from './Components/PostForm';
import Home from './Components/Home';
import  TableWithSearching  from "./TableWithSearching";

const QuestionAnswer = () => {
  // Table detail array 
    const data = [
        { name: 'Amand Violet Shirt Men', price: '$300',Category:"Fashion", },
        { name: 'Book Shirt', price: '$300',Category:"Fashion", },
        { name: 'Lake Shirt', price: '$300',Category:"Fashion", },
        { name: ' Black Shirt', price: '$300',Category:"Fashion", },
       
      ];
  return (
    
    <div>
         1.What is Redux?  
   <div>
   <b>Ans.:</b>
Redux is a predictable state container for JavaScript applications, primarily used with React for building user interfaces. It helps manage the state of an application in a predictable way, making it easier to understand, debug, and maintain large-scale applications. 
   <b>Here are the key concepts in Redux : </b>
    1.Store,
    2.Action,
    3.Reducer,
    4.Dispatch,
    5.Middleware
   </div>
   <hr />
2.What is Redux Thunk used for?
   <div>
    <b>Ans.:</b>
Redux Thunk is a middleware for Redux that enables the use of asynchronous logic in Redux applications. It allows you to write action creators that return functions instead of plain action objects. These functions, known as thunks, can contain asynchronous operations such as API calls, and they can dispatch multiple actions.
    </div>  
   <hr />
  
  3. What is Pure Component? When to use Pure Component over
Component?
  <div>

  <b>Ans.:</b>A Pure Component is a class component that extends React.PureComponent instead of the more generic React.Component.
  It performs a shallow comparison of the current props and state with the next props and state before deciding whether to re-render.
  Use Pure Components when the rendering of a component is determined solely by its props and state.
If a component's render output is the same given the same props and state, avoiding unnecessary re-renders can improve performance.
</div>
<hr/>
4.What is the second argument that can optionally be passed
tosetState and what is its purpose?
<div>
    <b>Ans.:</b>The second argument that can be optionally passed to setState in React is a callback function. This callback function is executed once the setState operation and the re-rendering of the component are completed. Its purpose is to perform additional tasks or operations that should happen after the state has been updated.
</div>
<hr />
4.Create a Table and Search data from table using React Js ? 
<div>
    <b>Ans.:</b>
    <h3 className="text-center">Table with Search</h3>
    {/* using props data show table */}
      <TableWithSearching data={data} />
</div>
<hr />
5.Create Login registration with CRUD Application using API (Redux)
<div>
    <b>Ans.:</b>
    <h3 className="text-center"> Login registration</h3>
    {/* using router to show all page  */}
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/add-post" element={<PostForm />} />
      </Routes>
    </Router>
   
</div>
<hr />
    </div>
    
  )
}

export default QuestionAnswer