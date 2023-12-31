import {Header,Icon,Grid} from 'semantic-ui-react'
import Task from './Task';

export default function TaskContent(props) {
     let {tasks,deleteTask} = props;

     if (tasks.length === 0) {
         return null;
     }
     console.log(tasks);
     return (
         <Grid className='tasks-content'>
             <Header as="h2" icon textAlign='center'>
                 <Icon name='settings'></Icon>
                 Administra tus tareas
             </Header>
             <Grid.Row>
                {tasks.map((task, index) =>(
                    <Task task={task} key={index} deleteTask={deleteTask}/>
                ))}
             </Grid.Row>
       </Grid>

     );
}