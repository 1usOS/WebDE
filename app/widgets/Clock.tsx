import { useState, useEffect, Fragment } from "react";
import styles from "../page.module.css";

export default function Clock() {

  // Functions for Date and Time
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    let secTimer = setInterval( () => {
        let date = new Date()
        let weekday_short = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let month_short = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        let formatted_date = weekday_short[date.getDay()] + ", " + date.getDate() + " " + month_short[date.getMonth()]
        let formatted_time = date.getHours() + ":" + date.getMinutes().toLocaleString(undefined, {minimumIntegerDigits: 2})

        setTime(formatted_time)
        setDate(formatted_date)
  },1000)

  return () => clearInterval(secTimer);
  }, [])

  return (
    <Fragment>
      <div className={styles.clockdate}>{date}</div>
      <div className={styles.clocktime}>{time}</div>
    </Fragment>
  );
}