/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Imagen from '../assets/fondo.avif';
import Perfil from '../assets/login.png';
import appFirebase from '../credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth(appFirebase);

const login = () => {
    const [registrando, setRegistrando] = useState(false);

    const functAutenticacion = async (e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        if (registrando) {
            try {
                await createUserWithEmailAndPassword(auth, correo, contraseña);
                toast.success('Usuario registrado con éxito!', { position: 'top-right', autoClose: 5000 });
            } catch (error) {
                toast.error('Asegúrese que el correo este bien escrito y la contraseña tenga más de 8 caracteres. Si persiste el error intente con otro correo', { position: 'top-right', autoClose: 5000 });
            }
        } else {
            try {
                await signInWithEmailAndPassword(auth, correo, contraseña);
                toast.success('Inicio de sesión exitoso!', { position: 'top-right', autoClose: 5000 });
            } catch (error) {
                toast.error('El correo o la contraseña son incorrectos. Recuerda si en caso ahun no esta registrado en el sistema registrese por favor.', { position: 'top-right', autoClose: 5000 });
            }
        }
    };

    return (
        <div className='container'>
            <ToastContainer />
            <div className="row">
                <div className="col-md-5">
                    <div className="padre">
                        <div className="card card-body shadow-lg">
                            <img src={Perfil} alt="perfil" className='estilo-profile' />
                            <p className='tituloformulario'>{registrando ? "REGISTRARSE" : "INICIAR SESIÓN"}</p>
                            <p className='tituloformulario'>{registrando ? "Registrarse para ingresar al sistema" : "Inicia sesion con tu cuenta registrado"}</p>
                            <form onSubmit={functAutenticacion}>
                                <p>Ingresar Email :</p>
                                <input type="text" placeholder='ejemplo@gmail.com' className='cajatexto' id='email' />
                                <p>Ingresar Contraseña :</p>
                                <input type="password" placeholder='Contraseña mas de 8 letras' className='cajatexto' id='password' />
                                <button className='btnform'>{registrando ? "Registrate" : "Inicia sesión"}</button>
                            </form>
                            <h4 className='texto'>
                                {registrando ? "Usted ya tiene cuenta?" : "No tienes cuenta aun?"}
                                <button className='btnswicth' onClick={() => setRegistrando(!registrando)}>
                                    {registrando ? "Inicia sesión" : "Registrarme"}
                                </button>
                            </h4>
                            <p className='footerformulario'>¡ No te pierdas las últimas novedades... !</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <img src={Imagen} alt="Imagen de fondo" className='tamaño-imagen' />
                </div>
            </div>
        </div>
    );
}

export default login;
