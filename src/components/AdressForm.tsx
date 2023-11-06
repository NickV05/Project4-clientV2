import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


type AddressFormProps = {
  buttonClass1: string;
  setService: (service: string) => void;
  setButtonDisabled1: (buttonDisabled: boolean) => void;
  handleColor: (button: string) => void;
  buttonClass2: string;
  buttonClass3: string;
  handleDateSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleDate: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
  blocked: boolean;
};
  
export default function AddressForm({
  buttonClass1,
  setService,
  setButtonDisabled1,
  handleColor,
  buttonClass2,
  buttonClass3,
  handleDateSubmit,
  handleDate,
  handleNext,
  blocked
}: AddressFormProps) {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    handleDateSubmit(e); 
    handleNext(); 
  };
 
  return (
    <React.Fragment >
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', justifyContent: 'center' }}>
        Choose service
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <button
            className={`service-button ${buttonClass1} w-full `}
            onClick={() => {
              setService("Check-up");
              setButtonDisabled1(false);
              handleColor("button1");
            }}
          >
            Check-up
          </button>
        </Grid>

        <Grid item xs={12}>
          <button
            className={`service-button ${buttonClass2} w-full`}
            onClick={() => {
              setService("Medical Consultation");
              setButtonDisabled1(false);
              handleColor("button2");
            }}
          >
            Medical Consultation
          </button>
        </Grid>

        <Grid item xs={12}>
          <button
            className={`service-button ${buttonClass3} w-full`}
            onClick={() => {
              setService("Pre-op evaluation");
              setButtonDisabled1(false);
              handleColor("button3");
            }}
          >
            Pre-op evaluation
          </button>
        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom sx={{ display: 'flex', justifyContent: 'center' }}>
        Choose date
      </Typography>


      <form onSubmit={handleSubmit} className="flex flex-col items-center mt-8">
        <input onChange={handleDate} type="date" name="dateofbirth" id="dateofbirth" />
        <button type="submit" className="red-item" disabled={blocked}>Next</button>
      </form>
      
   
    </React.Fragment>
  );

}