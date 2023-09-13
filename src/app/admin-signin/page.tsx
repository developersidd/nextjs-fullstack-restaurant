import AdminSignIn from '@/components/AdminSignIn/AdminSignIn'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Admin Sign In - Siddik Restaurant',
}

const AdminSignInPage = () => {
  return <AdminSignIn />
}

export default AdminSignInPage;