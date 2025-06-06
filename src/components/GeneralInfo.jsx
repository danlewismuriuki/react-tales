import React, {useState} from 'react';

function GeneralInfo() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const [submittedName, setSubmittedName] = useState({
        name: '',
        email: '',
        phone: ''
    })
    const [isEditing, setIsEditing] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name] : value}))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedName(formData);
        setIsEditing(false)
    };
    const handleEdit =() => {
        setFormData(submittedName);
        setIsEditing(true)
    }

    return (
        <>
        {isEditing ?
        (<form onSubmit={handleSubmit}>
                <input
                type='text'
                name="name" 
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                />
                <input
                type='email'
                name="email"
                value={formData.email}
                placeholder="email"
                onChange={handleChange}
                />
                <input
                type='text'
                name="phone"
                value={formData.phone}
                placeholder="phone"
                onChange={handleChange}
                />
                <button type="submit">Submit</button>
        </form>) : (
            <div>
            <p><strong>Name:</strong>{submittedName.name}</p>
            <p><strong>Email:</strong>{submittedName.email}</p>
            <p><strong>Phone:</strong>{submittedName.phone}</p>
            <button onClick={handleEdit}>Edit</button>
            </div>
        )}
        </>
    )
}

export default GeneralInfo;