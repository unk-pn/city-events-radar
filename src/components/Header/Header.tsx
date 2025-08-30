import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import c from './Header.module.css'

export const Header = () => {
  return (
    <header className={c.header}>
        <h1>City Events Radar</h1>
        <Navbar />
    </header>
  )
}
