'use client'

import { useState, useEffect } from 'react'

export function useSidebarState() {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('sidebarOpen')
    setIsOpen(stored ? JSON.parse(stored) : true)
  }, [])

  useEffect(() => {
    localStorage.setItem('sidebarOpen', JSON.stringify(isOpen))
  }, [isOpen])

  const toggleSidebar = () => setIsOpen(!isOpen)

  return { isOpen, toggleSidebar }
}