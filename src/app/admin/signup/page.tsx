import AdminSignUp from '@/components/AdminSignUp/AdminSignUp'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Admin Sign Up - Siddik Restaurant',
}

const AdminSignUpPage = () => {
    return <AdminSignUp />
}

export default AdminSignUpPage;