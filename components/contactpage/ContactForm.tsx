"use client";

import React from "react";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormFields = {
  name: string;
  email: string;
  comment: string;
};

const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="mb-2 text-2xl font-bold text-white">Contact Me</h2>
      <div className="mb-3">
        <input
          {...register("name", {
            required: true,
            minLength: 3,
          })}
          type="text"
          placeholder="Your name"
          name="name"
          className="w-full rounded border-0 bg-white px-3 py-2 text-sm text-black placeholder-gray-400 shadow"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          type="email"
          placeholder="Email"
          name="email"
          className="w-full rounded border-0 bg-white px-3 py-2 text-sm text-black placeholder-gray-400 shadow"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div className="mb-3">
        <input
          {...register("comment", {
            required: true,
            minLength: 8,
          })}
          placeholder="Your comment"
          name="comment"
          className="w-full rounded border-0 bg-white px-3 py-2 text-sm text-black placeholder-gray-400 shadow"
        />
        {errors.comment && (
          <p className="text-red-500">{errors.comment.message}</p>
        )}
      </div>
      <button className="mb-5 rounded-lg bg-blue-500 px-5 py-3 text-sm font-bold uppercase text-white transition-all duration-150 ease-linear hover:bg-blue-400 lg:mb-10">
        Send a message
      </button>
    </form>
  );
};

export default ContactForm;
