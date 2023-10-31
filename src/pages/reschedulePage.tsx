import { useState, useContext, useEffect } from "react";
import { post, get } from "../services/authService";
import {useParams} from "react-router-dom";
import { AuthContext} from "../context/auth.context";

const reschedulePage = () => {
    const [date, setDate] = useState(new Date());
    const [hours, setHours] = useState<string[]>([]); 
    const [requestDone, setRequest] = useState(false);
    const {id} = useParams<{id: string}>()
    const [service, setService] = useState<string>("");
    const [buttonDisabled2, setButtonDisabled2] = useState(true);
    const [doctorName, setDoctorName] = useState<string>("");
    const [confirm, setConfirm] = useState(false);
    const [selectedHour, setSelected] = useState("");
    const [message, setMessage] = useState("");
    const [buttonClass1, setButtonClass1] = useState('red-item');
    const [buttonClass2, setButtonClass2] = useState('red-item');
    const [buttonClass3, setButtonClass3] = useState('red-item');
    const authContext = useContext(AuthContext);
      if (!authContext) {
        return null;
      }
  const { user } = authContext;
    
  
    const handleDate = (e: React.ChangeEvent<HTMLInputElement>) =>{
      setDate(new Date(e.target.value));
      console.log("DATE ===>", date)
      setButtonDisabled2(false);
    }
  
    const handleDateSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      const isoDate = date.toISOString();
      console.log("DATE ==>", isoDate);
      post("/pageData/getTime", { date: isoDate, doctorName: doctorName})
        .then((response) => {
          console.log("RESPONSE ===>", response.data);
          setHours(response.data);
          setRequest(true);
        });
    };
  
  
    const confirmTime = () => {
      const isoDate = date.toISOString();
      post("/pageData/reschedule",{time:selectedHour, service:service, doctorName: doctorName, date:isoDate, user:user})
      .then((response) => {
        console.log("RESPONSE ===>", response.data.message)
        setMessage(response.data.message)
      })
  
    }
  
    const handleTime = (time:any) => {
      setSelected(time);
      setConfirm(true);
    }
  
    const handleColor = (button:any) => {
      if (button === "button1") {
        setButtonClass1('red-item-clicked');
        setButtonClass2('red-item');
        setButtonClass3('red-item');
      } else if (button === "button2") {
        setButtonClass1('red-item');
        setButtonClass2('red-item-clicked');
        setButtonClass3('red-item');
      } else if (button === "button3") {
        setButtonClass1('red-item');
        setButtonClass2('red-item');
        setButtonClass3('red-item-clicked');
      }
    }


    const setColors = () => {
        if (service === "Check-up") {
            setButtonClass1('red-item-clicked');
            setButtonClass2('red-item');
            setButtonClass3('red-item');
          } else if (service === "Medical Consultation") {
            setButtonClass1('red-item');
            setButtonClass2('red-item-clicked');
            setButtonClass3('red-item');
          } else if (service === "Pre-op evaluation") {
            setButtonClass1('red-item');
            setButtonClass2('red-item');
            setButtonClass3('red-item-clicked');
          }

    }

    const getAppoint =() =>{
        get(`/pageData/getAppoint/${id}`)
        .then((response) => {
            console.log("RESPONSE ===>", response.data[0]);
            const appointmentData = response.data[0];
            setDoctorName(appointmentData.doctor);
            setService(appointmentData.servicetype);
            // const appointmentDate = new Date(appointmentData.year, appointmentData.month, appointmentData.date);

          })
    }

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
      <>
        {requestDone ? (
    <>
      {!confirm ? (<div className="mt-14 flex flex-col ">
        <ul className="flex flex-col navbar-nav">
          {hours.map((time) => {
            return (
              <li className="nav-item text-center" key={time}>
                <button onClick={() => handleTime(time)}>
                  <a className="page-scroll ">{time}</a>
                </button>
              </li>
            );
          })}
        </ul>
        <button className="red-item" onClick = {() =>{setRequest(false)}}>Go back</button>
        </div>
      ) : (
        <>{!message ?(<div className="mt-14 flex flex-col">
        <h3 className="text-center">Time: {selectedHour} </h3>
        <h3 className="text-center">Doctor: {doctorName ? doctorName.replace(/\b\w/g, match => match.toUpperCase()).replace(/-/g, ' ') : ''} </h3>
        <h3 className="text-center">Service: {service} </h3>
        <button className="red-item" onClick={() => {confirmTime();}}>Confirm Appointment</button>
        <button className="red-item" onClick = {() =>{setConfirm(false)}}>Go back</button>
      </div>): 
      (<div className ="mt-14 flex flex-col">
        <h1 className="text-center">{message}</h1>
        <button><a className="red-item" href="/">Go back</a></button>
  
      </div>)
      }
        </>
      )}
    </>
  ) : (
          <div className="mt-14 flex flex-col justify-center ">
            <h1 className ="text-center">Reschedule your Appointment</h1>
              <h3 className ="text-center">Choose service</h3>
            <div className ="flex flex-col">
              <button className={buttonClass1} onClick={() => {setService("Check-up"); handleColor("button1")}}>Check-up</button>
              <button className={buttonClass2} onClick={() => {setService("Medical Consultation");handleColor("button2")}}>Medical Consultation</button>
              <button className={buttonClass3} onClick={() => {setService("Pre-op evaluation");handleColor("button3")}}>Pre-op evaluation</button>
            </div>
            <form
              onSubmit={handleDateSubmit}
              className ="flex flex-col items-center"
            >
              <label className ="text-center" htmlFor="dateofbirth"><h3>Choose the date</h3></label>
              <input  onChange={handleDate} type="date" name="dateofbirth" id="dateofbirth" />
              <button className="red-item" disabled={buttonDisabled2}>Check this date</button>
            </form>
            <button ><a className="red-item" href="/">Go back</a></button>
          </div>
        )}
      </>
    );
  };

export default reschedulePage
