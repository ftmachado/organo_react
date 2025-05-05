import './CampoTexto.css';

const CampoTexto = (props) => {
    const placeholderModificado = `${props.placeholder}...`
    
    const aoAlterar = (event) => {
        props.aoAlterado(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoAlterar} required={props.required} placeholder={placeholderModificado}/>
        </div>
    )
}

export default CampoTexto