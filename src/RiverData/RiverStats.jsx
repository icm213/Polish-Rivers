import { useState, useEffect } from "react"
import { RiverNameInput } from './RiverNameInput'
import { RiverResearchStations } from './RiverResearchStations'
import './RiverData.css'

export const RiverStats = () => {

    const [inputValue, setInputValue] = useState('')
    const [riverName, setRiverName] = useState(null)
    const [riverStations, setRiverStations] = useState([])
    
    const fetchRiverData = () => {
        setRiverStations([])
        fetch('https://danepubliczne.imgw.pl/api/data/hydro/')
        .then(result => result.json())
        .then(data => handleRiversData(data))

    const handleRiversData = (data) => {
        console.log(riverName)
        console.log(data)
        let stations = []
        data.forEach(dataObj =>{
            if(dataObj.rzeka === riverName) {
                stations.push({
                    stacja: dataObj.stacja,
                    województwo: dataObj.województwo
                })
                setRiverStations(stations)
                console.log(dataObj.stacja, riverStations)
            }
        })
    }} // such notation allows to prevent appearing of 'missing dependency error'

    const handleInputValue = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setRiverName(inputValue)
    }

    // eslint-disable-next-line
    useEffect(fetchRiverData, [riverName])
    useEffect(()=>{console.log(riverStations)}, [riverStations])

    return (
        <div>
            <form className="river--stats__form">
                <RiverNameInput onChange={handleInputValue} />
                <button type="submit" onClick={handleSubmit}>Szukaj</button>
            </form>
            <RiverResearchStations riverStations={riverStations} />
        </div>
    )
}