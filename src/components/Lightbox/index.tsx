'use client'
import Image from 'next/image'
import { useState } from 'react'
import Modal from './Modal'

interface ImageLightboxProps {
  image: string
  title: string
}

export default function Lightbox({ image, title }: ImageLightboxProps) {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <>
      <Image
        src={image}
        alt={title}
        width={200}
        height={224}
        priority
        className='w-auto h-auto'
        onClick={openModal}
      />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        image={image}
        title={title}
      />
    </>
  )
}
