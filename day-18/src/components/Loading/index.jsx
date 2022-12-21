import './styles.css';

const Loading = () => {
    return (
        <>
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
            <h2 className="loading_text">Cargando...</h2>
        </>
    )
}

export default Loading;
