/* eslint-disable react/no-unknown-property */
'use client'

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/modal'
import { type Element } from '@/types/element'
import Atomo2D from './Atom'

interface ModalAtomProps {
  atom: Element | null
  isOpen: boolean
  onClose: () => void
}

export default function ModalAtom ({ atom, isOpen, onClose }: ModalAtomProps) {
  return (
    <Modal size='4xl' backdrop='blur' isOpen={isOpen} onClose={onClose} className='relative z-50'>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{atom?.name}</ModalHeader>
            <ModalBody className='w-full flex justify-between'>
              <div>
                <h2>{atom?.name}</h2>
                <p>{atom?.summary}</p>
              </div>
              <Atomo2D />
            </ModalBody>
            <ModalFooter>
              {/* <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button> */}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
