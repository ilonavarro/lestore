import Image from 'next/image'
import logo from 'public/images/lestore.png'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex justify-center items-center border-b border-b-gray-300 p-4'>
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
    </header>
  )
}
