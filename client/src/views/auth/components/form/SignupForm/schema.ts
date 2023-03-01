import * as yup from "yup";

export const SignupSchema = yup.object().shape({
  username: yup.string().required("Le nom d'utilisateur est requis"),
  email: yup
    .string()
    .email("Entrez une adresse email valide")
    .required("L'adresse e-mail est requise"),
  // Add error gestion for password
  password: yup.string().required("Le mot de passe est requis"),
});
