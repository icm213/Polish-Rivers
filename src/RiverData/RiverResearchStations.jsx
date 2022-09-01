export const RiverResearchStations = ({riverStations}) => {
    
    const showData = (el) => {
        el.target.classList.toggle("river--station__data")
    }

    return (
        <div>
            {
                riverStations.map(station=>{
                    return (
                        <div onClick={showData} className="river--station column" key={station.stacja}>
                            <div className="river--station">
                                {`${station.stacja}, województwo ${station.województwo}`}
                                <span className="river--station__arrow">^</span>
                            </div>
                            <div >
                                <span>

                                </span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}