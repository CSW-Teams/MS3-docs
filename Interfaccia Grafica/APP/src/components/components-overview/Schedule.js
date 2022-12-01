import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
  Toolbar,
  ViewSwitcher,
} from '@devexpress/dx-react-scheduler-material-ui';


export default class Schedule extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data:  [
        {
          title: 'Turno M',
          startDate: new Date(2018, 6, 23, 9, 30),
          endDate: new Date(2018, 6, 23, 11, 30),
        }, {
          title: 'Turno P',
          startDate: new Date(2018, 6, 23, 12, 0),
          endDate: new Date(2018, 6, 23, 13, 0),
        }, {
          title: 'Turno P',
          startDate: new Date(2018, 6, 23, 14, 30),
          endDate: new Date(2018, 6, 23, 15, 30),
        }, {
          title: 'Turno M',
          startDate: new Date(2018, 6, 24, 10, 0),
          endDate: new Date(2018, 6, 24, 11, 0),
        }, {
          title: 'Turno P',
          startDate: new Date(2018, 6, 24, 12, 0),
          endDate: new Date(2018, 6, 24, 13, 35),
        }, {
          title: 'Turno M',
          startDate: new Date(2018, 6, 24, 14, 30),
          endDate: new Date(2018, 6, 24, 15, 45),
        }, {
          title: 'Turno M',
          startDate: new Date(2018, 6, 25, 9, 45),
          endDate: new Date(2018, 6, 25, 11, 15),
        },
      ],
    };
  }

  render() {
    const { data } = this.state;

    return (
      <Paper>
        <Scheduler
          data={data}
          height={660}
        >
          <ViewState
            defaultCurrentDate="2018-07-25"
            defaultCurrentViewName="Week"
          />

          <DayView
            startDayHour={9}
            endDayHour={18}
          />
          <WeekView
            startDayHour={10}
            endDayHour={19}
          />

          <Toolbar />
          <ViewSwitcher />
          <Appointments />
        </Scheduler>
      </Paper>
    );
  }
}
