"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import axios from "axios";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = (data) => {
    console.log(data);

    const postMessage = async () => {
      try {
        const req = await axios.post(
          "https://my-3d-portfolio-server.onrender.com",
          data
        );
        console.log(req);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } catch (error) {
        console.log(error);
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 5000);
      }
    };
    postMessage();
  };

  return (
    <>
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-6"
      >
        <motion.input
          variants={item}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          type="text"
          placeholder="name"
          {...register("name", {
            required: "This field is required!",
            minLength: {
              value: 3,
              message: "Name should be at least 3 characters long.",
            },
          })}
        />
        {errors.name && (
          <span className="inline-block self-start text-accent">
            {errors.name.message}
          </span>
        )}

        <motion.input
          variants={item}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          type="email"
          placeholder="email"
          {...register("email", { required: "This field is required!" })}
        />
        {errors.email && (
          <span className="inline-block self-start text-accent">
            {errors.email.message}
          </span>
        )}

        <motion.textarea
          variants={item}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          {...register("message", {
            required: "This field is required!",
            maxLength: {
              value: 500,
              message: "Message should be at most 500 characters long.",
            },
            minLength: {
              value: 50,
              message: "Message should be at least 50 characters long.",
            },
          })}
          placeholder="message"
        />
        {errors.message && (
          <span className="inline-block self-start text-accent">
            {errors.message.message}
          </span>
        )}

        <motion.input
          variants={item}
          value="cast your message!"
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-accent font-bold focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg cursor-pointer capitalize"
          type="submit"
        />
      </motion.form>
      {success && (
        <div
          class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 fixed bottom-5 right-5 w-1/4"
          role="success"
        >
          <p class="font-bold">Spell cast successfully!</p>
          <p>
            A reply shall materialize with the quickness of a brewing potion.
          </p>
        </div>
      )}
      {error && (
        <div
          class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 fixed bottom-5 right-5 w-1/4"
          role="error"
        >
          <p class="font-bold">A tangle in the web!</p>
          <p>Mend the broken threads and try anew. </p>
        </div>
      )}
    </>
  );
}
