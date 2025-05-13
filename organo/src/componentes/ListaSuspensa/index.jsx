import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            {/* for no React tem que ser mais javascript */}
            <select required={props.required} value={props.valor} onChange={(event) => props.aoAlterado(event.target.value)}>
                <option value=""></option>
                {props.itens.map((item) => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa