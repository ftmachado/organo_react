import './Campo.css';

const Campo = ({type = 'text', label, placeholder, valor, aoAlterado, required = false}) => {
    const placeholderModificado = `${placeholder}...`
    
    const aoAlterar = (event) => {
        aoAlterado(event.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input type={type} value={valor} onChange={aoAlterar} required={required} placeholder={placeholderModificado}/>
        </div>
    )
}

export default Campo