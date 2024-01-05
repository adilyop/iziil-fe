import { DefaultTemplate } from "../components/templates/DefaultTemplate";
import { HeaderComponent } from "../components/header/headerComponent";
import { PageTitle } from "../components/widgets/page-title";
import { useRouter } from 'next/router'

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import emailjs from "@emailjs/browser";
import React, { useRef, useEffect } from "react";


// import welcomeImage from '../../assets/images/template.jpg';

export default function HomePage() {
  const form: any = useRef();
  const { asPath, pathname } = useRouter();
  const emailRef = useRef<HTMLInputElement>();
  const nameRef = useRef<HTMLInputElement>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_fgk143o",
      "template_95sreql",
      form.current,
      "user_ZTSwo3kZFGZPv3CxayCd6"
    )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <DefaultTemplate>
      <HeaderComponent></HeaderComponent>
      <PageTitle section="Contact Us" heading="">
        Complete this form and we will get back to you in 24 hours.
      </PageTitle>

      <form ref={form} onSubmit={sendEmail} className="bg-white mx-auto w-full mt-12 lg:w-5/12 px-8" >
        <div className="mb-8 flex gap-8"></div>
        <label>Name</label>
        <Input className="outlined lg text-black pl-4" type="text" placeholder="Full Name" name="name" />
        <label>Email</label>
        <Input className="outlined lg text-black pl-4" type="email" placeholder="Email" name="email" />
        <label>Message</label>
        <Textarea className="outlined lg text-black pl-4" placeholder="Message" name="message" />
        <div className="w-64 bg-gray-900">
          <Input className="w-64 h-12 bg-gray-900 text-gray-200" type="submit" value="Send" />

        </div>
      </form>

      <div className="bg-white py-8 text-center text-gray-500">
        iZiil.com All rights reserved 2024
      </div>
    </DefaultTemplate>
  );
}
