import { RiverDataAccordion } from "./RiverDataAccordion"

export const RiverResearchStations = ({riverStations}) => {
    
    return (
        <div>
            {
                riverStations.map(station=>{
                    return (
                        <RiverDataAccordion key={station.rzeka+station.stacja} station={station}/>
                    )
                })
            }
        </div>
    )
}