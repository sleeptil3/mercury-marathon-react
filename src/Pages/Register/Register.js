import { useState, useEffect } from "react";
import "../Register/register.scss";

export default function Register() {
  // const [goalTime, setGoalTime] = useState({
  //   hours: "00",
  //   minutes: "00",
  //   seconds: "00",
  // });
  const [runners, setRunners] = useState([]);
  const [newRunner, setNewRunner] = useState({
    // id: "",
    first_name: "",
    last_name: "",
    sex: "",
    email: "",
    dob: "",
    city: "",
    state: "",
    cohort_id: "",
    // real_time: "",
    // goal_time: "",
    wheelchair: false,
    race_id: 3,
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "https://mercury-marathon-api.herokuapp.com/runner/"
        );
        const data = await res.json();
        console.log(data);
        setRunners([...data]);
      } catch (error) {
        console.error(error);
      }
    })();
    //
    // (async () => {
    //   try {
    //     const res = await fetch(
    //       "https://mercury-marathon-api.herokuapp.com/runner/"
    //     );
    //     const data = await res.json();
    //     console.log(data);
    //     setNewRunner([...runners, data]);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(JSON.stringify(newRunner));
    try {
      const res = await fetch(
        "https://mercury-marathon-api.herokuapp.com/runner/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newRunner),
        }
      );
      const data = await res.json();
      setRunners([...runners, data]);
      // clear input after submission:
      setNewRunner({
        first_name: "",
        last_name: "",
        sex: "",
        email: "",
        dob: "",
        city: "",
        state: "",
        cohort_id: "",
        // _id: "",
        // real_time: "",
        // goal_time: "",
        wheelchair: false,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setNewRunner({ ...newRunner, [e.target.name]: e.target.value });
  };

  // const handleGoalTimeChange = (e) => {
  //   // debugger;
  //   let value = e.target.value;
  //   if (parseInt(value) < 10) {
  //     value = "0" + value;
  //   }
  //   let time;
  //   if (e.target.name === "hours") {
  //     time = `${value}:${goalTime.minutes}:${goalTime.seconds}`;
  //   } else if (e.target.name === "minutes") {
  //     time = `${goalTime.hours}:${value}:${goalTime.seconds}`;
  //   } else if (e.target.value === "seconds") {
  //     time = `${goalTime.hours}:${goalTime.minutes}:${value}`;
  //   }
  //   setGoalTime({ ...goalTime, [e.target.name]: value });
  //   setNewRunner({ ...newRunner, goal_time: time });
  // };

  // const formatTime = (timeUnit) => {
  //   //  "goal_time": "00:04:30",
  //   if (timeUnit === "hours") {
  //   }
  // }

  return (
    <div className="Register container">
      <h1>Register for Mercury 2022</h1>

      <form onSubmit={handleSubmit}>
        {/* NAME INPUT */}
        <div className="container">
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            name="first_name"
            value={newRunner.first_name}
            onChange={handleChange}
          />
          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            name="last_name"
            value={newRunner.last_name}
            onChange={handleChange}
          />
        </div>

        <hr></hr>

        {/* DOB DATEPICKER */}
        <div className="container">
          <label htmlFor="dob">Date Of Birth:</label>

          <input
            type="date"
            name="dob"
            min="1900-01-01"
            max="2005-01-01"
            onChange={handleChange}
            value={newRunner.DOB}
          ></input>
        </div>

        <hr></hr>

        {/* SEX SELECT */}
        <div className="container">
          <label htmlFor="sex">Sex:</label>
          <div className="select">
            <select required id="sex" name="sex" onChange={handleChange}>
              <option value="">--Select sex--</option>
              <option value="F">Female</option>
              <option value="M">Male</option>
            </select>
          </div>
        </div>

        <hr></hr>

        {/* EMAIL INPUT */}
        <div className="container">
          <label htmlFor="email">Email:</label>
          <input
            // type="email"
            type="text"
            name="email"
            value={newRunner.email}
            onChange={handleChange}
          />
        </div>

        <hr></hr>

        {/* LOCATION */}
        <div className="container">
          <div className="wrapper">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              name="city"
              value={newRunner.city}
              onChange={handleChange}
            />
          </div>

          <div className="wrapper">
            <label htmlFor="state">State:</label>
            <input
              type="text"
              name="state"
              value={newRunner.state}
              onChange={handleChange}
            />
          </div>
        </div>

        <hr></hr>

        {/* COHORT SELECT */}
        {/* cohortGroups = ["Men 18-39", "Women 18-39","Men 40-49", "Women 40-49","Men 50-59", "Women 50-59",
"Men 60-69", "Women 60-69", "Men 70+", "Women 70+","Men Wheelchair", "Women Wheelchair"]; */}
        <div className="container">
          <label htmlFor="_id">Cohort:</label>
          <div className="select">
            <select name="cohort_id" onChange={handleChange}>
              <option value="">--Select cohort--</option>
              {/* <optgroup label="Male"> */}
              <option value="1">Male 18-39</option>
              <option value="3">Male 40-49</option>
              <option value="5">Male 50-59</option>
              <option value="7">Male 60-69</option>
              <option value="9">Male 70+</option>
              {/* </optgroup> */}
              {/* <optgroup label="Female"> */}
              <option value="2">Female 18-39</option>
              <option value="4">Female 40-49</option>
              <option value="6">Female 50-59</option>
              <option value="8">Female 60-69</option>
              <option value="10">Female 70+</option>
              {/* </optgroup> */}
              {/* <optgroup label="Wheelchair"> */}
              <option value="11">Male</option>
              <option value="12">Female</option>
              {/* </optgroup> */}
            </select>
          </div>
        </div>

        <hr></hr>

        {/* GOAL TIME NUM INPUT */}
        {/* <div className="container time">
          <span>Goal Time: </span>

          <div className="wrapper">
            <label htmlFor="hours">Hours:</label>
            <input
              // id="hours"
              type="number"
              placeholder="00"
              min="0"
              max="99"
              step="1"
              name="hours"
              // data-type="goal_time"
              value={goalTime.hours}
              onChange={handleGoalTimeChange}
            ></input>
          </div>

          <div className="wrapper">
            <label htmlFor="minutes">Minutes:</label>
            <input
              // id="minutes"
              type="number"
              placeholder="00"
              min="0"
              max="59"
              step="1"
              name="minutes"
              // data-type="goal_time"
              value={goalTime.minutes}
              onChange={handleGoalTimeChange}
            ></input>
          </div>

          <div className="wrapper">
            <label htmlFor="seconds">Seconds:</label>
            <input
              // id="seconds"
              type="number"
              placeholder="00"
              min="0"
              max="59"
              step="1"
              name="seconds"
              // data-type="goal_time"
              value={goalTime.seconds}
              onChange={handleGoalTimeChange}
            ></input>
          </div>
        </div>

        <hr></hr> */}

        {/* WHEELCHAIR CHECKBOX INPUT */}
        <div className="container">
          <label htmlFor="wheelchair">Wheelchair</label>
          <input
            type="checkbox"
            name="wheelchair"
            value={newRunner.wheelchair}
            onChange={handleChange}
          />
        </div>

        {/* SUBMIT BUTTON */}
        <div className="container">
          {/* <button type="submit">Submit</button> */}
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
