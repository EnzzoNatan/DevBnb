import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className='flex items-center'>
        <div className='mx-auto max-w-96 gap-4 flex flex-col items-center w-full ' >
        
            <h1 className='text-3xl font-bold'>Faça seu login</h1>

            <form className='flex flex-col gap-4 w-full'>
                
                <input type="email" className=' w-full border border-gray-200 rounded-full px-4 py-2'
                placeholder='Digite seu e-mail'/>
                
                
                
                <input type="password" className=' w-full border border-gray-200 rounded-full px-4 py-2'
                placeholder='Digite sua senha'/>
                
                <button className='cursor-pointer w-full border border-gray-200 rounded-full px-4 py-2 bg-primary-400 text-white font-bold'>Login</button>
            </form>
        
            <p> Ainda não possui uma conta?  <Link to="/    register" className='underline font-semibold'>Registre-se aqui!</Link> </p>


        </div>
  
    </section>
  )
}

export default Login