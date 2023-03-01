import * as yup from "yup";

export const SigninSchema = yup.object().shape({
  email: yup
    .string()
    .email("Entrez une adresse email valide")
    .required("L'adresse e-mail est requise"),
  password: yup.string().required("Le mot de passe est requis"),
});
