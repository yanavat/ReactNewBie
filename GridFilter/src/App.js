import './App.css';

import React, {Component} from 'react';
import data from './data';

//import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
//import 'react-bootstrap-table/css/react-bootstrap-table.css'
import 'react-bootstrap-table/dist/react-bootstrap-table.js'
import "bootstrap/dist/css/bootstrap.min.css"
import { BootstrapTable, TableHeaderColumn,ClearSearchButton ,TrClassStringTable  } from 'react-bootstrap-table';
import { Jumbotron,Button ,Badge, Container,Label 
  ,Panel,FormControl ,FormGroup,Col,ControlLabel,ListGroup ,ListGroupItem,Glyphicon, Table } from 'react-bootstrap';
  class App extends Component {
    constructor(){
     super();
     this.state={
      inputdata:''
     }
  
    }
    _onFilter(e){
     this.setState({inputdata:e.target.value})
   }
   checkMathText(value){
    if (value.name > '')
    return (value.name.startsWith(this.state.inputdata))
    else
    return true;
  }

  trStyle = (row, rowIndex) => {
    return { backgroundColor: '#31698a',
             color: '#ffffff'  };
  }
  
     render() {
      const childTypes = [ 'น้องบิว', 'น้องคิม', 'น้องฝน', 'คิมเบอร์รี่' ];
      const cellEditProps = {
        mode: 'click',
      };
      
      const options  ={
        clearSearch: true,
        searchPosition: 'left'
      }

     
      function  columnClassNameFormat(fieldValue, row, rowIdx, colIdx) {
          // fieldValue is column value
          // row is whole row object
          // rowIdx is index of row
          // colIdx is index of column
          return rowIdx % 2 === 0 ? 'td-column-function-even-example' : 'td-column-function-odd-example';
        }
 
       
      function rowClassNameFormat(row, rowIdx) {
        // row is whole row object
        // rowIdx is index of row
        return rowIdx % 2 === 0 ? 'td-column-function-even-example' : 'td-column-function-odd-example';
      }
        
      
      
       let {inputdata} = this.state
       return <div>
         <input type='text' value={inputdata} onChange={this._onFilter.bind(this)} />
         
          <Table responsive>
          <thead>
           <tr>
             <th>First Name</th>
             <th>Last Name</th>
             <th>birthDay</th>
             <th>child</th>
             <th>childAge</th>
           </tr>
           </thead>
           <tbody>
             
            {data()
            .filter(data =>  this.checkMathText(data))
            
            .map((value,idx) => {return(
             <tr key={idx}>
                <td>{value.name}</td>
                <td>{value.lastName}</td>
                <td>{value.birthDay}</td>
                <td>{value.child}</td>
                <td>{value.childAge}</td>
             </tr>

            )})}
           </tbody>
         </Table> 
                   
         <form>   
           
            <BootstrapTable data={data().filter(data =>  this.checkMathText(data))} 
              cellEdit={cellEditProps }
              options={{ noDataText: 'Data not found ' } } 
              options={ options } search              
              insertRow  
              exportCSV
              deleteRow
              pagination 
              trStyle={ this.trStyle }
              >
              <TableHeaderColumn isKey dataField='name' 
              dataSort={ true }>name</TableHeaderColumn>
              <TableHeaderColumn dataField='lastName' 
              editable={ { type: 'textarea'}}>lastName</TableHeaderColumn>
              <TableHeaderColumn dataField='birthDay' 
               dataAlign='center' 
               editable={{ type: 'date' }} >birthDay</TableHeaderColumn>
              <TableHeaderColumn dataField='child'  
                filter   ={ { type: 'TextFilter' }} 
                editable ={ { type: 'select',options: { values: childTypes }} }>child</TableHeaderColumn>
              <TableHeaderColumn dataField='childAge' dataAlign='center'
                columnClassName={ this.columnClassNameFormat }

               editable={{ type: 'number' }} >childAge</TableHeaderColumn>
            </BootstrapTable>





            <BootstrapTable data={ data() } 
           /*  containerStyle={ { background: '#00ff00' } }
            /* tableStyle={ { background: '#00ffff' } } */
           /* bodyStyle={ { background: '#00ff00' } }
           /*  headerStyle={ { background: '#00ffff' } }*/
          /* containerClass='my-custom-class'*/
          trClassName={this.rowClassNameFormat}
          >
          <TableHeaderColumn dataField='name' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='lastName' className='td-header-string-example'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='childAge' columnClassName={ columnClassNameFormat }>Product Price</TableHeaderColumn>
      </BootstrapTable>
        
         </form>
         </div>
            
     }
   }
   export default App