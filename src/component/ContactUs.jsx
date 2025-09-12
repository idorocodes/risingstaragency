import { useState } from "react"

export const ContactUs = () => {
  // state for form inputs
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })

  // handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // build WhatsApp link dynamically
  const whatsappLink = `https://api.whatsapp.com/send?phone=2348039184642&text=${encodeURIComponent(
    `Hello, my name is ${form.firstName} ${form.lastName}.
Company: ${form.company}
Email: ${form.email}
Phone: ${form.phone}

Message: ${form.message}`
  )}`

  return (
    <div id="contact-us" className="isolate bg-gray-900 px-6 py-16 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Upload Job
        </h2>
        <p className="mt-5 text-lg text-gray-400">
          Send a custom message to us today to get started.
        </p>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold text-white"
            >
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={form.firstName}
              onChange={handleChange}
              className="mt-2.5 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold text-white"
            >
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={form.lastName}
              onChange={handleChange}
              className="mt-2.5 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold text-white"
            >
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={form.company}
              onChange={handleChange}
              className="mt-2.5 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-white"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="mt-2.5 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-white"
            >
              Phone number
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              value={form.phone}
              onChange={handleChange}
              className="mt-2.5 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="mt-2.5 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500"
            />
          </div>
        </div>

        <div className="mt-10">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-md cursor-pointer bg-[#008eca] px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#02425e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f14126]"
          >
            Send Application
          </a>
        </div>
      </form>
    </div>
  )
}
