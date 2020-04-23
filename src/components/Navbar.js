import React, {Component} from 'react';
import Table from "./table"
import TableRow from "./TableRow"
import API from "../utils/API"


export default class Navbar extends Component {
  state = {
    people: [],
    display: "normal",
    sort: "",
    sorted: [],
    filtered: []
  }

  componentDidMount() {
    this.setState({
      people: API.people
    })
  }

  renderPeople = () => {
    let displayArr = "normal";

    if (this.state.display === "normal") {
      displayArr = this.state.people;
    } else if (this.state.display === "sorted") {
      displayArr = this.state.sorted;
    } else if (this.state.display === "filtered") {
      displayArr = this.state.filtered;
    }

    return displayArr.map((el) => {
      return ( 
      <div>
        <TableRow 
        name = {el.name}
        image = {el.image}
        title = {el.title}
        id = {el.id}
        email = {el.email}
        />
        </div>
      );
    });
  

  }

  handleSearchChange(event){
 event.preventDefault()
 this.setState({filter:event.target.value})
    if(event.target.value === ""){
      this.state.display = "normal"
      console.log(this.state.display)
    }else{
      this.state.display = "filtered"
    }
    this.state.filtered = this.state.people.filter(p=> p.name.toLowerCase().includes(event.target.value))
  }

  render(){
    return(

      <div className = "container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Employee Directory</a>

          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sort by
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button className="dropdown-item" href="#">Name</button>
              <button className="dropdown-item" href="#">Title</button>
              <button className="dropdown-item" href="#">eMail</button>
            </div>
          </div>          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            </ul>
          </div>
          <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange = {e=>this.handleSearchChange(e)}/>
    </form>
          
        </nav>
        
              <Table/>
        {this.renderPeople()}</div>
    )
  }

}