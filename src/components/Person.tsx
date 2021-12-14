type PersonProp = {
    name:  {
        first: string,
        last: string      
    }[]
}

export const Person = (props: PersonProp) => {
   
    return (
        <div>
           {props.name.map(n => {
               return (
                   <h2 key={n.first}>{n.first}</h2>
               )
           })} 
        </div>
    )


}