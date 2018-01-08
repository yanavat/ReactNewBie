import './App.css';

import React, {Component} from 'react';
import data from './data';
import "bootstrap/dist/css/bootstrap.min.css"
import { Jumbotron,Button ,Badge, Container,Label 
  ,Panel,Form ,FormControl ,FormGroup,Col,ControlLabel,ListGroup ,ListGroupItem,Glyphicon, Table } from 'react-bootstrap';

const mystyle = { 
                  fontFamily: 'tahoma'
                  ,fontSize: 16};
let new_Date  = data();

class App extends Component {
  render() {
    return <div>
     <Header/>
      <Content/>
      <Footer/>
      </div>
         
  }
}
 

class Header extends Component{
  constructor(){
  super();
  this.state ={
   inputData:'',
   listitem: []
  }
}
insertDate(){
  
  this.setState({
   listitem: this.state.listitem.concat([this.state.inputData])   
  });

  
}

handleKeyPress(event){
  if (event.key === 'Enter') {
    this.insertDate()
  }
}

onChangeText(event){
  this.setState({inputData:event.target.value}) 
 }
 Remove(idx){
   const result = this.state.listitem
   result.splice(idx,1)
   this.setState({
     listitem:result
   })


  }

 
  render(){ 
    return(
      <div className="card-header" style ={mystyle}>
        <div >
        <Panel  bsStyle="primary">
		  	<Panel.Heading >home work</Panel.Heading>
        </Panel>
      <FormGroup controlId="formHorizontaltext">
			<Col componentClass={ControlLabel} xs={1}>
				Text
			</Col>
			<Col xs={8}>
        <FormControl type="Text" placeholder="Text" 
          onChange={this.onChangeText.bind(this)}
          placeholder="Test Todo List"
          onKeyPress={this.handleKeyPress.bind(this)}/>

			</Col>
      <Button bsStyle="primary" onClick  ={this.insertDate.bind(this)}> Add</Button>
      {this.state.listitem.map((value,idx)=>{
        return(<ListGroup  key ={idx+value}>
        <Col xs={11}>
          <ListGroupItem  > {value} </ListGroupItem>
        </Col>  
        
          <Button bsStyle="danger"  onClick={this.Remove.bind(this,idx)}>
          <Glyphicon glyph="remove" /></Button>  
          </ListGroup> )
       })
      }
		</FormGroup>
        </div>
     
      </div>
       );
    }
}

  class Content extends Component{
    constructor(){
      super();
      this.state ={
       name:'',
       lastName:'',
       birthDay:'',
       child   :'',
       childAge:0,

       listitem: []
      }
    }

    listitem = data()
      displayl(d,idx){
       return (
       <ListGroup key ={idx}>
       <ListGroupItem active > {d.name}  {d.lastName}    {d.birthDay} </ListGroupItem>
       <ListGroupItem>   {d.child}    {d.childAge}  years old.  </ListGroupItem>         
       </ListGroup>

      ) 
      }

    render(){ 
      return(
         <div>
     

    

        <Panel bsStyle="info" style ={mystyle}>
			  <Panel.Heading>
				<Panel.Title componentClass="h3"> Data</Panel.Title>
			  </Panel.Heading>
			  <Panel.Body>
        {/*   <Form inline>
           <FormGroup controlId="formInlineName">
             <ControlLabel>Name</ControlLabel>{' '}
             <FormControl type="text" placeholder="Name" />
            </FormGroup>{' '}
            <FormGroup controlId="formInlinelastName">
             <ControlLabel>Email</ControlLabel>{' '}
             <FormControl type="text" placeholder="lastName" />
            </FormGroup>{' '}
           <FormGroup controlId="formInlinebirthDay">
            <ControlLabel>birthDay</ControlLabel>{' '}
            <FormControl type="date" placeholder="01/01/1990" />
           </FormGroup>{' '}
           <FormGroup controlId="formInlineName">
           <ControlLabel>childName</ControlLabel>{' '}
            <FormControl type="text" placeholder="Name" />
            </FormGroup>{' '}
          <Button type="submit">submit</Button>
          </Form>
        */}
         {data().map((d,idx)=> this.displayl(d,idx))}
        </Panel.Body>
		    </Panel>
         </div>
      )
    }
}
class Footer extends Component{
 render(){
   return(
    <div>
   {/* <input type='text' onChange={this.onChange.bind(this)}/>
    <h3>{this.state.type}</h3>
   */}
   <Panel bsStyle="info" style ={mystyle}>
			  <Panel.Heading>
				<Panel.Title componentClass="h3"> Table</Panel.Title>
			  </Panel.Heading>
			  <Panel.Body>
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
             {data().map((value,idx) => 
             {
              return (
                   <tr key ={idx}>
                     <td>{value.name}</td>
                     <td>{value.lastName}</td>
                     <td>{value.birthDay}</td>
                     <td>{value.child}</td>
                     <td>{value.childAge}</td>
                   </tr> 
                     ) 
             })
            }
      </tbody>
    </Table>
        </Panel.Body>
		    </Panel>

   
    </div>
   )


 }
}
  export default App
