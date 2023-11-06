import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';



type PaymentFormProps = {
  handleTime: (time: string) => void;
  hours: string[];
};

export default function PaymentForm({handleTime, hours}: PaymentFormProps) {

  return (
    <React.Fragment>
      <Typography className="text-center" variant="h6" gutterBottom>
        Choose time
      </Typography>

      <Grid container spacing={3}>


      {hours.map((time) => (
              <Grid className ="flex justify-center" item xs={12} md={6} key={time}>
              <button onClick={() => handleTime(time)}>
                        <a className="page-scroll">{time}</a>
                      </button>
              </Grid>
            ))}



      </Grid>
    </React.Fragment>
  );
}