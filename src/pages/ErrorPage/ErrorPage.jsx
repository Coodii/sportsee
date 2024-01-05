import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './errorPage.css';

function ErrorPage() {
  return (
    <div className=''>
    <Header/>
    <main >
        <h1 className='error_message'>Une erreur est survenue.</h1>
    </main>
    <Footer/>
    </div>
  )

}

export default ErrorPage