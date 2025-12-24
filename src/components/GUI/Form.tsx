"use client";
import Input from "./Input";

import "@/styles/contacts_form.css"
import useContactForm from "@/hooks/useContactForm";

export default function Form() {
  const { form, submit, changeHandler, submitHandler } = useContactForm()

  return (
    <form className="FORM" style={{ maxWidth: "55ch", padding: "2rem" }} onSubmit={e => submitHandler(e)}>
      <div className="flex flex-wrap" style={{ paddingBlock: "2rem", placeContent: "space-between" }}>
        <Input
          name="name"
          label="Name"
          value={form.name}
          type="text"
          required={true}
          onChange={changeHandler}
          className="mb-8"
        ></Input>
        <Input
          name="email"
          label="Email"
          value={form.email}
          type="email"
          required={true}
          onChange={changeHandler}
        ></Input>
      </div>
      <Input
        name="subject"
        label="Subject"
        className="subject"
        style={{ marginBlockEnd: "2rem" }}
        value={form.subject}
        type="text"
        required={true}
        onChange={changeHandler}
      ></Input>
      <Input
        name="message"
        label="Message"
        className="Message"
        value={form.message}
        type="textarea"
        required={true}
        onChange={changeHandler}
      ></Input>
      <button
        className="submit"
        onSubmit={(e) => submitHandler(e)}
        disabled={submit}
      >
        Let&apos;s Talk
      </button>
    </form>
  )
}