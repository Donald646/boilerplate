import React from 'react'
import LoginPage from './login'
import { Metadata } from 'next'
import Login from './login'
import { NAME } from '@/utils/config'

export const metadata: Metadata = {
  title: `Login | ${NAME}`,
  description: `Login to ${NAME}`,
}
export default function Page() {
  return (
    <Login/>
  )
}
