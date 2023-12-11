import Image from "next/image";
import { ForwardRefRenderFunction, forwardRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface Form {
  readonly access_key: string;
  readonly name: string;
  readonly email: string;
  readonly message: string;
}

const Contact: ForwardRefRenderFunction<HTMLElement, unknown> = (
  _props,
  ref,
) => {
  const { register, handleSubmit, formState, reset } = useForm<Form>();

  const onSubmit = async (data: unknown) => {
    await toast.promise(
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data, null, 2),
      }),
      {
        loading: "Sending your message",
        success: "Yay, you made it. I will reply as soon as posible",
        error: `Oops, something went wrong, let's try again.`,
      },
      {
        style: {
          background: "#333",
          color: "#fff",
        },
      },
    );

    reset();
  };

  return (
    <section ref={ref} className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className=" col-span-2">
          <h2 className="mb-2 lg:mb-4 text-white text-3xl lg:text-[64px] font-bold lg:leading-[76.80px]">
            Hire Me
          </h2>
          <p className="mb-2 lg:mb-4 text-white text-opacity-75 text-base font-medium leading-7 tracking-tight">
            {`Passionate web and mobile developer. Fast, reliable, and user-friendly. Always learning new skills. Let’s create something amazing.`}
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 md:mt-16 bg-white bg-opacity-[0.07] backdrop-blur-[20px] p-4 md:p-6 rounded-2xl"
          >
            <input
              type="hidden"
              value="28ae1edd-600b-4e43-aaa5-0c3aff6fd45c"
              {...register("access_key")}
            />
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                className="bg-[#000105] text-white px-4 py-2 rounded-lg"
                placeholder="Write your name here"
                {...register("name", { required: "I need your name" })}
              />
              {formState.errors.name && (
                <p className="text-red-600 text-xs">
                  {formState.errors.name.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                className="bg-[#000105] text-white px-4 py-2 rounded-lg"
                placeholder="Email here"
                {...register("email", {
                  required: "I need to reply your message",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Your email seems invalid",
                  },
                })}
              />
              {formState.errors.email && (
                <p className="text-red-600 text-xs">
                  {formState.errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="message">Email</label>
              <textarea
                id="message"
                className="bg-[#000105] text-white px-4 py-2 rounded-lg"
                placeholder="Your message should be here"
                rows={5}
                {...register("message", {
                  required: "Please explain a bit about what you need.",
                  minLength: { value: 50, message: "You need more text" },
                })}
              />
              {formState.errors.message && (
                <p className="text-red-600 text-xs">
                  {formState.errors.message.message}
                </p>
              )}
            </div>
            <div className="mt-4 flex justify-end">
              <button className="flex pl-5 pr-2 py-2 bg-[#0D3DD5] rounded-full justify-center gap-4 items-center">
                <span>{`Send`}</span>
                <div className="bg-white rounded-full p-2">
                  <Image
                    className=""
                    src="/new/hire-icon.svg"
                    width={24}
                    height={24}
                    alt="icon"
                  />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(Contact);
