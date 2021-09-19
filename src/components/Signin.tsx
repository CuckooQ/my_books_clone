import { Row, Col, Input, Button, Image } from "antd";
import React, { useRef } from "react";
import { SigninReqType } from "../types/auth";
import styles from "./Signin.module.css";

interface SigninProps {
  signin: (reqData: SigninReqType) => void;
}
const Signin: React.FC<SigninProps> = (props) => {
  const { signin } = props;
  const emailRef = useRef<Input>(null);
  const pwRef = useRef<Input>(null);

  const signinClick = () => {
    const email = emailRef.current?.state.value;
    const password = pwRef.current?.state.value;
    signin({ email, password });
  };

  return (
    <Row align="middle" className={styles.signin_row}>
      <Col span={24}>
        <Row className={styles.signin_contents}>
          <Col span={12}>
            <Image
              src="/images/bg_signin.png"
              alt="Signin"
              className={styles.signin_bg}
            />
          </Col>
          <Col span={12}>
            <div className={styles.signin_title}>My Books</div>
            <div className={styles.signin_subtitle}>
              Please Note Your Opinion
            </div>
            <div className={styles.signin_underline} />
            <div className={styles.email_title}>
              Email
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <Input
                ref={emailRef}
                placeholder="Email"
                autoComplete="email"
                name="email"
                className={styles.input}
              />
            </div>
            <div className={styles.password_title}>
              Password
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <Input
                ref={pwRef}
                type="password"
                autoComplete="current-password"
                name="pw"
                className={styles.input}
              />
            </div>
            <div className={styles.button_area}>
              <Button size="large" onClick={signinClick}>
                Sign in
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Signin;
