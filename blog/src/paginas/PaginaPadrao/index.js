import { Outlet } from 'react-router-dom'
import Banner from '../../componentes/Banner'

const PaginaPadrao = ({children}) => {
    return (
        <main>
            <Banner />
            
            <Outlet />
            {children}
        </main>
    )
}

export default PaginaPadrao