import React from "react";
import styles from "./Layout.module.css";

const Layout: React.FC = (props) => {
  return <div className={styles.layout}>{props.children}</div>;
};

export default Layout;
