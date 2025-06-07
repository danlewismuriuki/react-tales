import React, { useState } from "react";

function Experience() {

    const [formData, setFormData] = useState({
        companyName: '',
        positionTitle: '',
        mainResponsibilities: '',
        dateFrom: '',
        dateTo: ''
    })

    const [submittedData, setSubmittedData] = useState({
        companyName: '',
        positionTitle: '',
        mainResponsibilities: '',
        dateFrom: '',
        dateTo: ''
    })

    const [isEditing, setEditing] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData)
        setEditing(false)
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleEdit = () => {
        setFormData(submittedData)
        setEditing(true);
    };

    return (
        <>
            {  isEditing ?
                (
                <form onSubmit={handleSubmit}>
                    <input
                    value={formData.companyName}
                    name='companyName'
                    type='text'
                    placeholder="companyName"
                    onChange={handleChange}
                    />
                     <br />
                    <input
                    value={formData.positionTitle}
                    name='positionTitle'
                    type='text'
                    placeholder="positionTitle"
                    onChange={handleChange}
                    />
                     <br />
                    <input
                    value={formData.mainResponsibilities}
                    name='mainResponsibilities'
                    placeholder="mainResponsibilities"
                    type='text'
                    onChange={handleChange}
                    />
                    <br />
                    <input
                    value={formData.dateTo}
                    name='dateTo'
                    type='date'
                    placeholder="date To"
                    onChange={handleChange}
                    />
                     <br />
                    <input
                    value={formData.dateFrom}
                    name='dateFrom'
                    placeholder='dateFrom'
                    type='date'
                    onChange={handleChange}
                    />
                     <br />
                    <button type='submit'>Submit</button>
                </form>
                ) : (
                    <>
                        <p><strong>{submittedData.companyName}</strong></p>
                        <p><strong>{submittedData.positionTitle}</strong></p>
                        <p><strong>{submittedData.mainResponsibilities}</strong></p>
                        <p><strong>{submittedData.dateTo}</strong></p>
                        <p><strong>{submittedData.dateFrom}</strong></p>

                        <button onClick={handleEdit}>Edit</button>
                    </>
                )
            }
        </>
    )
}

export default Experience;