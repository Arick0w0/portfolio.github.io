"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BackgroundGradient } from "./ui/background-gradient";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Taxi Driver App",
    description:
      "Real-time navigation and trip management platform for professional taxi drivers",
    highlights: [
      "Built live GPS tracking system handling 100+ concurrent driver sessions",
      "Implemented WebSocket-based chat/call reducing customer wait time by 35%",
    ],
    technologies: ["Flutter", "GetX", "Firebase", "Google Maps", "WebSocket"],
    image: "taxiDriver.png",
    className: "md:col-span-2",
  },
  {
    title: "Food Delivery App",
    description:
      "End-to-end food delivery platform with real-time order tracking",
    highlights: [
      "Developed order management system processing 500+ daily orders",
      "Built real-time delivery tracking with live location updates",
    ],
    technologies: ["Flutter", "GetX", "Firebase", "WebSocket"],
    image: "foodCustomer.png",
    className: "md:col-span-1",
  },
  {
    title: "Smart ODS App",
    description:
      "Government service platform for import quota requests and tracking",
    highlights: [
      "Architected dynamic form system handling 50+ different form types",
      "Built real-time application status tracking with step-by-step progress",
    ],
    technologies: ["Flutter", "Riverpod", "Dynamic Forms", "REST API"],
    image: "smartOds.png",
    className: "md:col-span-1",
  },
  {
    title: "DOTP App",
    description:
      "Enterprise quota management with complex dynamic forms and workflow tracking",
    highlights: [
      "Developed dynamic form builder supporting conditional field validation",
      "Implemented multi-step approval workflow with real-time status updates",
    ],
    technologies: ["Flutter", "BLoC", "Dynamic Forms", "Firebase"],
    image: "dtop.png",
    className: "md:col-span-2",
  },
  {
    title: "EV Charging App",
    description:
      "Smart EV charging station locator with real-time availability monitoring",
    highlights: [
      "Built real-time charging station monitoring using WebSocket connections",
      "Implemented interactive map showing live availability for 200+ stations",
    ],
    technologies: ["Flutter", "Riverpod", "WebSocket", "Google Maps"],
    image: "ev.png",
    className: "md:col-span-2",
  },
  {
    title: "Taxi Customer App",
    description:
      "User-friendly ride booking platform with real-time tracking and secure payments",
    highlights: [
      "Built seamless ride booking flow reducing booking time to under 30 seconds",
      "Integrated multiple payment gateways supporting cards and e-wallets",
    ],
    technologies: ["Flutter", "Google Maps", "Firebase", "Payment Gateway"],
    image: "taxiCsteom.png",
    className: "md:col-span-1",
  },
  {
    title: "Food Driver App",
    description:
      "Delivery partner application with route optimization and earnings tracking",
    highlights: [
      "Built intelligent route optimization reducing delivery time by 30%",
      "Developed earnings dashboard with real-time commission calculations",
    ],
    technologies: ["Flutter", "GetX", "Google Maps", "Real-time DB"],
    image: "foodDiver.png",
    className: "md:col-span-1",
  },
  {
    title: "Express Driver App",
    description:
      "Logistics driver platform for parcel delivery and bus trip management",
    highlights: [
      "Developed parcel tracking system handling 1000+ daily deliveries",
      "Built QR code scanner for instant ticket validation and check-in",
    ],
    technologies: ["Flutter", "GetX", "WebSocket", "Firebase", "QR Scanner"],
    image: "expressDiver.png",
    className: "md:col-span-1",
  },
  {
    title: "Express Customer App",
    description:
      "User-friendly logistics app for tracking parcels and booking bus tickets",
    highlights: [
      "Built real-time parcel tracking with delivery status notifications",
      "Integrated payment gateway for seamless ticket booking and payments",
    ],
    technologies: ["Flutter", "QR Scanner", "Payment Gateway", "FCM"],
    image: "customerExpress.png",
    className: "md:col-span-1",
  },
];

export default function Projects() {
  return (
    <section id='projects' className='bg-black py-32 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <h2 className='text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>
            Selected Works
          </h2>
          <p className='text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto'>
            A collection of high-performance mobile applications built with
            Flutter
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(project.className)}
            >
              <BackgroundGradient className='h-full rounded-[22px] bg-zinc-900 p-6 flex flex-col'>
                {/* Image Container */}
                <div className='relative h-64 md:h-80 w-full overflow-hidden rounded-2xl mb-6'>
                  <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10' />
                  <Image
                    src={`${
                      process.env.NODE_ENV === "production" ? "/portfolio" : ""
                    }/images/${project.image}`}
                    alt={project.title}
                    fill
                    className='object-cover'
                  />
                </div>

                {/* Content */}
                <div className='flex-1 flex flex-col'>
                  <div className='flex justify-between items-start mb-3'>
                    <h3 className='text-2xl font-bold text-white'>
                      {project.title}
                    </h3>
                    <div className='p-2 rounded-full bg-white/10 backdrop-blur-sm'>
                      <ArrowUpRight className='w-4 h-4 text-white' />
                    </div>
                  </div>

                  <p className='text-neutral-400 text-sm mb-4 font-medium'>
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className='mb-4 space-y-2'>
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className='flex items-start gap-2'>
                        <span className='text-purple-400 mt-1.5 flex-shrink-0'>
                          •
                        </span>
                        <p className='text-neutral-300 text-xs leading-relaxed'>
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className='flex flex-wrap gap-2 mt-auto'>
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className='px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-xs font-medium text-neutral-300'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
