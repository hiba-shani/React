import React, { useState } from 'react';
import './form.css';

const NormalForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        password: '',
        confirmPassword: '',
        gender: '',
    });

    const [errors, setErrors] = useState({});


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value

        }));
    }

        const validation = () => {
            const newErrors = {};
            const { name, email, age, password, confirmPassword, gender } = formData;

            if (!name.trim()) newErrors.name = "Name is required!";

            if (!email) newErrors.email = "Email is required!";
            else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Email is invalid";

            if (!age) newErrors.age = "Age is required";
            else if (isNaN(age) || age < 1 || age > 120) newErrors.age = "Age must be between 1 and 120";

            if (!password) newErrors.password = 'password is required';
            else if (password.length < 6) newErrors.password = "password must be atleast 6 characters";

            if (!confirmPassword) newErrors.confirmPassword = "please confirm your password";
            else if (password !== confirmPassword) newErrors.confirmPassword = 'password do not matched';

            if (!gender) newErrors.gender = "gender is required";

            return newErrors;


        }
    


    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validation();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
        } else {
            setErrors({})
            alert('form submitted successfully');
            console.log("form data:", formData);
            setFormData({
                name: '',
                email: '',
                age: '',
                password: '',
                confirmPassword: '',
                gender: '',

            });

        }

    }



    return (
        <form onSubmit={handleSubmit}>

            {/* name */}

            <div>
                <input type='text' name='name' value={formData.name} placeholder='Name' onChange={handleChange} />
                {errors.name && <p style={{color:'red'}}>errors.name</p>}
            </div>

            {/* email */}

            <div>
                <input type='email' name='email' value={formData.email} placeholder='Email' onChange={handleChange} />
                {errors.email && <p style={{color:'red'}}>errors.email</p>}
            </div>

            {/* age */}

            <div>
                <input type='text' name='age' value={formData.age} placeholder='Age' onChange={handleChange} />
                {errors.age && <p style={{color:'red'}}>errors.age</p>}
            </div>

            {/* password */}

            <div>
                <input type='password' name='password' value={formData.password} placeholder='Password' onChange={handleChange} />
                {errors.password && <p style={{color:'red'}}>errors.password</p>}
            </div>

            {/* confirm password */}

            <div>
                <input type='password' name='confirmPassword' value={formData.confirmPassword} placeholder='ConfirmPassword' onChange={handleChange} />
                {errors.confirmPassword && <p style={{color:'red'}}>errors.ConfirmPassword</p>}
            </div>

            {/* gender */}

            <div>
                <label>
                    <input type="radio" name='gender' value='male' onChange={handleChange} checked={formData.gender === "male"} />Male
                </label>

                <label>
                    <input type="radio" name='gender' value='female' onChange={handleChange} checked={formData.gender === "female"} />Female
                </label>
                {errors.gender && <p style={{color:'red'}}>errors.gender</p>}
            </div>

            <button>Submit</button>
        </form>
    )
}

export default NormalForm
