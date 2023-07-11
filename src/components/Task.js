import {Header,Icon,Grid, Segment,Label, Button} from 'semantic-ui-react';

export default function Task(props) {

    const {task,deleteTask} = props;

    const {idTask,taskName,categoryTask} = task;

    if (task.length === 0) {
        return null;
    }
    return(
         <Grid.Column width={8} className='task-container'>
         <Segment>
            {categoryTask && (
                <Label color='teal' ribbon='right'>
                    {categoryTask}
                </Label>
            )}
           <Header as="h3" className='header-task'>
            {taskName}
           </Header>
           <Header as="h5">{idTask}</Header>
           <Grid center columns={2}>
                <Grid.Column>
                     <Button color='red' onClick={ () => deleteTask(idTask)}>
                        <Icon name='remove circle' ></Icon>
                        Eliminar
                     </Button>
                </Grid.Column>
           </Grid>
            {/* <Segment>
                {idTask}
            </Segment>
            <Segment>
                {taskName}
            </Segment>
            <Segment>
                {categoryTask}
            </Segment> */}
            </Segment>
         </Grid.Column>
    );
}