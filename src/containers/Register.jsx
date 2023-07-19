import React, { useState } from 'react';
import { Link, matchPath } from 'react-router-dom';
import { connect } from 'react-redux'
import '../assets/styles/components/Register.scss'
import { registerRequest } from '../Actions/index'
import Header from '../components/Header';

const Register = props => {

    const handleSubmit = event => {
        event.preventDefault();
        props.registerRequest(form);
        props.history.push('/');
    };

    const [form, setForm] = useState({
        email: '',
        name: '',
        password: '',
    });

    const handleInput = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };



    return (
        <>
        <Header isRegister />
            <section className='register'>
                <section className='register__container'>
                    <h2>Regístrate</h2>
                    <form className='register__container--form' onSubmit={handleSubmit}>
                        <input
                            required
                            name='name'
                            className='input'
                            type='text'
                            placeholder='Nombre'
                            onChange={handleInput}
                        />
                        <input
                            required
                            name='email'
                            className='input'
                            type='text'
                            placeholder='Correo'
                            onChange={handleInput}

                        />
                        <input
                            required
                            name='password'
                            className='input'
                            type='password'
                            placeholder='Contraseña'
                            onChange={handleInput}

                        />
                        <button className='button'>Registrarme</button>
                    </form>
                    <Link to="/login">Iniciar sesión</Link>
                </section>
            </section>
        </>
    );
}
const mapDispatchToProps = {
    registerRequest,
  };

export default connect(null, mapDispatchToProps)(Register);