import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import '@/styles/globals.css'
import '@/styles/bootstrap.min.css'
import '@/styles/style.css'
import '@/styles/responsive.css'

import '@/styles/animate.min.css'
import '@/styles/fontawsome.min.css'
import '@/styles/meanmenu.min.css'
// import '@/styles/owl.carousel.min.css'
// import '@/styles/owl.theme.default.min.css'
import '@/styles/nice-select.min.css'
import '@/styles/barfiller.min.css'
import '@/styles/magnific-popup.min.css'
import '@/styles/odometer.min.css'



export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
