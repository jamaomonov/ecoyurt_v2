"use client"

import { useState } from "react"

type ContactModalType = "contact" | "question" | "availability" | "partnership"

export function useContactModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalType, setModalType] = useState<ContactModalType>("contact")

  const openModal = (type: ContactModalType) => {
    setModalType(type)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return {
    isOpen,
    modalType,
    openModal,
    closeModal
  }
}
