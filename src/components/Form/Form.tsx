import { ZodType, z } from "zod";
import Input from "../Input/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import "../../styles/components/_form.scss";
import FormButton from "../Button/FormButton";
import Checkbox from "../Checkbox/Checkbox";

interface FormProps {
  type: string;
  isConfirmed: boolean;
}

interface IState {
  inputStates: any;
  isChecked: boolean;
}

type FormData = {
  name?: string;
  email?: string;
  password?: string;
  repeatPassword?: string;
};


export default function Form({ type, isConfirmed }: FormProps) {

  const updateState = (newState: Partial<IState>): void =>
    setState((prevState) => ({ ...prevState, ...newState }));
  const [state, setState] = useState<IState>({
    inputStates: {
      emailState: "default",
      nameState: "default",
      passwordState: "default",
      repeatPasswordState: "default",
    },
    isChecked: false,
  });

  const formSchema: ZodType<FormData> = z
    .object({
      name: z.string().min(1).max(40).optional(),
      email: z.string().email().optional(),
      password: z.string().min(6).optional(),
      repeatPassword: z.string().min(6).optional(),
    })
    .refine((data: any) => data.password === data.repeatPassword, {
      message: "Passwords do not match",
      path: ["repeatPassword"],
    });

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const isFieldFilled = (fieldName: string | undefined) => !!fieldName;

  const submitData = (data: FormData) => {
    // SEND DATA TO THE SERVER
  };

  const isFieldCorrect = async (
    fieldName: keyof FormData,
    fieldValue: string | undefined
  ) => {
    await trigger(fieldName);
    if (isFieldFilled(fieldValue) && errors[fieldName] === undefined)
      return "correct";
    return !isFieldFilled(fieldValue)
      ? "default"
      : errors[fieldName]?.message || "default";
  };

  const updateFieldStates = async (field: keyof FormData) => {
    const fieldState = await isFieldCorrect(`${field}`, field);

    const newInputStates = {
      [`${field}State`]: fieldState,
    };

    updateState({ inputStates: { ...state.inputStates, ...newInputStates } });
  };

  function handleCheck() {
    updateState({ isChecked: !state.isChecked });
  }

  return (
    <form className="form__wrapper" onSubmit={handleSubmit(submitData)}>
      {type === "register" && !isConfirmed && (
        <div className="form">
          <Input
            type="email"
            state={state.inputStates.emailState}
            placeholder="Your email"
            registerType={register("email")}
            handleBlur={() => updateFieldStates("email")}
          />
        </div>
      )}
      {type === "register" && isConfirmed && (
        <div className="form">
          <Input
            type="name"
            state={state.inputStates.nameState}
            placeholder="Your name"
            registerType={register("name")}
            handleBlur={() => updateFieldStates("name")}
          />
          <Input
            type="password"
            state={state.inputStates.passwordState}
            placeholder="Password"
            registerType={register("password")}
            handleBlur={() => updateFieldStates("password")}
          />
          <Input
            type="password"
            state={state.inputStates.repeatPasswordState}
            placeholder="Repeat password"
            registerType={register("repeatPassword")}
            handleBlur={() => updateFieldStates("repeatPassword")}
          />
          <Checkbox
            text="Remember me"
            checked={state.isChecked}
            handleClick={handleCheck}
          />
        </div>
      )}
      <div
        className={`submit__button ${(isValid && state.isChecked) && "valid"}`}
        onClick={handleSubmit(submitData)}
      >
        <Button text="Next" />
      </div>
    </form>
  );
}
