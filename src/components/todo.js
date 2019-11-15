import  React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
  function Todolist(props) {
    const columns = [
      {
        Header:'Date',
         accessor: 'date'
        }, 
        {Header: 'Description' ,
        accessor: 'desc',
      },
      {
  
        Cell: ({index}) => <button id={index} onClick={() => {props.deleteTodo(index)}}>Delete</button>
      }
    ]
//TODO: vie tiedot html-sivulle
 return (
  <div className="App">
    <ReactTable data={props.todos}    columns={columns} filterable={true} defaultPageSize={10}/>
    </div>
  );
   
 /* <table><tbody><tr><th>Date</th><th>Description</th></tr>{props.todos.map((item, index) => <tr key=   {index}><td>{   item.date}</td><td>{item.desc}</td>
  <td>     
<button onClick={() => {props.deleteTodo(index)}}>Delete </button></td>

   </tr>)}</tbody></table>
                            
    <br/>*/
};



export default Todolist