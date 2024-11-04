import React from 'react'
import HostHeader from './HostHeader'
import { Outlet } from 'react-router-dom'

function HostLayout() {
  return (
    <>
        <HostHeader />
        <Outlet />
    </>
  )
}

export default HostLayout
