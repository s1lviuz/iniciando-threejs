export default function OrbitControl(props: any) {

    const orbitControlHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        if (props.orbitControl === false) {
            props.setorbitControl(true)
        } else { props.setorbitControl(false) }
    }

    return (
        <div className='orbitControl'>
            <label>Controle da visão: </label>
            <button onClick={orbitControlHandler}>{(props.orbitControl) ? 'Ligado' : 'Desligado'}</button>
        </div>
    )
}