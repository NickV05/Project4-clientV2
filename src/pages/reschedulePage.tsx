import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddressForm from "../components/AdressForm";
import PaymentForm from "../components/PaymentForm";
import Review from "../components/Review";
import { useState, useContext, useEffect } from "react";
import { post, get } from "../services/authService";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const steps = ["Appointment info", "Time details", "Review"];

const reschedulePage = () => {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState<string[]>([]);
  const { id } = useParams<{ id: string }>();
  const [service, setService] = useState<string>("");
  const [buttonDisabled1, setButtonDisabled1] = useState(true);
  const [buttonDisabled2, setButtonDisabled2] = useState(true);
  const [doctorName, setDoctorName] = useState<string>("");
  const [selectedHour, setSelected] = useState("");
  const [buttonClass1, setButtonClass1] = useState("red-item");
  const [buttonClass2, setButtonClass2] = useState("red-item");
  const [buttonClass3, setButtonClass3] = useState("red-item");
  const isoDate = date.toISOString();
  const navigate = useNavigate();
  const today = new Date();
  const blocked = !(buttonDisabled2 === false && isoDate > today.toISOString());
  const authContext = useContext(AuthContext);
  if (!authContext) {
    return null;
  }
  const { user } = authContext;

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <AddressForm
            buttonClass1={buttonClass1}
            setService={setService}
            setButtonDisabled1={setButtonDisabled1}
            handleColor={handleColor}
            buttonClass2={buttonClass2}
            buttonClass3={buttonClass3}
            handleDateSubmit={handleDateSubmit}
            handleDate={handleDate}
            handleNext={handleNext}
            blocked={blocked}
          />
        );
      case 1:
        return <PaymentForm handleTime={handleTime} hours={hours} />;
      case 2:
        return (
          <Review
            doctorName={doctorName}
            selectedHour={selectedHour}
            service={service}
            confirmTime={confirmTime}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  };

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(new Date(e.target.value));
    console.log("DATE ===>", date);
    setButtonDisabled2(false);
  };

  const handleDateSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isoDate = date.toISOString();
    console.log("DATE ==>", isoDate);
    post("/pageData/getTime", { date: isoDate, doctorName: doctorName }).then(
      (response) => {
        console.log("RESPONSE ===>", response.data);
        setHours(response.data);
      }
    );
  };

  const confirmTime = () => {
    const isoDate = date.toISOString();
    post("/pageData/reschedule", {
      time: selectedHour,
      service: service,
      doctorName: doctorName,
      date: isoDate,
      user: user,
    }).then((response) => {
      console.log("RESPONSE ===>", response.data.message);
      if (user != null) {
        navigate(`/profile/${user._id}`);
      }
    });
  };

  const handleTime = (time: any) => {
    setSelected(time);
    handleNext();
  };

  const handleColor = (button: any) => {
    if (button === "button1") {
      setButtonClass1("red-item-clicked");
      setButtonClass2("red-item");
      setButtonClass3("red-item");
    } else if (button === "button2") {
      setButtonClass1("red-item");
      setButtonClass2("red-item-clicked");
      setButtonClass3("red-item");
    } else if (button === "button3") {
      setButtonClass1("red-item");
      setButtonClass2("red-item");
      setButtonClass3("red-item-clicked");
    }
  };

  const setColors = () => {
    if (service === "Check-up") {
      setButtonClass1("red-item-clicked");
      setButtonClass2("red-item");
      setButtonClass3("red-item");
    } else if (service === "Medical Consultation") {
      setButtonClass1("red-item");
      setButtonClass2("red-item-clicked");
      setButtonClass3("red-item");
    } else if (service === "Pre-op evaluation") {
      setButtonClass1("red-item");
      setButtonClass2("red-item");
      setButtonClass3("red-item-clicked");
    }
  };

  const getAppoint = () => {
    get(`/pageData/getAppoint/${id}`).then((response) => {
      console.log("RESPONSE ===>", response.data[0]);
      const appointmentData = response.data[0];
      setDoctorName(appointmentData.doctor);
      setService(appointmentData.servicetype);
      // const appointmentDate = new Date(appointmentData.year, appointmentData.month, appointmentData.date);
    });
  };

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  useEffect(() => {
    getAppoint();
  }, []);

  useEffect(() => {
    setColors();
  }, [service]);

  useEffect(() => {
    console.log("service ===>", service);
    console.log("doctorName ===>", doctorName);
  }, [service, doctorName]);

  return (
    <div className="mt-15">
      <React.Fragment>
        <CssBaseline />

        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h1" variant="h4" align="center">
              Appointment Rescheduling
            </Typography>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
             
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3,  color: "red" }}>
                      Back
                    </Button>
                  )}
                </Box>
              </React.Fragment>
            
          </Paper>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default reschedulePage;
