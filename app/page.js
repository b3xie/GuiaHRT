  'use client'
  import Image from 'next/image'
  import Guide from './texts/guide'

  export default function Home() {
    return (
        <main className='flex justify-center pt-36'>
          
          <section className='flex flex-row max-w-5xl space-x-7 text-black'>
            <article className='text-black'>
              <Guide></Guide>
            </article>
          </section>
        </main>
    )
  }
