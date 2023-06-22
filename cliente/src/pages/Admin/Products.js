import React, {useState, useEffect} from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import Layout from '../../components/Layout/Layout'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Products = () => {

    const [products, setProducts] = useState([])

    const getAllProducts = async () => {
        try {
            const {data} = await axios.get('/api/v1/products/get-products');
            setProducts(data.products);
        } catch (error) {
            console.log(error)
            toast.error('Error al cargar productos')
        }
    }

    useEffect(() => {
        getAllProducts();
    }, [])

  return (
    <Layout>
        <div className='container-fluid m-3 p-10'>
            <div className='row'>
                <div className='col-md-3'>
                    <AdminMenu/>
                </div>
                <div className='col-md-9'>
                    <h3 className='text-center'>Lista de productos</h3>
                    <div className='d-flex flex-wrap'>
                    {products?.map((p) => (
                        <Link key={p._id} to={`/dashboard/admin/products/${p.slug}`} className='product-link'> 
                        <div className="card m-2" style={{width: '18rem'}}>
                            <img src={`/api/v1/products/product-photo/${p._id}`} className="card-img-top" alt={p.name} />
                            <div className="card-body">
                                <h5 className="card-title">{p.name}</h5>
                                <p className="card-text">{p.description}</p>
                            </div>
                        </div>
                        </Link>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Products