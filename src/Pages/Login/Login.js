import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle, FaGithub } from "react-icons/fa";


const Login = () => {
    const [error, setError] = useState('');

    const { signIn, providerLogin, setLoading } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }


    return (
        <div className='container w-50 p-5 mt-3 text-white rounded bg-success bg-lighten-sm'>
            <h1 className='mb-5'>Please, Login</h1>
            <Button onClick={handleGoogleSignIn} className='mb-2 d-block mx-auto btn-light' ><FaGoogle /> Login with Google</Button>
            <Button onClick={handleGithubSignIn} className='d-block mx-auto btn-dark'><FaGithub /> Login with Github</Button>

            <Form onSubmit={handleSubmit} className='w-75 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <button className="btn-light fw-bold rounded border fs-5 px-5 py-2" type="submit">
                    Login
                </button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
        </div>

    );
};

export default Login;