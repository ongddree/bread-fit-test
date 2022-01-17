import styles from "./PostMenuModal.module.css";
import React from "react";

function PostMenuModal({ setViewModal }) {
  return (
    <div>
      <div
        className={styles["modal-back"]}
        onClick={() => {
          setViewModal(false);
        }}
      ></div>
      <div className={styles["post-modal"]}>
        <ul
          className={styles["menu-list"]}
          onClick={() => {
            setViewModal(false);
          }}
        >
          <li className={styles["menu-item"]}>삭제</li>
          <li className={styles["menu-item"]}>수정</li>
        </ul>
      </div>
    </div>
  );
}

export default PostMenuModal;
