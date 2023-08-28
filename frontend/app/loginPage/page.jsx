"use client";
import React, {useContext } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import leftImage from "../../public/images/rectangle.jpg";
import PageTitle from "../Components/FormComp/Title";
import SubTitle from "../Components/FormComp/SubTitle";
import FormInput from "../Components/FormComp/Input";
import Button from "../Components/Button";
import {AuthContext} from "../context/auth-context";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import handleLogin from "./loginService";


const LoginPage = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Correo electrónico no válido")
      .required("Campo requerido"),
    password: Yup.string().required("Campo requerido"),
  });

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    await handleLogin(values, setSubmitting, setFieldError, authContext, router);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Mitad Izquierda */}
      <div className="md:w-1/2">
        <Image
          src={leftImage}
          alt="Imagen"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mitad Derecha */}
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        <Form className="md:w-1/2 bg-Morado/100 flex flex-col items-center p-8">
          <PageTitle title={"Inicia sesión"} />

          <div className="bg-Grises/50 p-7 rounded-lg w-login shadow-lg mt-16">
            {/* input de Correo Electrónico */}
            <FormInput labelHtmlFor="email" label="Correo electrónico" />
            <Field
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="w-full h-12 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 mt-2  text-lg placeholder-Grises/350 mb-4"
            />

            {/* Mensaje de Error email*/}
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm mb-4"
            />

            {/* input de Contraseña */}
            <FormInput labelHtmlFor="password" label="Contraseña" />
            <Field
              type="password"
              name="password"
              placeholder="Contraseña"
              className="w-full h-12 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 mt-2 text-lg placeholder-Grises/350 mb-2"
            />

            {/* Mensaje de Error contraseña*/}
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-sm mb-4"
            />

            <div className="text-right">
              <a href="#" className="text-Grises/350 text-sm underline">
                Olvidé mi contraseña
              </a>
            </div>

            {/* Botones */}
            <div className="flex mt-8">
              <Button type="submit" text="Iniciar" variant="filled" />
            </div>
          </div>
          <SubTitle
            subTitleText="¿No tienes una cuenta aún?"
            linkText="Regístrate"
            linkUrl="/Signup"
          />
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
