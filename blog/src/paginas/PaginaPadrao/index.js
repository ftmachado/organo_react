import { Outlet } from 'react-router-dom'
import Banner from '../../componentes/Banner'

const PaginaPadrao = () => {
    return (
        <main>
            <Banner />
            
            <Outlet />
        </main>
    )
}

export default PaginaPadrao