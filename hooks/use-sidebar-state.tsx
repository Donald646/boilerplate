'use client'

import { useState, useEffect } from 'react'

export function useSidebarState() {
  const [isExpanded, setisExpanded] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('sidebarOpen')
    setisExpanded(stored ? JSON.parse(stored) : true)
  }, [])

  useEffect(() => {
    localStorage.setItem('sidebarOpen', JSON.stringify(isExpanded))
  }, [isExpanded])

  const toggleSidebar = () => setisExpanded(!isExpanded)

  return { isExpanded, toggleSidebar }
}