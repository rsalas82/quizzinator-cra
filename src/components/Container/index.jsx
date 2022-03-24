import './Container.css'

const Container = ({children, className}) => {
    return (
        <div className={`Container ${className}`}>
            {children}
        </div>
    )
}

export default Container