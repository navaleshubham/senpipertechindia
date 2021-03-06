import React, { Component } from 'react'
import './home.css'
export default class home extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            phone: '',
            servicerating: '',
            beveragerating: '',
            cleanrating: '',
            overallrating: '',
            name: '',
            errorsphone: '',
            erroremail: '',
            errorsname: '',
            errorsservicerating: '',
            errorsbeveragerating: '',
            errorscleanrating: '',
            errorsoverallrating: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        if (this.state.email.indexOf('@') !== -1 && this.state.email !== '' && this.state.email.indexOf('.') !== -1) {
            this.setState({
                erroremail: ''
            })
        }
        else{
            this.setState({
                erroremail: 'Error: Please check the email'
            })
        }
        if (this.state.name !== '') {
            this.setState({
                errorsname: ''
            })
        }
        if (this.state.phone !== '') {
            this.setState({
                errorsphone: ''
            })
        }
        if (this.state.overallrating !== '') {
            this.setState({
                errorsoverallrating: ''
            })
        }
        if (this.state.servicerating !== '') {
            this.setState({
                errorsservicerating: ''
            })
        }
        if (this.state.beveragerating !== '') {
            this.setState({
                errorsbeveragerating: ''
            })
        }
        if (this.state.cleanrating !== '') {
            this.setState({
                errorscleanrating: ''
            })
        }
    }
    onSubmit(e) {
        e.preventDefault()
        if (this.state.email.indexOf('@') === -1 || this.state.email === '' || this.state.email.indexOf('.') === -1) {
            this.setState({
                erroremail: 'Error: Please check the email'
            })
        }
        if (this.state.name === '' || this.state.phone === '' ||  this.state.servicerating===''|| this.state.cleanrating==='' || this.state.beveragerating==='' || this.state.overallrating==='') {
            if (this.state.name === '') {
                this.setState({
                    errorsname: 'Error: This is a mandatory field'
                })
            }
            if (this.state.phone === '') {
                this.setState({
                    errorsphone: 'Error: This is a mandatory field'
                })
            }
            if (this.state.overallrating === '') {
                this.setState({
                    errorsoverallrating: 'Error: This is a mandatory field'
                })
            }
            if (this.state.servicerating === '') {
                this.setState({
                    errorsservicerating: 'Error: This is a mandatory field'
                })
            }
            if (this.state.beveragerating === '') {
                this.setState({
                    errorsbeveragerating: 'Error: This is a mandatory field'
                })
            }
            if (this.state.cleanrating === '') {
                this.setState({
                    errorscleanrating: 'Error: This is a mandatory field'
                })
            }
            console.log(this.state)
        }
        else {
            var di = {}
            var doc = []
            doc = JSON.parse(localStorage.getItem('feedbacks'))
            if (doc === null) {
                doc = []
            }
            di.email = this.state.email
            di.phone = this.state.phone
            di.servicerating = this.state.servicerating
            di.beveragerating = this.state.beveragerating
            di.cleanrating = this.state.cleanrating
            di.overallrating = this.state.overallrating
            di.name = this.state.name
            console.log(di)
            doc.push(di)
            localStorage.setItem('feedbacks', JSON.stringify(doc))
            alert('Thank you for completing the information!')
            this.data = doc
            window.history.go(0)
        }
    }

    render() {
        return (
            <div>

                <nav>
                    <div className="nav nav-tabs bg-white" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Feedback Form</a>
                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">All Feedbacks</a>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active pb-4" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div>
                            <h3 className='h4 mt-3 ml-lg-4' style={{ color: 'teal' }}>Aromatic Bar</h3>
                            <p className='ml-lg-4' style={{ color: "grey" }}>We are committed to providing you with the best dining experience possible, so we welcome your comments. Please fill out this questionnaire. Thank you</p>
                        </div>
                        <div className='container bg-white mt-3 form-height'>
                            <div className='row'>
                                <div className='col-sm-12 text-center'>
                                    <q  style={{ color: "grey" }}>We don't share your information with anyone.</q>
                                </div>
                                <div className='col-sm-12 '>
                                    <label>Name</label>
                                    <br></br>
                                    <div className="input-group namewidth" >
                                        <input type="text" className="form-control" name='name' onChange={this.onChange} ></input>
                                    </div>
                                    <br></br>
                                    {this.state.errorsname !== '' ? <span style={{ color: "red" }}>{this.state.errorsname}</span> : null}
                                </div>
                            </div>
                            <div className='row '>
                                <div className='col-sm-12 col-md-12 col-lg-6'>
                                    <label>Email</label>
                                    <br></br>
                                    <div className="input-group" style={{ width: '95%' }}>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">@</span>
                                        </div>
                                        <input className="form-control" name='email' type='email' onChange={this.onChange}></input>
                                    </div>
                                    {this.state.erroremail !== '' ? <span style={{ color: "red" }}>{this.state.erroremail}</span> : null}
                                </div>
                                <div className='col-sm-12 col-md-12 col-lg-6'>
                                    <label>Phone</label>
                                    <br></br>
                                    <div className="input-group" style={{ width: '95%' }}>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1" style={{ maxWidth: '50px', maxHeight: '33px', padding: '0px' }}><img style={{ maxWidth: '50px', maxHeight: '33px', padding: '0px' }} src='https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg' alt="    +91"></img></span>
                                        </div>
                                        <input type="number" className="form-control" name='phone' onChange={this.onChange} aria-describedby="basic-addon1"></input>
                                    </div>
                                    {this.state.errorsphone !== '' ? <span style={{ color: "red" }}>{this.state.errorsphone}</span> : null}
                                </div>
                            </div>
                            <div className='row pt-3'>
                                <div className='col-sm-12 col-md-12 col-lg-6'>
                                    <label>Please rate the quality of the service you received from your host.</label>
                                    <br></br>
                                    <div className='row ml-1'>
                                        <input name='servicerating' type='radio' value='Excellent' onChange={this.onChange}></input>
                                        <label className='px-2 pr-md-5  pl-md-3 text-center'>Excellent</label>
                                        <input name='servicerating' type='radio' value='Good' onChange={this.onChange}></input>
                                        <label className='px-2 pr-md-5 pl-md-3'>Good</label>
                                        <input name='servicerating' type='radio' value='Fair' onChange={this.onChange}></input>
                                        <label className='px-2 pr-md-5 pl-md-3'>Fair</label>
                                        <input name='servicerating' type='radio' value='Bad' onChange={this.onChange}></input>
                                        <label className='px-2 pr-md-5 pl-md-3'>Bad</label>
                                    </div>
                                    {this.state.errorsservicerating !== '' ? <span style={{ color: "red" }} className='ml-2'>{this.state.errorsservicerating}</span> : null}
                                </div>
                                <div className='col-sm-12 col-md-12 col-lg-6'>
                                    <label>Please rate the quality of your beverage.</label>
                                    <br></br>
                                    <div className='row ml-1'>
                                        <input name='beveragerating' type='radio' value='Excellent' onChange={this.onChange}></input>
                                        <label className='px-2 pr-md-5  pl-md-3 text-center'>Excellent</label>
                                        <input name='beveragerating' type='radio' value='Good' onChange={this.onChange}></input>
                                        <label className='px-2 pr-md-5 pl-md-3'>Good</label>
                                        <input name='beveragerating' type='radio' value='Fair' onChange={this.onChange}></input>
                                        <label className='px-2 pr-md-5 pl-md-3'>Fair</label>
                                        <input name='beveragerating' type='radio' value='Bad' onChange={this.onChange}></input>
                                        <label className='px-2 pr-md-5 pl-md-3'>Bad</label>
                                    </div>
                                    {this.state.errorsbeveragerating !== '' ? <span style={{ color: "red" }} className='ml-2'>{this.state.errorsbeveragerating}</span> : null}
                                </div>
                            </div>
                            <div className='row pt-3'>
                                <div className='col-sm-12 col-md-12 col-lg-6'>
                                    <label>Was our restaurant clean?</label>
                                    <br></br>
                                    <div className='row ml-1'>
                                        <input name='cleanrating' type='radio' value='Excellent' onChange={this.onChange}></input>
                                        <label className='px-2 pr-md-5  pl-md-3 text-center'>Excellent</label>
                                        <input name='cleanrating' type='radio' value='Good' onChange={this.onChange}></input>
                                        <label className='px-2 pr-md-5 pl-md-3'>Good</label>
                                        <input name='cleanrating' type='radio' value='Fair' onChange={this.onChange}></input>
                                        <label className='px-2 pr-md-5 pl-md-3'>Fair</label>
                                        <input name='cleanrating' type='radio' value='Bad' onChange={this.onChange}></input>
                                        <label className='px-2 pr-md-5 pl-md-3'>Bad</label>
                                    </div>
                                    {this.state.errorscleanrating !== '' ? <span style={{ color: "red" }} className='ml-2'>{this.state.errorscleanrating}</span> : null}
                                </div>
                                <div className='col-sm-12 col-md-12 col-lg-6'>
                                    <label>Please rate your overall dining experience.</label>
                                    <br></br>
                                    <div className='row ml-1'>
                                        <input name='overallrating' type='radio' value='Excellent' onChange={this.onChange}></input>
                                        <label className='px-2 pr-md-5  pl-md-3 text-center'>Excellent</label>
                                        <input name='overallrating' type='radio' value='Good' onChange={this.onChange}></input>
                                        <label className='px-2 pr-md-5 pl-md-3'>Good</label>
                                        <input name='overallrating' type='radio' value='Fair' onChange={this.onChange}></input>
                                        <label className='px-2 pr-md-5 pl-md-3'>Fair</label>
                                        <input name='overallrating' type='radio' value='Bad' onChange={this.onChange}></input>
                                        <label className='px-2 pr-md-5 pl-md-3'>Bad</label>
                                    </div>
                                    {this.state.errorsoverallrating !== '' ? <span style={{ color: "red" }} className='ml-2'>{this.state.errorsoverallrating}</span> : null}
                                </div>
                            </div>

                            <div className='d-flex justify-content-between align-bottom submitbtn'>
                                <div></div>
                                <button className='btn btn-success border-3 mb-5' onClick={this.onSubmit}>
                                    Submit
                                    </button>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div>
                            <h2 className='h2 mt-3'>All Feedbacks</h2>
                            <div className='table-responsive'>
                                <table className="table container mt-5">
                                    <thead style={{ backgroundColor: '#C4AFEE' }}>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Service Rating</th>
                                            <th scope="col">Beverage Rating</th>
                                            <th scope="col">Clean Rating</th>
                                            <th scope="col">Overall Rating</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody className='bg-white'>
                                        {localStorage.getItem('feedbacks') ?
                                            <>{
                                                JSON.parse(localStorage.getItem('feedbacks')).map((numList, i) => (
                                                    <tr key={i}>
                                                        <td> {i + 1}</td>
                                                        <td> {numList.name}</td>
                                                        <td> {numList.email}</td>
                                                        <td> {numList.phone}</td>
                                                        <td> {numList.servicerating}</td>
                                                        <td> {numList.beveragerating}</td>
                                                        <td> {numList.cleanrating}</td>
                                                        <td> {numList.overallrating}</td>
                                                    </tr>
                                                ))
                                            }</> : null
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
