
type GreetProps = {
    name: 'Goran'| 'dejan'
}

export const Status = (props: GreetProps) => {
    let message     
    if (props.name === "Goran") {
        message = "proslo"
    }else if (props.name === "dejan") {
        message = "ggdggdg"
    }
    return (
        <div>
            <h2>{message}</h2>
        </div>
        )
    }
    