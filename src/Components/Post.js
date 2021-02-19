import React, { Component } from 'react'



class Post extends Component {
    constructor(props) {
        super(props)

        this.state = {
            jobtitle: "",
            location: "",
            maxyr:"",
            minyr:"" ,
            jobdes:"",
            category:"",
            functionarea:"",
            mingraduate:"",
            maxgraduate:"",
            tag:""


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    ahandler = (event) => {
        this.setState({
            jobtitle: event.target.value
        })
    }
    bhandler = (event) => {
        this.setState({
            location: event.target.value
        })
    }
    
    chandler = (event) => {
        this.setState({
            maxyr: event.target.value
        })
    }
    dhandler = (event) => {
        this.setState({
            minyr: event.target.value
        })
    }
    ehandler = (event) => {
        this.setState({
            jobdes: event.target.value
        })
    }
    fhandler = (event) => {
        this.setState({
            category: event.target.value
        })
    }
    ghandler = (event) => {
        this.setState({
            functionarea: event.target.value
        })
    }
    hhandler = (event) => {
        this.setState({
            mingraduate: event.target.value
        })
    }
    ihandler = (event) => {
        this.setState({
            maxgraduate: event.target.value
        })
    }
    jhandler = (event) => {
        this.setState({
            tag: event.target.value
        })
    }
    
    
  
  
    handleSubmit = (event) => {
        alert(`${this.state.jobtitle} Job Posted Successfully !!!!`)
        console.log(this.state);
        this.setState({
            jobtitle: "",
            location: "",
            maxyr:"",
            minyr:"" ,
            jobdes:"",
            category:"",
            functionarea:"",
            mingraduate:"",
            maxgraduate:"",
            tag:""
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>User Registration</h1>
                    <label>Job Title*</label> <input type="text" value={this.state.jobtitle} onChange={this.ahandler} placeholder="Write a title appropriately describes the job" /><br />
                    <label>Location</label> <input type="text" value={this.state.location} onChange={this.bhandler} placeholder="+Add location" /><br />
                
                    <label>Years of experience</label> <br></br>
                    <select onChange={this.chandler} >
                        <option defaultValue>Select Min</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        </select>
                    <select onChange={this.dhandler} >
                        <option defaultValue>Select Max</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select><br />
                    <label>Job Description*</label> <input type="text" value={this.state.jobdes} onChange={this.ehandler} placeholder="Write a title appropriately describes the job" /><br />
                    <h1>Targeting</h1><br></br> 
                       
                    <label>Category</label>  <label>Function Area*</label> <br></br>
                    <select onChange={this.fhandler} >
                        <option defaultValue>Select</option>
                        <option value="Software">Software</option>
                        <option value="HR">HR</option>
                        </select>
                           
                  
                    <select onChange={this.ghandler} >
                        <option defaultValue>Select</option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                    <label>Graduating Year</label> <br></br>
                    <select onChange={this.hhandler} >
                        <option defaultValue>Min Batch</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        </select>
                           
                  
                    <select onChange={this.ihandler} >
                        <option defaultValue>Max Batch</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                    </select><br></br>

                    <label>Tags</label><br></br> <input type="text" value={this.state.tag} onChange={this.jhandler} placeholder="+Add Tag" /><br />

                    <input type="submit" value="Submit" />
                </form>

            </div>
            
        )
    }
}



export default Post