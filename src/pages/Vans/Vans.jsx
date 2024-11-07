import React, { useEffect, useState } from 'react'
import { Link, useSearchParams, useLoaderData } from 'react-router-dom'
import { getVans } from '../../api'

export function loader() {
    return getVans()
}

export default function Vans() {

    const [searchParams, setSearchParams] = useSearchParams()
    // const [vans, setVans] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const vans = useLoaderData()
    
    
    // useEffect(() => {
    //     async function loadVans() {
    //         setLoading(true)
    //         try {
    //             const data = await getVans()
    //             setVans(data)
    //         } catch (err) {
    //             setError(err)
    //         } finally {
    //             setLoading(false)
    //         }     
    //     }
    //     loadVans()
    //     
    //     fetch('/api/vans')
    //         .then(res => res.json())
    //         .then(data => setVans(data.vans))
    //     
    //     }, [])

    const typeFilter = searchParams.get("type")

    const displayedVans = typeFilter ? (
        vans.filter(van => van.type === typeFilter)
    ) : (
        vans
    )
    
    const vanElements = displayedVans.map(van => {
        return (
            <div key={van.id} className='van-title'>
                <Link to={`/vans/${van.id}`} state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>
                {/* Can use relative paths too
                    <Link to={van.id}> */}
                    <img src={van.imageUrl} />
                    <div className='van-info'>
                        <h3>{van.name}</h3>
                        <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>
            </div>
        )
    })

    // if(loading) {
    //     return <h1>Loading...</h1>
    // }

    // if(error) {
    //     return <h1>There was an error: {error.message}</h1>
    // }

  return (
    <div className='van-list-container'>
        <h1>Explore Our Van Options</h1>
        <div className='van-list-filter-buttons'>

            {/* <Link className='van-type simple' to={genNewSearchParamString("type", "jedi")}>Simple</Link>
            <Link className='van-type rugged' to={genNewSearchParamString("type", "jedi")}>Rugged</Link>
            <Link className='van-type luxury' to={genNewSearchParamString("type", "jedi")}>Luxury</Link>
            <Link className='van-type clear-filters' to=".">Clear Filter</Link> */}

                <button className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`} onClick={() => setSearchParams({type: "simple"})}>Simple</button>
                <button className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`} onClick={() => setSearchParams({type: "rugged"})}>Rugged</button>
                <button className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`} onClick={() => setSearchParams({type: "luxury"})}>Luxury</button>
            {
                typeFilter ? (
                    <button className='van-type clear-filters' onClick={() => setSearchParams({})}>Clear Filter</button>
                ) : null
            }
           
        </div>
        <div className='van-list'>
            {vanElements}
        </div>
      </div>
  )
}