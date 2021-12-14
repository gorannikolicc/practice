import React from 'react';
import { Status } from './components/Status';
import { Button } from './components/Button';
import {Person} from './components/Person';
import {Todo} from './components/Todo'
import './App.css';

function App() {
const personName = [
  {
    first: 'bruse',
    last: 'goran',
  },
  {
    first: 'goran',
    last: 'nikolic',
  },
  {
    first: 'pera',
    last: 'djokic',
  }
]

  return (
    <div className="App">
       <Status name= 'dejan'/>
       <Button  hendleClick={()=> {
         console.log('button clicked')
       }}/>
       <Person name={personName}/>
       <Todo/>
    </div>
  );
}

export default App;
