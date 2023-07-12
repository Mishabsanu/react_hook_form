import React from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import "./Form.css";

const Form = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    //   if()
    console.log(data);
  };

  return (
    <div>
      <h1>FILL THIS FORM </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input {...register("name", { required: true })} />
          {errors.name && <span>Name is required.</span>}
        </div>

        <div>
          <label>Mobile:</label>
          <input
            {...register("mobile", { maxLength: 10, pattern: /^[0-9+\-]+$/ })}
          />
          {errors.mobile && <span>Invalid mobile number.</span>}
          {errors.genre?.type === "maxLength" && (
            <span style={{ color: "red" }}>
              Genre must less than 10 Character
            </span>
          )}
        </div>

        <div>
          <label>Email:</label>
          <input {...register("email", { pattern: /^\S+@\S+$/i })} />
          {errors.email && <span>Invalid email address.</span>}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            {...register("password", {
              pattern:
                /^(?=.*[@#$])(?=.*[0-9]{4})(?=.*[A-Z]{2})(?=.*[a-z]{2}).{8,}$/,
              required: true,
            })}
          />
          {errors.password && (
            <span className="error">
              Invalid password.Password must contain at least 1 special
              character (@#$), 4 numbers, 2 capital letters, and 2 lowercase
              letters{" "}
              {errors.password.type === "required" && "Password is required."}
            </span>
          )}
        </div>

        <div>
          <label>Re-enter Password:</label>
          <input
            {...register("repassword", {
              validate: (value) => value === password,
            })}
          />
          {errors.repassword && <span>Passwords do not match.</span>}
        </div>
        <label htmlFor="func" className="form_label">
          Select Position
        </label>

        <Controller
          name="select"
        
          control={control}
          render={({ field }) => (
            <Select
            required
              {...field}
              options={[
                {
                  value: "Full Stack Developer",
                  label: "Full Stack Developer",
                },
                { value: "Node js Developer", label: "Node js Developer" },
                { value: "React Js Developer", label: "React Js Developer" },
              ]}
            />
          )}
        />
        <h5 style={{ color: "white" }}> My Skill (optional)</h5>
        <div className="checkbox">
          <div>
            <label htmlFor="">MongoDb </label>
            <input
              type="checkbox"
              placeholder="MongoDb"
              {...register("MongoDb", {})}
            />
          </div>
          <div>
            <label htmlFor="">Reactjs </label>
            <input
              type="checkbox"
              placeholder="Reactjs"
              {...register("Reactjs", {})}
            />
           
          </div>
          <div>
            <label htmlFor="">Nodejs </label>
            <input
              type="checkbox"
              placeholder="Nodejs"
              {...register("Nodejs", {})}
            />
          </div>
          <div>
            <label htmlFor="">Javascript </label>
            <input
              type="checkbox"
              placeholder="Javascript"
              {...register("Javascript", {})}
            />
          </div>
        </div>
        <h5 style={{ color: "white" }}> I would like to Work From</h5>
        <div className="buttons">
          
          <label htmlFor="field-Home">
            <input
              {...register("weather")}
              type="radio"
              name="weather"
              value="Home"
              id="field-Home"
              required
            />
            Home
          </label>
          <label htmlFor="field-Office">
            <input
              {...register("weather")}
              type="radio"
              name="weather"
              value="Office"
              id="field-Office"
              required
            />
            Office
          </label>
          <label htmlFor="field-flexible">
            <input
              {...register("weather")}
              type="radio"
              name="weather"
              value="flexible"
              id="field-flexible"
              required
            />
            Flexible
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
