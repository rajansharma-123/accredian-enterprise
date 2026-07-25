"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Enterprise Learning Platform
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
              Empower Your Workforce with Future-Ready Skills
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Upskill your employees through industry-aligned learning
              programmes, certifications and measurable workforce
              transformation.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                Book a Demo
              </button>

              <button className="rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50">
                Explore Programs
              </button>
            </div>

            <div className="mt-12 flex gap-10">
              <div>
                <h2 className="text-3xl font-bold text-blue-600">500+</h2>
                <p className="text-gray-600">Enterprise Clients</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-600">2M+</h2>
                <p className="text-gray-600">Learners</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-600">95%</h2>
                <p className="text-gray-600">Completion Rate</p>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="flex h-[420px] w-full max-w-md items-center justify-center rounded-3xl bg-blue-100 shadow-xl">
              <span className="text-2xl font-bold text-blue-700">
                Hero Illustration
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}