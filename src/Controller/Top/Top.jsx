import React, { useState } from "react";
import Post from "./Post";
import styles from "./Top.module.css";

const Top = ({setFormData}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.mainDiv}>
      <Post open={open} setOpen={setOpen} setFormData={setFormData}/>
      <div className={styles.nav}>
        <div className={styles.nav1}>
          <div>
            <img
              src="https://www.citypng.com/public/uploads/preview/-11597192000cvdbhtccse.png"
              alt=""
            />
            <h2>JobHunt</h2>
          </div>
          <h4>Find Job</h4>
          <h4>Upskill Yourself!</h4>
        </div>
        <div className={styles.nav1}>
          <h4 className={styles.postBtn} onClick={() => setOpen(true)}>
            Post a Job
          </h4>
          <h4>Sign In</h4>
        </div>
      </div>
      <div className={styles.lines}>
        <h1>Find Your Dream Job</h1>
        <p>Browse through thousands of full-time or part-time jobs near you.</p>
      </div>
      <div className={styles.search}>
        <input type="search" name="name" placeholder="Search Here...." />
        <select name="location" id="location">
          <option value="">Select Location</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <button className={styles.button}>Search</button>
      </div>
    </div>
  );
};

export default Top;
