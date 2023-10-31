import { useState, useEffect } from "react";
import { get } from "../services/authService";
import { useParams, useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";


const Profile = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cancellationStates, setCancellationStates] = useState<{ [key: number]: boolean }>({});
  const [deleting, setDeleting] = useState<{ [key: number]: boolean }>({});
  const { id } = useParams();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isSmallScreen = windowWidth <= 768; 
  const navigate = useNavigate();

  const getAppointments = () => {
    get(`/pageData/getAppointments/${id}`)
      .then((response) => {
        const appointmentsData = response.data;
        console.log("RESPONSE ===>", appointmentsData);
        setAppointments(appointmentsData);
        setLoading(false);
      });
  };

  const cancel =(appointmentId:any)=> {
    console.log("cancel")
    setDeleting((prevState:any) => ({
        ...prevState,
        [appointmentId]: !prevState[appointmentId],
      }));

    get(`/pageData/cancel/${appointmentId}`)
    setTimeout(() => {
        navigate("/")
    }, 2000);

  }

 
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    console.log(isSmallScreen)
    getAppointments();
  }, []);

  const today = new Date();

  const toggleCancellation = (appointmentId:any) => {
    setCancellationStates((prevState:any) => ({
      ...prevState,
      [appointmentId]: !prevState[appointmentId],
    }));
  };

  const upcomingAppointments = appointments.filter((appointment:any) => {
    const appointmentDate = new Date(
      appointment.year,
      appointment.month - 1,
      appointment.date
    );
    return appointmentDate >= today;
  });

  const previousAppointments = appointments.filter((appointment:any) => {
    const appointmentDate = new Date(
      appointment.year,
      appointment.month - 1,
      appointment.date
    );
    return appointmentDate < today;
  });


  return (
    <>

    {!isSmallScreen ? (<>
    {!loading ? (
      <div className="flex justify-around mt-14">
        <div className="appointments flex flex-col items-center">
          <h2 className="section-title text-center">Upcoming Appointments</h2>
          {upcomingAppointments.length > 0 ? (
            upcomingAppointments.map((appointment: any) => (
                <>
             {!deleting[appointment.id] ? ( <div className="appointment-card" key={appointment.id}>
                <div className="appointment-details">
                <div className=" flex justify-start items-center single_services2 text-center">
                        <div className="services_icon mr-3">
                            <i><img src = "/clock.png"/></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                  <h5 >
                    {appointment.month}/{appointment.date}/{appointment.year} at {appointment.time}
                  </h5>
                    </div>

                    <div className=" flex justify-start items-center single_services2 text-center">
                        <div className="services_icon mr-3">
                            <i><img src = "/docicon.png"/></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                  <p >
                  Doctor: {appointment.doctor.replace(/\b\w/g, (match: string) => match.toUpperCase()).replace(/-/g, ' ')}
                  </p>
                    </div> 


                    <div className=" flex justify-start items-center single_services2 text-center">
                        <div className="services_icon mr-3">
                            <i><img src = "/type.png"/></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                  <p>
                  Visit type: {appointment.servicetype}
                  </p>
                    </div> 


                    <div className=" flex justify-start items-center single_services2 text-center">
                        <div className="services_icon mr-3">
                            <i><img src = "/status.png"/></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                        <p>
                    Status:<i className="confirmed-status"> Confirmed</i>
                  </p>
                    </div> 

                  
                </div>
                <div className="appointment-actions">
                    {!cancellationStates[appointment.id] ? (
                      <button
                        onClick={() => toggleCancellation(appointment.id)}
                        className="red-item"
                      >
                        Cancel Appointment
                      </button>
                    ) : (
                        
                      <button onClick ={()=>{cancel(appointment.id);}} className="red-item">Confirm Cancel</button>
                      
                    )}
                    <button className="red-item "><Link to={`/reschedule/${appointment.id}`} >Reschedule</Link></button>
                  </div>
              </div>) : (<img src ="/cancelled.jpg" className ="w-1/3 py-4"/>)}
              </>        

            ))
          ) : (
            <p className="no-appointments text-center">You don't have any upcoming appointments</p>
          )}
        </div>
  
        <div className="appointments flex flex-col justify-start">
          <h2 className="section-title text-center">Previous Appointments</h2>
          {previousAppointments.length > 0 ? (
            previousAppointments.map((appointment: any) => (
              <div className="appointment-card" key={appointment.id}>
                <div className="appointment-details">
                <div className=" flex justify-start items-center single_services2 text-center">
                        <div className="services_icon mr-3">
                            <i><img src = "/clock.png"/></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                  <h5 >
                    {appointment.month}/{appointment.date}/{appointment.year} at {appointment.time}
                  </h5>
                    </div>

                    <div className=" flex justify-start items-center single_services2 text-center">
                        <div className="services_icon mr-3">
                            <i><img src = "/docicon.png"/></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                  <p >
                  Doctor: {appointment.doctor.replace(/\b\w/g, (match: string) => match.toUpperCase()).replace(/-/g, ' ')}
                  </p>
                    </div> 


                    <div className=" flex justify-start items-center single_services2 text-center">
                        <div className="services_icon mr-3">
                            <i><img src = "/type.png"/></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                  <p>
                  Visit type: {appointment.servicetype}
                  </p>
                    </div> 


                    <div className=" flex justify-start items-center single_services2 text-center">
                        <div className="services_icon mr-3">
                            <i><img src = "/completed.png"/></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                        <p>
                    Status:<i className="confirmed-status"> Completed</i>
                  </p>
                    </div> 

                  
                </div>
                
              </div>
            ))
          ) : (
            <p className="no-appointments text-center">You don't have any past appointments</p>
          )}
        </div>
      </div>
    ) : (
        <section className ="h-700 flex items-center justify-center"> <img src="/spinner.gif" alt="loading" /></section>
    )}
  </>) : (<>
    {!loading ? (
      <div className="flex flex-col mt-14">
        <div className="appointments flex flex-col items-center">
          <h2 className="section-title text-center">Upcoming Appointments</h2>
          {upcomingAppointments.length > 0 ? (
            upcomingAppointments.map((appointment: any) => (
                <>
             {!deleting[appointment.id] ? ( <div className="appointment-card" key={appointment.id}>
                <div className="appointment-details">
                <div className=" flex justify-start items-center single_services2 text-center">
                        <div className="services_icon mr-3">
                            <i><img src = "/clock.png"/></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                  <h5 >
                    {appointment.month}/{appointment.date}/{appointment.year} at {appointment.time}
                  </h5>
                    </div>

                    <div className=" flex justify-start items-center single_services2 text-center">
                        <div className="services_icon mr-3">
                            <i><img src = "/docicon.png"/></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                  <p >
                  Doctor: {appointment.doctor.replace(/\b\w/g, (match: string) => match.toUpperCase()).replace(/-/g, ' ')}
                  </p>
                    </div> 


                    <div className=" flex justify-start items-center single_services2 text-center">
                        <div className="services_icon mr-3">
                            <i><img src = "/type.png"/></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                  <p>
                  Visit type: {appointment.servicetype}
                  </p>
                    </div> 


                    <div className=" flex justify-start items-center single_services2 text-center">
                        <div className="services_icon mr-3">
                            <i><img src = "/status.png"/></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                        <p>
                    Status:<i className="confirmed-status"> Confirmed</i>
                  </p>
                    </div> 

                  
                </div>
                <div className="appointment-actions">
                    {!cancellationStates[appointment.id] ? (
                      <button
                        onClick={() => toggleCancellation(appointment.id)}
                        className="red-item"
                      >
                        Cancel Appointment
                      </button>
                    ) : (
                        
                      <button onClick ={()=>{cancel(appointment.id);}} className="red-item">Confirm Cancel</button>
                      
                    )}
                    <button className="red-item "><Link to={`/reschedule/${appointment.id}`} >Reschedule</Link></button>
                  </div>
              </div>) : (<img src ="/cancelled.jpg" className ="w-1/3 py-4"/>)}
              </>        

            ))
          ) : (
            <p className="no-appointments text-center">You don't have any upcoming appointments</p>
          )}
        </div>
  
        <div className="appointments flex flex-col justify-start">
          <h2 className="section-title text-center">Previous Appointments</h2>
          {previousAppointments.length > 0 ? (
            previousAppointments.map((appointment: any) => (
              <div className="appointment-card" key={appointment.id}>
                <div className="appointment-details">
                <div className=" flex justify-start items-center single_services2 text-center">
                        <div className="services_icon mr-3">
                            <i><img src = "/clock.png"/></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                  <h5 >
                    {appointment.month}/{appointment.date}/{appointment.year} at {appointment.time}
                  </h5>
                    </div>

                    <div className=" flex justify-start items-center single_services2 text-center">
                        <div className="services_icon mr-3">
                            <i><img src = "/docicon.png"/></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                  <p >
                  Doctor: {appointment.doctor.replace(/\b\w/g, (match: string) => match.toUpperCase()).replace(/-/g, ' ')}
                  </p>
                    </div> 


                    <div className=" flex justify-start items-center single_services2 text-center">
                        <div className="services_icon mr-3">
                            <i><img src = "/type.png"/></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                  <p>
                  Visit type: {appointment.servicetype}
                  </p>
                    </div> 


                    <div className=" flex justify-start items-center single_services2 text-center">
                        <div className="services_icon mr-3">
                            <i><img src = "/completed.png"/></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                        <p>
                    Status:<i className="confirmed-status"> Completed</i>
                  </p>
                    </div> 

                  
                </div>
                
              </div>
            ))
          ) : (
            <p className="no-appointments text-center">You don't have any past appointments</p>
          )}
        </div>
      </div>
    ) : (
        <img className="mt-14" src="/spinner.gif" alt="loading" />
    )}
  </>

  )}


  </>
      )
    }

    export default Profile
               
