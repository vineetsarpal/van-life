import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLoaderData, useParams } from 'react-router-dom'
import { getHostVans } from '../../api'
import { requireAuth } from '../../utils'

export async function loader({ params }) {
    // await requireAuth()
    return getHostVans(params.id)
}

export default function HostVanDetail() {

    const activeStyle = {
        fontweight: "bold",
        textDecoration: "underline",
        color: "red"
    }

    const currentVan = useLoaderData()
    
    // const { id } = useParams()
    // const [currentVan, setCurrentVan] = useState(null)

    // useEffect(() => {
    //     fetch(`/api/host/vans/${id}`)
    //         .then(res => res.json())
    //         .then(data => setCurrentVan(data.vans))

    // }, [])

    // if (!currentVan) {
    //     return <h1>Loading...</h1>
    // }

    return (
        <section>
        <Link to=".." relative='path' className='back-button'>&larr; <span>Back to all vans</span></Link>
        <div className="host-van-detail-layout-container">
            <div className="host-van-detail">
                <img src={currentVan.imageUrl} />
                <div className="host-van-detail-info-text">
                    <i
                        className={`van-type van-type-${currentVan.type}`}
                    >
                        {currentVan.type}
                    </i>
                    <h3>{currentVan.name}</h3>
                    <h4>${currentVan.price}/day</h4>
                </div>

            </div>

            <nav className='host-van-detail-nav'>
                <NavLink to='.' end style={({isActive}) => isActive ? activeStyle : null}>Details</NavLink>
                <NavLink to='pricing' style={({isActive}) => isActive ? activeStyle : null}>Pricing</NavLink>
                <NavLink to='photos' style={({isActive}) => isActive ? activeStyle : null}>Photos</NavLink>
            </nav>
            <Outlet context={{ currentVan }} />
        </div>
    </section>
    )
}
