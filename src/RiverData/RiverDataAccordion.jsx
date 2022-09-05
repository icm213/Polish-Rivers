import { useState } from "react"

export const RiverDataAccordion = ({station}) => {

    const [isActive, setIsActive] = useState(false)

    return (
        <div onClick={()=>{setIsActive(!isActive)}} className="river--station" >
            <div className="river--station__description">{`${station.stacja}, województwo ${station.województwo}, rzeka ${station.rzeka}`}</div>
            <div className="river--station__arrow">{isActive ? 'x' : '^'}</div>
            { isActive && <div className="river--station__hidden--data">
                <div className="measurment--date">Data i czas pomiaru</div>
                <div className="water--state">Głębokość wody:</div>
                <div className="water--state__depth">{station.stan_wody ? station.stan_wody + ' cm' : "brak danych"}</div>
                <div className="water--temperature">Temperatura wody:</div>
                <div className="water--temperature__value">{station.temperatura_wody ? station.temperatura_wody + '℃' : "brak danych"}</div>
                <div className="water--state__measurment--date">{station.stan_wody_data_pomiaru ? station.stan_wody_data_pomiaru : "brak danych" }</div>
                <div className="water--temperature__measurment--date">{station.temperatura_wody_data_pomiaru ? station.temperatura_wody_data_pomiaru : "brak danych"}</div>
            </div>}
        </div>
    )
}