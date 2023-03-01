import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/auth.service";
import { AuthFormTitle } from "../../common/AuthFormTitle";
import { Auth2Button } from "../../common/Auth2Button";
import { AuthInput } from "../../common/AuthInput";
import { AuthLink } from "../../common/AuthLink";
import { AuthInputPassword } from "../../common/AuthInputPassword";
import { FormContainer } from "../../container/FormContainer";
import { FlexColWrapper } from "@/components/templates/FlexColWrapper";
import { Button } from "@/components/common/Button";
import GoogleIcon from "@/assets/google.svg";
import AppleIcon from "@/assets/apple.svg";
import { SigninSchema } from "./schema";

type SigninInputs = {
  email: string;
  password: string;
};

export const SigninForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninInputs>({
    resolver: yupResolver(SigninSchema),
  });

  let navigate = useNavigate();

  const onSubmit: SubmitHandler<SigninInputs> = async (data) => {
    await AuthService.login(data.email, data.password).then(
      () => {
        navigate("/dashboard");
      },
      (error: any) => {
        const resMessage = error.response.data.message;

        alert(resMessage);
      }
    );
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <AuthFormTitle text="Connexion" />

      <FlexColWrapper gap={4} classname="border-b-1 pb-5 border-gray-400">
        <Auth2Button text="Continuer avec Google" icon={GoogleIcon} />
        <Auth2Button text="Continuer avec Apple" icon={AppleIcon} />
      </FlexColWrapper>

      <FlexColWrapper gap={4} classname="pt-5">
        <AuthInput
          name="email"
          label="E-mail"
          register={register}
          error={errors.email?.message}
        />
        <AuthInputPassword
          name="password"
          label="Mot de passe"
          register={register}
          error={errors.password?.message}
        />

        <Button text="Connexion" type="submit" />
      </FlexColWrapper>

      <AuthLink
        text="Ou créez un compte"
        textLink="Inscris-toi !"
        url="/signup"
      />
    </FormContainer>
  );
};
