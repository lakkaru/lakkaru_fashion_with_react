import React from 'react'
import HeaderMenuLayout from './HeaderMenuLayout'
import FooterLayout from './FooterLayout'

export default function CommonWraperLayout({children}) {
  return (
    <div>
        <HeaderMenuLayout/>
        {children}
        <FooterLayout/>
    </div>
  )
}
