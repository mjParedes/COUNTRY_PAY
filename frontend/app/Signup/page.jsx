"use client";
import Image from "next/image";
import signupImg from "../../public/images/Signup.jpg";
import { ErrorMessage, Field, Form, Formik } from "formik";
import FormInput from "../Components/FormComp/Input";
import * as Yup from "yup";
import PageTitle from "../Components/FormComp/Title";
import SubTitle from "../Components/FormComp/SubTitle";
import Button from "../Components/Button";

export default function SignupPage() {
  const signupSchema = () =>
    Yup.object().shape({
      firstName: Yup.string().required("Campo requerido"),
      lastName: Yup.string().required("Campo requerido"),
    });

  const handleSubmit = (values) => {
    console.log(values)
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <Image
          src={signupImg}
          alt="signup"
          className="w-full h-full object-cover"
        />
      </div>
      <Formik
        initialValues={{ firstName: "", lastName: "" }}
        validationSchema={signupSchema}
        onSubmit={handleSubmit}
      >
        <Form className="w-full md:w-1/2 bg-Morado/100 flex flex-col items-center p-8">
          <PageTitle title={"Registrate"} />

          <div className="bg-Grises/50 p-7 rounded-lg w-login shadow-lg mt-16">
            <FormInput labelHtmlFor="text" label="Nombre (s)" />
            <Field
              type="text"
              name="firstName"
              placeholder="Ingresar nombre"
              className="w-full h-12 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 mt-2  text-lg placeholder-Grises/350 mb-4"
            />

            {/* Mensaje de Error email*/}
            <ErrorMessage
              name="firstName"
              component="p"
              className="text-red-500 text-sm mb-4"
            />

            {/* input de Contraseña */}
            <FormInput labelHtmlFor="text" label="Apellido" />
            <Field
              type="text"
              name="lastName"
              placeholder="Ingresar apellido"
              className="w-full h-12 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 mt-2 text-lg placeholder-Grises/350 mb-2"
            />

            <ErrorMessage
              name="lastName"
              component="p"
              className="text-red-500 text-sm mb-4"
            />

            <div className="flex mt-8">
              <Button type="submit" text="Registrar" variant="filled" />
            </div>
          </div>
          <SubTitle
            subTitleText="¿Ya tienes una cuenta?"
            linkText="Iniciar sesion"
            linkUrl="/loginPage"
          />
        </Form>
      </Formik>
    </div>
  );
}
