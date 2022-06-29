import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { useAsync } from 'react-async';
import { Tasks } from './tasks';
import { TasksTable } from './tasks-table';
import { TasksGraph } from './tasks-graph';
import { TasksConfirmed } from './tasks-confirmed';
import { TasksCanceled } from './tasks-canceled';
import { TasksDraft } from './tasks-draft';
// import { TasksProgression } from './tasks-progression';
import Api from '../../api/Api';

const api = new Api();

const Dashboard = () => {
  const tasksCount = useAsync({ promiseFn: api.getTasksCount });

  const tableTasksDrainage = useAsync({ promiseFn: api.getTableTasksDrainage });
  const tableTasksQuickDiagnosis = useAsync({ promiseFn: api.getTableTasksQuickDiagnosis });

  const graphTasksDrainage = useAsync({ promiseFn: api.getGraphTasksDrainage });
  const graphTasksQuickDiagnosis = useAsync({ promiseFn: api.getGraphTasksQuickDiagnosis });

  console.log(graphTasksDrainage, graphTasksQuickDiagnosis);

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Tasks data={tasksCount.isFulfilled ? tasksCount.data.total : 0} />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TasksConfirmed data={tasksCount.isFulfilled ? tasksCount.data.confirm || 0 : 0} />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TasksCanceled data={tasksCount.isFulfilled ? tasksCount.data.cancel || 0 : 0} />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TasksDraft sx={{ height: '100%' }} data={tasksCount.isFulfilled ? tasksCount.data.draft || 0 : 0} />
            </Grid>
            <Grid item lg={6} md={6} xl={6} xs={12}>
              <TasksTable
                title="Tâches Daignostique Rapide"
                columns={['Réf', 'Regard', 'Date', 'Etat']}
                data={tableTasksQuickDiagnosis.isFulfilled ? tableTasksQuickDiagnosis.data : []}
              />
            </Grid>
            <Grid item lg={6} md={6} xl={6} xs={12}>
              <TasksTable
                title="Tâches Curage Manuel"
                columns={['Réf', 'Type', 'Immatriculation Camion', 'Date', 'Etat']}
                data={tableTasksDrainage.isFulfilled ? tableTasksDrainage.data : []}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TasksGraph
                title="Les Tâches de Diagnostique Rapide par Dates"
                data={graphTasksQuickDiagnosis.isFulfilled ? graphTasksQuickDiagnosis.data : {}}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TasksGraph
                title="Les Tâches de Curage Manuel par Dates"
                data={graphTasksDrainage.isFulfilled ? graphTasksDrainage.data : {}}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Dashboard;
