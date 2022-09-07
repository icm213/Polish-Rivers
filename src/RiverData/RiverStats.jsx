import { useState, useEffect } from "react"
import { RiverResearchStations } from './RiverResearchStations'
import { RiverSearchForm } from './RiverSearchForm'
import './RiverData.css'

export const RiverStats = () => {

    const [inputValue, setInputValue] = useState('')
    const [searchData, setSearchData] = useState(null)
    const [riverStations, setRiverStations] = useState([])
    
    const fetchRiverData = () => {
        setRiverStations([])
        fetch('https://danepubliczne.imgw.pl/api/data/hydro/')
        .then(result => result.json())
        .then(data => handleRiversData(data))

    // const handleSearchData = data => {
    //     data.split(' ').map(a=>a[0].toUpperCase() + a.slice(1,a.length).toLowerCase()).join(' ')
    // }

    const handleRiversData = (data) => {
        console.log(searchData)
        console.log(data)
        let stations = []
        data.forEach(dataObj =>{
            if(dataObj.stacja === searchData.split(' ').map(a=>a[0].toUpperCase() + a.slice(1,a.length).toLowerCase()).join(' ')
            || dataObj.rzeka === searchData.split(' ').map(a=>a[0].toUpperCase() + a.slice(1,a.length).toLowerCase()).join(' ')
            ||
             dataObj.województwo === searchData.toLowerCase()) {
                stations.push({
                    rzeka: dataObj.rzeka,
                    stacja: dataObj.stacja,
                    województwo: dataObj.województwo,
                    stan_wody: dataObj.stan_wody,
                    stan_wody_data_pomiaru: dataObj.stan_wody_data_pomiaru,
                    temperatura_wody:dataObj.temperatura_wody,
                    temperatura_wody_data_pomiaru: dataObj.temperatura_wody_data_pomiaru

                })
                setRiverStations(stations.sort((a,b)=>{
                    let fa = a.stacja.toLowerCase()
                    let fb = b.stacja.toLowerCase()
                
                        return fa.localeCompare(fb)
                }))
                console.log(dataObj.stacja, riverStations)
            }
        })
    }} // such notation allows to prevent appearing of 'missing dependency error'

    const handleInputValue = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setSearchData(inputValue)
    }

    // eslint-disable-next-line
    useEffect(fetchRiverData, [searchData])
    useEffect(()=>{console.log(riverStations)}, [riverStations])

    return (
        <div>
            <RiverSearchForm onChange={handleInputValue} onClick={handleSubmit}/>
            <RiverResearchStations riverStations={riverStations}/>
        </div>
    )
}