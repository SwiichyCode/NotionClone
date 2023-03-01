import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/auth.service";
import { AuthFormTitle } from "../../common/AuthFormTitle";
import { FormContainer } from "../../container/FormContainer";
import { AuthInput } from "../../common/AuthInput";
import { AuthInputPassword } from "../../common/AuthInputPassword";
import { FlexColWrapper } from "@/components/templates/FlexColWrapper";
import { Button } from "@/components/common/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchema } from "./schema";
import { AuthLink } from "../../common/AuthLink";

type SignupInputs = {
  username: string;
  email: string;
  password: string;
};

export const SignupForm = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInputs>({
    resolver: yupResolver(SignupSchema),
  });

  let navigate = useNavigate();

  const onSubmit: SubmitHandler<SignupInputs> = async (data) => {
    await AuthService.register(data.username, data.email, data.password).then(
      () => {
        navigate("/");
      },
      (error: any) => {
        const resMessage = error.response.data.message;
        setErrorMessage(resMessage);
      }
    );
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <AuthFormTitle text="Inscription" />

      <FlexColWrapper gap={4} classname="pt-5">
        <AuthInput name="username" label="Pseudo" register={register} />
        <AuthInput
          name="email"
          label="E-mail"
          type="email"
          register={register}
        />
        <AuthInputPassword
          name="password"
          label="Mot de passe"
          register={register}
        />
        {errorMessage && (
          <p className=" text-sm text-red-500">{errorMessage}</p>
        )}

        <Button text="Inscription" type="submit" />
      </FlexColWrapper>

      <AuthLink text="Ou connecte toi !" textLink="Connexion" url="/login" />
    </FormContainer>
  );
};
