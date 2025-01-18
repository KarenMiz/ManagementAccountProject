import React from "react";
import Form from "../../forms/components/Form";
import ROUTES from "../../routes/routesModel";
import Input from "../../forms/components/Input.jsx";

const SignupForm = ({
  title,
  onSubmit,
  onReset,
  validateForm,
  errors,
  data,
  onInputChange,
}) => {


  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <Form
      title={title}
      onSubmit={onSubmit}
      onReset={onReset}
      errors={errors}
      validateForm={validateForm}
      styles={{ maxWidth: "800px" }}
      to={ROUTES.ROOT}
    >
      <Input
        name="fullName"
        label="full Name"
        error={errors.fullName}
        onChange={onInputChange}
        data={data}
        sm={6}
        onKeyPress={handleKeyPress}
      />
     
      <Input
        name="email"
        label="email"
        type="email"
        error={errors.email}
        onChange={onInputChange}
        data={data}
        sm={6}
        onKeyPress={handleKeyPress}
      />
      <Input
        name="password"
        label="password"
        type="password"
        error={errors.password}
        onChange={onInputChange}
        data={data}
        sm={6}
        onKeyPress={handleKeyPress}
      />
      
    </Form>
  );
}
export default React.memo(SignupForm);

