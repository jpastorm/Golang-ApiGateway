const Button = ({ children, color, block }) => {
    let selectedColor

    switch (color) {
        case 'green':
            selectedColor = 'success'
            break
        case 'blue':
            selectedColor = 'info'
            break
        default:
            selectedColor = 'primary'
            break
    }

    return (
        <button className={`btn btn-${selectedColor} ${block ? 'btn-block' : null}`}>
            { children }
        </button>
    )
}

export default Button
