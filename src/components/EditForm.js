
import React, { Component } from 'react'

export class PatchForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            id: props.id,
            name: props.name,
            lastName: props.lastName,
            age: props.age,
            email: props.email,
            salary: props.salary,
            company: props.company,
            image: props.image
        }
    }


    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }


    render(){
        const { name, lastName, age, email, salary, company, image} = this.state
        return(
            <div className="modal fade" id="editModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                            <div className="form-group">
                                    <label className="col-form-label">Name:</label>
                                    <input type="text" className="form-control" name="name" value={name} onChange={this.changeHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label className="col-form-label">Last name:</label>
                                    <input type="text" className="form-control" name="lastName" value={lastName} onChange={this.changeHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label className="col-form-label">Age:</label>
                                    <input type="number" className="form-control" name="age" value={age} onChange={this.changeHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label className="col-form-label">Email:</label>
                                    <input type="email" className="form-control" name="email" value={email} onChange={this.changeHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label className="col-form-label">Salary (MXNgit):</label>
                                    <input type="number" className="form-control" name="salary" value={salary} onChange={this.changeHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label className="col-form-label">Company:</label>
                                    <input type="text" readOnly className="form-control" name="company" placeholder={company} onChange={this.changeHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label className="col-form-label">URL img:</label>
                                    <input type="text" className="form-control" name="company" value={image} onChange={this.changeHandler}></input>
                                </div>
                                {/* <button type="submit">Submit</button> */}
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary" id="submitButton" onClick={() => {
                                        window.location.reload()
                                    }}>Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default PatchForm