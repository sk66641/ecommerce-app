import React from 'react'
import {Link} from 'react-router-dom';
import Layout from '../components/layout/Layout'

const PageNotFound = () => {
  return (
    <Layout Title={"Go-back"}>
        <div className='pnf'>
          <h1 className='pnf-title'>404</h1>
          <h2 className='pnf-heading'>Oops ! Page Not Found</h2>
          < Link to='/' classname='pnf-btn'>
          <button>Go Back</button>
          </Link>
        </div>
    </Layout>
  )
}

export default PageNotFound 