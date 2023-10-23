import {useState} from "react"; 
import {post} from "../services/authService";

const bookingPage = () => {
  const [date, setDate] = useState(new Date());

  const handleDate = (e:  React.ChangeEvent<HTMLInputElement>) => setDate(new Date(e.target.value));

  const handleDateSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    const isoDate = date.toISOString();
    console.log("DATE ==>", isoDate);
    post('/pageData/getTime', { date: isoDate })
    .then((response) => {
      console.log('RESPONSE ===>', response.data);
    })

  }

  

    
    return (
      <div className ="mt-14 flex flex-wrap">
        <h1>PURE CSS DATE PICKER</h1>
        <form
              onSubmit={handleDateSubmit}
              className="flex flex-col justify-center align-middle navbar-nav"
            >

        <label htmlFor="dateofbirth">Choose the date</label>
        <input onChange ={handleDate} type="date" name="dateofbirth" id="dateofbirth"/>
        <button> Check this date</button>
        </form>
      </div>
      
      
    );
}

export default bookingPage;