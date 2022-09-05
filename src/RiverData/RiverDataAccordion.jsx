import { useState } from "react"

export const RiverDataAccordion = ({station}) => {

    const [isActive, setIsActive] = useState(false)

    return (
        <div onClick={()=>{setIsActive(!isActive)}} className="river--station column" >
        <div className="river--station">
            {`${station.stacja}, województwo ${station.województwo}`}
            <span className="river--station__arrow">{isActive ? 'x' : '^'}</span>
        </div>
        { isActive && <div className="river--station__hidden--data">
            <div className="water--state">Głębokość wody:</div>
            <div className="water--state__height">{station.stan_wody + ' cm' || "brak danych"}</div>
            <div className="water--temperature">Temperatura wody:</div>
            <div className="water--temperature__value">{station.temperatura_wody ? station.temperatura_wody + '℃' : "brak danych"}</div>
        </div>}
    </div>
    )
}