import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from 'react-helmet'
  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  


const Layout = ({children, Title ,description, keywords, author}) => {
  return (
    <div>
       <Helmet>
           <meta charSet="UTF-8" />
           <meta name="description" content={description} />
           <meta name="keywords" content={keywords} />
           <meta name="author" content={author} />
           <title>{Title}</title>
        </Helmet>
     <Header />
     <main style={{minHeight: "75vh"}}>
        <ToastContainer/>
        {children}
     </main>
    <Footer />
    </div>

  )
}

export default Layout