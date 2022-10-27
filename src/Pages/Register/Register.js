import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const [error, setError] = useState(null);

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                form.reset();
                handleUpdateUserProfile(name, photoURL)
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            });
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.log(error))
    }


    return (
        <div className='container w-50 px-5 py-4 mt-3 text-white rounded bg-success bg-lighten-sm'>
            <h1 className='mb-4'>Please, Register</h1>
            <Form onSubmit={handleSubmit} className='w-75 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Enter photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <button className="btn-light fw-bold rounded border fs-5 px-5 py-2" type="submit">
                    Register
                </button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};


export default Register;