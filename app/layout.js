
import './globals.css'
import { Rubik} from 'next/font/google'


const inter = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'DIY HRT BR',
  description: '055 HRT INFO',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className='bg-[#1C0E23] flex flex-row items-center justify-around py-4'>
              <h1 className='text-4xl'>DIY HRT BR</h1>
              <nav className='max-w-5xl h-20 flex flex-row space-x-1 justify-center content-center items-center justify-between'>
                

                <div className='flex flex-row space-x-1 justify-center content-center items-center justify-evenly '>
                  <ul className='hover:bg-sky-700 rounded-lg p-2'><a href='/'>Guia HRT</a></ul>
                  <ul className='hover:bg-sky-700 rounded-lg p-2'><a href='/links'>Links úteis</a></ul>
                  <ul className='hover:bg-sky-700 rounded-lg p-2'><a href=''>Comprar</a></ul>
                  <ul className='hover:bg-sky-700 rounded-lg p-2'><a href=''>Sobre</a></ul>
                </div>

              </nav>

          </header>
        
        {children}
      
      
      </body>
    </html>
  )
}
