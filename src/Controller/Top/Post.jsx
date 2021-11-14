import { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import styles from "./Top.module.css";

const Post = ({ open, setOpen, setFormData }) => {
  const [data, setData] = useState({});
  const handleOnchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    setFormData(data);
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className={styles.post}>
          <h2 style={{ textAlign: "center" }}>Post a Job</h2>
          <div>
            <label htmlFor="title">Title: </label>
            <input
              onChange={handleOnchange}
              type="text"
              name="title"
              id="title"
              placeholder="Enter Title..."
            />
          </div>
          <div>
            <label htmlFor="image">Image: </label>
            <input
              onChange={handleOnchange}
              type="text"
              name="image"
              id="image"
              placeholder="Enter Image URL..."
            />
          </div>
          <div>
            <label htmlFor="locatio">Location: </label>
            <input
              onChange={handleOnchange}
              type="text"
              name="location"
              id="locatio"
              placeholder="Enter Location..."
            />
          </div>
          <div>
            <label htmlFor="level">Level: </label>
            <input
              onChange={handleOnchange}
              type="text"
              name="level"
              id="level"
              placeholder="Enter Level..."
            />
          </div>
          <div>
            <label htmlFor="company">Company: </label>
            <input
              onChange={handleOnchange}
              type="text"
              name="company"
              id="company"
              placeholder="Enter Company..."
            />
          </div>
          <div>
            <label htmlFor="desc">Description: </label>
            <textarea
              onChange={handleOnchange}
              name="description"
              id="desc"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button
            onClick={handleClick}
            className={styles.button}
            style={{ float: "right" }}
          >
            Post Job
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Post;
