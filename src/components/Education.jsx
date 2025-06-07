import React, { useState } from "react";


function Education() {


    const [formData, setFormData] = useState({
        schoolName: '',
        titleofStudy: '',
        dateofStudy: ''
    })
    
    const [submittedData, setSubmittedData] = useState({
        schoolName: '',
        titleofStudy: '',
        dateofStudy: ''   
    })
    
    const [isEditing, setIsEditing] = useState(true)
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prev => ({ ...prev, [name]:value }))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData)
        setIsEditing(false)
    }
    const handleEdit = () => {
          setFormData(submittedData)
          setIsEditing(true)
    }

    return (
        <>
        {isEditing ? 
        (<form onSubmit={handleSubmit}>
            <input
                value={formData.schoolName}
                type='text'
                name='schoolName'
                placeholder="schoolName"
                onChange={handleChange}
            />
             <br />
            <input
                value={formData.titleofStudy}
                type='text'
                name='titleofStudy'
                placeholder="titleofStudy"
                onChange={handleChange}
            />
             <br />
            <input
                value={formData.dateofStudy}
                type='date'
                name='dateofStudy'
                placeholder="dateofStudy"
                onChange={handleChange}
            />
             <br />
            <button type="submit">Submit</button>
        </form> ) : (
            <>
                <p><strong>School Name:</strong>{submittedData.schoolName}</p>
                <p><strong>Title of Study:</strong>{submittedData.titleofStudy}</p>
                <p><strong>Date of Study:</strong>{submittedData.dateofStudy}</p>
                <p><button onClick = {handleEdit}>Edit</button></p> 
            </>
        )}
        </>
    )
}

export default Education;