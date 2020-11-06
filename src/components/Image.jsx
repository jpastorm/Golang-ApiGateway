const Button = ({ name, type = 'png', size }) => {

    const TITLE = (name.charAt(0).toUpperCase() + name.slice(1)).replace(/-/g, ' ')

    return (
        <img loading="lazy" src={`./${name}.${type}`} title={TITLE} alt={TITLE} width={size} />
    )
}

export default Button
