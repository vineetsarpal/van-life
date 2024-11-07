import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../api'
import { requireAuth } from '../../utils'

export async function loader() {
    // await requireAuth()
    return getHostVans()
}

export default function HostVans() {
    // const [vans, setVans] = useState([])

    // useEffect(() => {
    //   fetch("/api/host/vans")
    //     .then(res => res.json())
    //     .then(data => setVans(data.vans))
    // }, [])

    const vans = useLoaderData()
    
    const hostVansEls = vans.map(van => {
        return (
            <Link to={`/host/vans/${van.id}`} key={van.id} className="host-van-link-wrapper">
                <div className='host-van-single' key={van.id}>
                    <img src={van.imageUrl} />
                    <div className='host-van-info'>
                        <h3>{van.name}</h3>
                        <p>${van.price}/day</p>
                    </div>

                </div>
            </Link>
        )
    })
  return (
    <section>
        <h1 className='host-vans-title'>Your listed vans</h1>
        <div className='host-vans-list'>
            {/* {vans.length > 0 ? (
                <section>
                    {hostVansEls}
                </section>
            ) : (
                <h2>Loading...</h2>
            )} */}
            <section>
                {hostVansEls}
            </section>
        </div>
    </section>
  )
}
