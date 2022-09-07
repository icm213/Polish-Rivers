import { RiverNameInput } from './RiverNameInput'
import { RiverButton } from './RiverButton'

export const RiverSearchForm = ({onChange, onClick}) => {
    return (
        <div className="river--stats__form">
            <p style={{margin:'1rem'}}>
                Wpisz nazwę rzeki, województwa, lub stacji pomiarowej:
            </p>
           <form>
               <RiverNameInput onChange={onChange} />
               <RiverButton onClick={onClick}/>
           </form>
        </div>
    )
}