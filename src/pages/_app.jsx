import '@/styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/components/Navbar';
import NavbarCompressed from '@/components/NavbarCompressed';
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <header>
        {router.pathname.match("/supplier/add") ? <NavbarCompressed /> : <Navbar />}
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}
