import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import { useAuth } from '../../context/auth'

const AdminDashboard = () => {

    const [auth] = useAuth()

  return (
    <Layout title={"Dashboard Admin"}>
        <div className='container-fluid m-3 p-10'>
            <div className='row'>
                <div className='col-md-3'>
                    <AdminMenu/>
                </div>
                <div className='col-md-9'>
                    <div className='card w-75 p-3'>
                        <h2>Nombre: {auth?.user?.name}</h2>
                        <h2>Email: {auth?.user?.email}</h2>
                        <h2>Teléfono: {auth?.user?.phone}</h2>
                        <h2>Dirección: {auth?.user?.address}</h2>
                    </div>
                </div>
            </div>
            
        </div>
    </Layout>
  )
}

export default AdminDashboard