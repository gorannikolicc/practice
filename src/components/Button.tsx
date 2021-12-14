type ButtonProps = {
    hendleClick: () => void
}


export const Button = (props: ButtonProps) => {
    return <button onClick={props.hendleClick}>Click</button>
}