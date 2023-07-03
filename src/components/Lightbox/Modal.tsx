import Image from 'next/image'

interface ModalProps {
  showModal: boolean
  setShowModal: (value: boolean) => void
  image: string
  title: string
}

export default function Modal({ showModal, setShowModal, image, title }: ModalProps) {
  return (
    <>
      {showModal ? (
        <div
          className='w-full h-full fixed top-0 left-0 flex justify-center items-center 
        bg-black/50'
          onClick={() => setShowModal(false)}
        >
          <div className='w-[70%] h-[70%] bg-white p-10 z-10 rounded-md flex flex-col justify-center items-center'>
            <Image
              src={image}
              alt={title}
              width={200}
              height={224}
              priority
              className='w-auto h-auto'
            />
          </div>
        </div>
      ) : null}
    </>
  )
}
