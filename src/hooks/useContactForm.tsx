import { useState } from "react";
import emailjs from '@emailjs/browser';

interface form {
  name: string,
  email: string,
  subject: string,
  message: string
}

interface result {
  form: form,
  submit: boolean,
  changeHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;

  submitHandler: (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => void;
}

export default function useContactForm(): result {
  const [form, setForm] = useState({
    name: '', email: '', subject: '', message: ''
  })

  const [submit, setSubmit] = useState(false)

  function changeHandler(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(formData => {
      return (
        {
          ...formData,
          [e.target.name]: e.target.value
        }
      )
    })
  }

  function submitHandler(e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) {
    setSubmit(true)
    e.preventDefault();
    if (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID === undefined) {
      return console.log("service id unavailable")
    }
    else if (process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID === undefined) {
      return console.log('template id unavailable')
    }
    else if (process.env.NEXT_PUBLIC_EMAILJS_API_KEY === undefined) {
      return console.log('public key unavailable')
    }

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, {
      from_name: form.name,
      to_name: 'Vinay',
      from_email: form.email,
      to_email: 'nayanpawar136@gmail.com',
      message: "Subject:" + form.subject + "\nmessage:" + form.message
    }, process.env.NEXT_PUBLIC_EMAILJS_API_KEY).then(() => {
      alert('Thank you. for Contacting us we will get back to you as soon as possible.')
      setSubmit(false)
      setForm({
        name: '', email: '', subject: '', message: ''
      })
    })
  }



  return { form, submit, changeHandler, submitHandler }
}