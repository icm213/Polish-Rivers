import { useState } from "react"

export const RiverDataAccordion = ({station}) => {

    const [isActive, setIsActive] = useState(false)

    return (
        <div className="river--station" >
            <div onClick={()=>{setIsActive(!isActive)}}  className="river--station__description">{`${station.stacja}, województwo ${station.województwo}, rzeka ${station.rzeka}`}</div>
            <div onClick={()=>{setIsActive(!isActive)}}  className="river--station__arrow" >{isActive ? 'x' : '^'}</div>
            { isActive && <div className="river--station__hidden--data">
                <table>
                    <tbody id="qqq">
                    <tr>
                            <td></td>
                            <td></td>
                            <td>Data i czas pomiaru:</td>
                        </tr> 
                        <tr>
                            <td>Głębokość wody:</td>
                            <td>{station.stan_wody ? station.stan_wody + ' cm' : "brak danych"}</td>
                            <td>{station.stan_wody_data_pomiaru ? station.stan_wody_data_pomiaru : "brak danych" }</td>
                        </tr>
                        <tr>
                            <td>Temperatura wody:</td>
                            <td>{station.temperatura_wody ? station.temperatura_wody + '℃' : "brak danych"}</td>
                            <td>{station.temperatura_wody_data_pomiaru ? station.temperatura_wody_data_pomiaru : "brak danych"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>}
        </div>
    )
}