"use client";

import "@/styles/input.css"
import { HTMLInputTypeAttribute } from "react";

export const ssr = false;

interface input {
  name: string,
  label: string,
  type: HTMLInputTypeAttribute | "textarea",
  className?: string,
  style?: React.CSSProperties,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  required: boolean

  rows?: number,
  cols?: number
}

export default function Input({ name, label, className, style, value, onChange, required, type, rows, cols }: input) {
  return (
    <>
      <div
        className={`INPUT ${className ? className : ''}`}
        style={style}
      >
        {
          type === "textarea" ?
            <textarea
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              rows={rows ? rows : 8}
              cols={cols}
              style={{ width: "90%" }}
              required={required}></textarea>
            :
            <input
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              type={type}
              required={required}
            />

        }
        <label htmlFor={name}>{label}</label>
      </div>
    </>
  )
}