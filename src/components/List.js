import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCheck } from '@fortawesome/free-solid-svg-icons'

import Todo from './Todo'

const List = ({ todos, setComplete, setDelete }) => {
  const style = {
    color: 'green'
  }
    return (
        <div>
          <h2>{todos.filter(x => x.completed).length} of {todos.length} completed.</h2>
          {(todos.filter(x => x.completed).length === todos.length && todos.length > 1) &&
          <h3 style={style}><FontAwesomeIcon icon={faCheck} /> Good job, you've completed your list!</h3>}
          {todos.map((todo, index) => {
          
            return <Todo key={todo.id} todo={todo} index={index} setComplete={setComplete} setDelete={setDelete} />
          }
          )}  
        </div>
    )
}

export default List

