"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Please enter a valid email address"),
  comment: z.string().min(8, "Comment must be at least 8 characters long"),
});

type FormFields = z.infer<typeof schema>;

const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise<void>((resolve) => setTimeout(resolve, 1000));
      // throw new Error();
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="mb-2 text-2xl font-bold text-white">Contact Me</h2>
      <div className="mb-3">
        <input
          {...register("name")}
          type="text"
          placeholder="Your name"
          name="name"
          className="w-full rounded border-0 bg-white px-3 py-2 text-sm text-black placeholder-gray-400 shadow"
        />
        {errors.name && (
          <p className="mt-3 text-red-500">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-3">
        <input
          {...register("email")}
          type="text"
          placeholder="Email"
          name="email"
          className="w-full rounded border-0 bg-white px-3 py-2 text-sm text-black placeholder-gray-400 shadow"
        />
        {errors.email && (
          <p className="mt-3 text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-3">
        <textarea
          {...register("comment")}
          rows={4}
          placeholder="Please leave your comment here..."
          name="comment"
          className="w-full rounded border-0 bg-white px-3 py-2 text-sm text-black placeholder-gray-400 shadow"
        />
        {errors.comment && (
          <p className="mt-3 text-red-500">{errors.comment.message}</p>
        )}
      </div>
      <button
        className="mb-5 rounded-lg bg-blue-500 px-5 py-3 text-sm font-bold uppercase text-white transition-all duration-150 ease-linear hover:bg-blue-400 lg:mb-10"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Loading..." : "Send a message"}
      </button>
      {errors.root && (
        <p className="mt-3 text-red-500">{errors.root.message}</p>
      )}
    </form>
  );
};

export default ContactForm;
