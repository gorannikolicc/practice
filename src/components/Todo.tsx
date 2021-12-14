import React, {useEffect, useState,  } from 'react';
import axios from 'axios';

type TodoProps = {
    userId?: number;
    id?: number;
	title?: string;
	completed?: boolean;
}

export const Todo = () => {
    const [todo, setTodoList] = useState<TodoProps[]>()

    console.log('1',todo)
    useEffect(() => {
        // Use [] as second argument in useEffect for not rendering each time
        axios.get<TodoProps[]>('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            console.log('22',response.data);
            setTodoList(response.data);
        });
    }, []);
    return (
     <div>
          {todo?.map(n => {
               return (
                   <h2 key={n.id}>{n.id} id</h2>
               )
           })}
     </div>
    )
}