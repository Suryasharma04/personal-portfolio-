"use server";

import React from "react";
import {Resend} from "resend";
import {validateString} from "@/lib/utils";
import { getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);
//name of the api key should match with what is in the .env file

export const sendEmail = async(formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    //server-side validation:
    if(!validateString(senderEmail, 500)){
        return{
            error: "Invalid sender email",
        };
    }

    if(!validateString(message, 5000)){
        return{
            error: "Invalid message",
        };
    }

    let data;
    try {
      data = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: "suryaa20024@gmail.com",
        subject: "Message from contact form",
        reply_to: senderEmail,
        react: React.createElement(ContactFormEmail, {
          message: message,
          senderEmail: senderEmail,
        }),
      });
    } catch (error: unknown) {
      return {
        error: getErrorMessage(error),
      };
    }
  
    return {
      data,
    };
  };