import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


interface ReviewProps {
  doctorName: string;
  selectedHour: string;
  service: string;
  confirmTime: () => void;
}


export default function Review ({ doctorName, selectedHour, service, confirmTime }: ReviewProps)  {

  return (
    <React.Fragment>
  <Typography variant="h6" gutterBottom className="text-center">
    Appointment summary
  </Typography>

  <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }} >
    <Grid item container xs={12} sm={6} >
      <Grid item xs={6}>
        <Typography gutterBottom>Time</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography gutterBottom>{selectedHour}</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography gutterBottom>Doctor</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography gutterBottom>
          {doctorName
            ? doctorName
                .replace(/\b\w/g, (match) => match.toUpperCase())
                .replace(/-/g, ' ')
            : ''}
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography gutterBottom>Service</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography gutterBottom>{service}</Typography>
      </Grid>
    </Grid>
  </Grid>
  <div className ="flex justify-center mt-2">
  <button className="red-item" onClick={confirmTime}>Confirm Appointment</button>
  </div>
</React.Fragment>
  );
}