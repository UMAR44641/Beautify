import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
  import Productdetails from './Productdetails'
  export default function Modaltemplate({innertext,width,image_link,name,price,brand,id}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button width={width} onClick={onOpen}>{innertext}</Button>
  
        <Modal isOpen={isOpen} onClose={onClose} marginTop="100px">
          <ModalOverlay />
          <ModalContent  height="450px">
            <Productdetails  name={name} image_link={image_link} brand={brand} price={price} id={id} />
          </ModalContent>
        </Modal>
      </>
    )
  }