import React, { useState } from "react";
import { AppBLContext } from "../../App/layers/business";

import { Form, Field, Input } from "../../shared/Form/views";
import { LinkButton } from "../../shared/LinkButton/views";

const ProfilePresentation = () => {
  const { setValues } = React.useContext(AppBLContext);
  const [data, setData] = useState({ name: "", surname: "" });

  const changeValues = (e) => {
    const { value } = e.target;
    const field = e.target.name;
    setData({
      name: field === "name" ? value : data.name,
      surname: field === "surname" ? value : data.surname,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    setValues(data);
    setData({ name: "", surname: "" });
  };

  return (
    <>
      <h1>Your Profile</h1>
      <Form onSubmit={submitForm}>
        <Field>
          <Input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={data.name}
            onChange={changeValues}
          />
        </Field>
        <Field>
          <Input
            type="text"
            placeholder="Enter your surname"
            name="surname"
            value={data.surname}
            onChange={changeValues}
          />
        </Field>
        <LinkButton style={{ marginTop: "10px" }} onSubmit={submitForm}>
          Submit
        </LinkButton>
      </Form>
    </>
  );
};

export { ProfilePresentation };
