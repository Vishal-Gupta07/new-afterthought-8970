import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Stack,
    Text,
    HStack,
  } from '@chakra-ui/react'
import { useState } from 'react';

function Model({image,title,price,rating}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [count,setCount] = useState(1)
    const handleSub = () => {
      setCount(count - 1)
    }
    const handleAdd = () => {
      setCount(count + 1)
    }
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack>
                <img src={image} alt="" />
                <Text>{title}</Text>
                <Text>Price : {price}</Text>
                <HStack>
                <Button onClick={() => {
                  handleSub(-1)
                }}
                >-</Button>
                <Button>{count}</Button>
                <Button
                onClick={() => {
                  handleAdd(+1)
                }}
                >+</Button>
                </HStack>
                <Text>
                  Totole Price : {count*price}
                </Text>
              </Stack>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  

export default Model;