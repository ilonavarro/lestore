import Image from 'next/image'
import logo from 'public/images/lestore.png'
import Link from 'next/link'
import UserBar from '../UserBar'

export default function Header() {
  return (
    <>
      <header className='flex flex-col justify-center items-center border-b border-b-gray-300 p-4'>
        <UserBar />
        <div>
          <Link href='/'>
            <Image
              src={logo}
              alt='LEStore logo'
              width={250}
              height={250}
              priority
              className='w-auto h-auto'
            />
          </Link>
        </div>
      </header>
    </>
  )
}
