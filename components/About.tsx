"use client";

import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id='about' className='py-20'>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className='mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl'
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className='text-gray-300 text-center mt-8 max-w-2xl text-base md:text-lg'
        >
          I am a Mobile Application Developer specializing in Flutter & Dart,
          focusing on Clean Architecture and SOLID Principles. I have extensive
          experience in state management (BLoC, GetX, Riverpod), backend
          integration, real-time data handling, and deploying applications to
          both App Store and Google Play Store. I leverage AI tools to optimize
          code quality and development efficiency.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
          }}
          className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-5xl'
        >
          {[
            "Flutter & Dart",
            "Clean Architecture",
            "SOLID Principles",
            "BLoC",
            "GetX",
            "Riverpod",
            "REST API",
            "Firebase",
            "WebSocket",
            "Dynamic Forms",
            "User Status Tracking",
            "Payment Integration",
            "App Store Deploy",
            "Google Play Deploy",
            "AI Code Optimization",
            "Third-Party Services",
          ].map((skill) => (
            <div key={skill} className='text-center'>
              <div className='bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 border border-slate-700'>
                <p className='text-white font-medium'>{skill}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </LampContainer>
    </section>
  );
}
