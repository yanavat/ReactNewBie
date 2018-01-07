import './App.css';

import React, {Component} from 'react';
import data from './data';
import "bootstrap/dist/css/bootstrap.min.css"
import { Jumbotron,Button ,Badge, Container,Label 
  ,Panel,FormControl ,FormGroup,Col,ControlLabel,ListGroup ,ListGroupItem,Glyphicon, Table } from 'react-bootstrap';

const mystyle = { fontSize: 16, color:'blue' };
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
   
  })  
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
      <div className="card-header">
        <div >
        <Panel bsStyle="primary" >
		  	<Panel.Heading >home work</Panel.Heading>
        </Panel>
      <FormGroup controlId="formHorizontaltext">
			<Col componentClass={ControlLabel} xs={1}>
				Text
			</Col>
			<Col xs={8}>
        <FormControl type="Text" placeholder="Text" 
          onChange={this.onChangeText.bind(this)}
          placeholder="type something"
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
      displayChild(d,idx){
        return(
          <ul className="list-group"> 
           <li className="list-group-item" key={idx}>
           <p> 
            <a href="#">บุตร : {d.child} </a> 
              <span className="badge"> {d.childAge} </span> 
              <a href="#"> ปี </a> 
           </p>
          </li>
         </ul>
      )
      }
      displayl(d,idx){
       return (
        <li className="list-group-item" key={idx} > 
        <h3 >
         <label>{d.name}</label> 
         <label>{d.lastname} </label>
         <label>{d.birthDay} </label>
        </h3>
        {this.displayChild(d,idx)}
        </li> 
    
        
        );
      }

    render(){ 
      return(
         <div>
           <ul className="list-group">
            {data().map((d,idx)=> this.displayl(d,idx))}
             </ul>
         </div>
      )
    }
}
class Footer extends Component{
  constructor(){
  super();
  this.state={
   type:""
  }

 }
 onChange(event){
  this.setState({type:event.target.value}) 
 }
 
 showData(x,idx){
  return (
   <td>{x}</td>
  )
 }
 render(){
   return(
    <div>
    <input type='text' onChange={this.onChange.bind(this)}/>
    <h3>{this.state.type}</h3>


    <Table striped bordered condensed hover>
		 <thead>
			<tr>
				<th>First Name</th>
				<th>Last Name</th>
				<th>birthDay</th>
			</tr>
      </thead>
      <tbody>
        <tr>
      {/*  {data().map((x,idx) =>this.showData(x,idx))}
       */}
        </tr>
      </tbody>
    </Table>
    </div>
   )


 }
}
  export default App
