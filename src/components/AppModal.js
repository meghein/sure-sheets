import React, { useState } from 'react'
import Modal from 'react-modal'

export default function AppModal(props) {
  
  return (
    <div>
      <button onClick={props.openModal}>{props.name}</button>
      <Modal
        isOpen={props.openModal}
        onRequestClose={props.closeModal}
        contentLabel="Example Modal"
      >
        <button onClick={props.closeModal}>close</button>
        <div>
          {props.children}
        </div>
      </Modal>
    </div>
  )
};