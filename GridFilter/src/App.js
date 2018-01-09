import './App.css';

import React, {Component} from 'react';
import data from './data';

import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BootstrapTable, TableHeaderColumn,NoDataTable} from 'react-bootstrap-table';
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

  
     render() {
      const childTypes = [ 'น้องบิว', 'น้องคิม', 'น้องฝน', 'คิมเบอร์รี่' ];
      const cellEditProps = {
        mode: 'click',
       /* blurToSave: true*/
      };
      function lastNamevalidate(value, row) {
        const nan = length.value ===0
       if (nan)
         return ' lastName can not be null !'
       else
        return true;
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
              search={true}
              cellEdit={cellEditProps }
              bordered ={ false }  
              options={{ noDataText: 'Data not found ' ,
                        clearSearch: true}} 
              insertRow={ true }          
              striped hover condensed>
              <TableHeaderColumn isKey dataField='name'isKey={ true } dataSort={ true }  thStyle={ { 'fontWeight': 'bolder' }}
              >name</TableHeaderColumn>
              <TableHeaderColumn dataField='lastName' thStyle={ { 'fontWeight': 'lighter' }}
              editable={ { type: 'textarea',
              validator:(lastNamevalidate)}}
              >lastName</TableHeaderColumn>
              <TableHeaderColumn dataField='birthDay' dataAlign='center' 
               editColumnClassName='p-0' editorClass='input-xs' editable={{ type: 'date' }} >birthDay</TableHeaderColumn>
              <TableHeaderColumn dataField='child'  filter={ { type: 'TextFilter' }}
              editable={ { type: 'select'} }>child</TableHeaderColumn>
              <TableHeaderColumn dataField='childAge' dataAlign='center'
               editColumnClassName='p-0' editorClass='input-xs' editable={{ type: 'number' }} >childAge</TableHeaderColumn>
            </BootstrapTable>
         </form>
         </div>
            
     }
   }
   export default App