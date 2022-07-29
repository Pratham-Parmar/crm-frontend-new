import React, {useEffect, useState} from 'react'
// import { useForm } from 'react-hook-form';
// const { useForm } = ReactHookForm
import "./form.css"
import BASE_URL from '../config'
import { useNavigate } from 'react-router-dom'


const Form = () => {
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({source: '', destination: '', rate: 0, email: '', container_size: ''});
    const handleInputChange = (e) => {
        e.persist();
        setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}));
    }

    useEffect(()=>{
        if(!("Login_status" in localStorage && localStorage.getItem("Login_status") == "true")) navigate("/login")
    },[])
    const sendMessage = (e) => {
        if (e) e.preventDefault();
        // console.log(BASE_URL + "/add")
        fetch(`https://rate-crm.herokuapp.com/add`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(inputs),
            // redirect: "manual"
        }).then(response => {
            if(response.status === 200){
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
                <select
                    value={inputs.source}
                    onChange={e => handleInputChange(e)}
                    type="text" name="source"
                    placeholder="source"
                    title="Port of Loading"
                    required>
                        {["Port of Loading", "NHAVA SHEVA", "HAZIRA", "CHENNAI", "MUNDRA", "ICD TKD", "Qingdao", "SHANGHAI", "TAINJIN", "SHEKOU", "FUZHOU", "NINGBO", "NANSHA"].map(item => (<option value={item}>{item}</option>))}
                    </select>
                <select
                    value={inputs.destination}
                    onChange={e => handleInputChange(e)}
                    type="text" name="destination"
                    placeholder="destination"
                    title="Port of Destination"
                    required>
                        {["Port of Destination","NHAVA SHEVA", "HAZIRA", "CHENNAI", "MUNDRA", "ICD TKD", "Qingdao", "SHANGHAI", "TAINJIN", "SHEKOU", "FUZHOU", "NINGBO", "NANSHA"].map(item => (<option value={item}>{item}</option>))}
                    </select>
                <div style={{display: 'flex', flexDirection: "row"}}>

                    <h3 style={{marginRight: 20}}>
                        Container Size
                    </h3>

                    <label>
                        <input
                            name='container_size'
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
                <input
                    value={inputs.rate}
                    onChange={e => handleInputChange(e)}
                    type="number" name="rate"
                    placeholder="rate"
                    title="Rate"
                    required/>
                <input
                    value={inputs.uploader}
                    onChange={e => handleInputChange(e)}
                    name="email"
                    placeholder="Uploaded By"
                    title="Uploader By"
                    required/>
                <input
                    type="submit"
                    onClick={sendMessage}
                    value="SUBMIT"/>
            </form>
        </div>
    )
}

export default Form