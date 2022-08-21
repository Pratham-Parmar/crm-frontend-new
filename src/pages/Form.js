import React, {useEffect, useState} from 'react'
// import { useForm } from 'react-hook-form';
// const { useForm } = ReactHookForm
import "./form.css"
import BASE_URL from '../config'
import {useNavigate} from 'react-router-dom'


const Form = () => {
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({source: '', destination: '', rate: 0, email: '', container_size: ''});
    const [ports, setPort] = useState([])

    useEffect(() => {
        fetch(BASE_URL + '/ports', {
            method: 'GET',
            credentials: 'include'
        }).then(async response => {
            if (response.status === 200) {
                let pts = await response.json()
                setPort(pts)
            }
        })
    }, [])

    const handleInputChange = (e) => {
        e.persist();
        setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}));
    }

    useEffect(() => {
        if (!("Login_status" in localStorage && localStorage.getItem("Login_status") == "true")) navigate("/login")
    }, [])
    const sendMessage = (e) => {
        if (e) e.preventDefault();
        // console.log(BASE_URL + "/add")
        fetch(BASE_URL + '/add', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(inputs),
            // redirect: "manual"
        }).then(response => {
            if (response.status === 200) {
                navigate("/table")
            }
        })
    }
    return (
        <div className="contact__wrap">
            <h1>Add Rates</h1>
            <form
                // onSubmit={e => sendMessage(e)}
                className="contact__form">
                <div>
                    <label>
                        <input
                            name='exim'
                            type="radio"
                            defaultChecked={true}
                            value="Import"
                            // checked={setselectedOption1("Import")}
                            onChange={e => handleInputChange(e)}
                        />
                        Import
                    </label>
                    <label>
                        <input
                            name='exim'
                            type="radio"
                            value="Export"
                            // checked={setselectedOption1("Export")}
                            onChange={e => handleInputChange(e)}
                        />
                        Export
                    </label>
                </div>
                <span>
                Port Of Loading
                <select
                    style={{width:'fit-content',marginLeft:'20px'}}
                    value={inputs.source}
                    onChange={e => handleInputChange(e)}
                    type="text" name="source"
                    placeholder="source"
                    title="Port of Loading"
                    required>
                    {ports.map(item => (
                        <option value={item}>{item}</option>))}
                </select>
                </span>


                <span>
                Port Of Destination
                <select
                    style={{width:'fit-content',marginLeft:'20px'}}
                    value={inputs.destination}
                    onChange={e => handleInputChange(e)}
                    type="text" name="destination"
                    placeholder="destination"
                    title="Port of Destination"
                    required>
                    {ports.map(item => (
                        <option value={item}>{item}</option>))}
                </select>
                </span>
                <div style={{display: 'flex', flexDirection: "row"}}>
                    <h3 style={{marginRight: 20}}>
                        Container Size
                    </h3>

                    <label>
                        <input
                            name='container_size'
                            defaultChecked={true}
                            type="radio"
                            value="20FT"
                            // checked={setselectedOption1("Import")}
                            onChange={e => handleInputChange(e)}
                        />
                        20FT
                    </label>
                    <label>
                        <input
                            name='container_size'
                            type="radio"
                            value="40FT"
                            // checked={setselectedOption1("Export")}
                            onChange={e => handleInputChange(e)}
                        />
                        40FT
                    </label>
                    <label>
                        <input
                            name='container_size'
                            type="radio"
                            value="40HQ"
                            // checked={setselectedOption1("Export")}
                            onChange={e => handleInputChange(e)}
                        />
                        40HQ
                    </label>
                </div>
                <span>
                    Rate
                <input
                    value={inputs.rate}
                    onChange={e => handleInputChange(e)}
                    style={{width:'fit-content',marginLeft:'20px'}}
                    type="number" name="rate"
                    placeholder="rate"
                    title="Rate"
                    required/>
                </span>
                <input
                    type="submit"
                    onClick={sendMessage}
                    value="SUBMIT"/>
            </form>
        </div>
    )
}

export default Form