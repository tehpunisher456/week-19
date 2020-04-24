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

  handleSortChange = (event)=>{
    // event.preventDefault()
    // let sortBy = event.target.value;
    // this.setState({sort: sortBy})
    // if(sortBy === "name"){
    //   this.state.people.sort((a, b) => {
    //     return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    //   })
    // }else if(sortBy === "title"){
    //   this.state.people.sort((a, b) => {
    //     return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
    //   })
    //   }else {
    //     this.state.people.sort((a, b) => {
    //       return a.email < b.email ? -1 : a.email > b.email ? 1 : 0;
    //     })
    //   }
    event.preventDefault()
    let sortBy = event.target.value;
    this.setState({sort: sortBy})
    var sortKind = event.target.value.toString()    
    this.state.people.sort((a, b) => {
      return a[sortKind] < b[sortKind] ? -1 : a[sortKind] > b[sortKind] ? 1 : 0;
    })

    }
    
  handleSearchChange(event){
 event.preventDefault()
 this.setState({filter:event.target.value})
    if(event.target.value === ""){
      this.state.display = "normal"
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
              <button className="dropdown-item" value = "name" onClick = {e=>this.handleSortChange(e)}>Name</button>
              <button className="dropdown-item" value = "title"onClick = {e=>this.handleSortChange(e)}>Title</button>
              <button className="dropdown-item" value = "email" onClick = {e=>this.handleSortChange(e)}>eMail</button>
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