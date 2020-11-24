import React from "react";
import { WrapperCenter, Form, Input, Button, LoginWith, Img } from "./views";

const SignComponent = () => {
  return (
    <WrapperCenter>
      <Form>
        <h2>{"Register/Login"} Form</h2>
        <LoginWith>
          <Img src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip" />
          <Button>With Google</Button>
        </LoginWith>
        <LoginWith className="facebook">
          <Img src="https://play-lh.googleusercontent.com/ccWDU4A7fX1R24v-vvT480ySh26AYp97g1VrIB_FIdjRcuQB2JP2WdY7h_wVVAeSpg" />
          <Button>With Facebook</Button>
        </LoginWith>

        <div className="email">
          <Input type="text" placeholder="Enter your email" />
        </div>
        <div className="password">
          <Input type="password" placeholder="Enter your password" />
        </div>
        <div className="password">
          <Input type="password" placeholder="Enter your password" />
        </div>
        <Button>Submit</Button>
      </Form>
    </WrapperCenter>
  );
};

export default SignComponent;
