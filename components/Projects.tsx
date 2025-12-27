"use client";

import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Taxi Driver App",
    description:
      "Real-time navigation system with trip tracking for taxi drivers, integrated with backend services.",
    technologies: ["Flutter", "Dart", "BLoC", "Firebase", "Google Maps"],
    color: "from-yellow-400 to-orange-500",
    image: "taxiDriver.png",
  },
  {
    title: "Food Delivery App",
    description:
      "Complete food delivery solution with order management, real-time delivery tracking, and customer notifications.",
    technologies: ["Flutter", "GetX", "REST API", "Firebase", "WebSocket"],
    color: "from-green-400 to-emerald-600",
    image: "foodCustomer.png",
  },
  {
    title: "Smart ODS App",
    description:
      "Multi-service app allowing users to submit online forms to request import quotas and track application status in real-time.",
    technologies: ["Flutter", "Riverpod", "Dynamic Forms", "REST API"],
    color: "from-blue-400 to-indigo-600",
    image: "smartOds.png",
  },
  {
    title: "DOTP App",
    description:
      "App for importers to request quotas with dynamic forms and monitor application steps in real-time.",
    technologies: ["Flutter", "BLoC", "Dynamic Forms", "Firebase"],
    color: "from-purple-400 to-pink-600",
    image: "dtop.png",
  },
  {
    title: "EV Charging App",
    description:
      "Displays real-time status of EV charging stations with live availability updates.",
    technologies: ["Flutter", "REST API", "WebSocket", "Google Maps"],
    color: "from-teal-400 to-cyan-600",
    image: "ev.png",
  },
  {
    title: "Express & Logistics App",
    description:
      "Parcel delivery and bus trip management with real-time tracking, passenger notifications, and ticket scanning.",
    technologies: ["Flutter", "GetX", "WebSocket", "Firebase", "QR Scanner"],
    color: "from-red-400 to-rose-600",
    image: "expressDiver.png",
  },
  {
    title: "Taxi Customer App",
    description:
      "Client application for booking rides, real-time driver tracking, and secure in-app payments.",
    technologies: ["Flutter", "Google Maps", "Firebase", "Payment Gateway"],
    color: "from-amber-400 to-orange-600",
    image: "taxiCsteom.png",
  },
  {
    title: "Food Driver App",
    description:
      "Dedicated app for delivery partners to manage orders, navigate to customers, and track earnings.",
    technologies: ["Flutter", "Google Maps", "Real-time DB", "GetX"],
    color: "from-emerald-400 to-teal-600",
    image: "foodDiver.png",
  },
  {
    title: "Logistics Customer App",
    description:
      "User-friendly app for tracking parcels, booking bus tickets, and managing delivery history.",
    technologies: ["Flutter", "QR Scanner", "Payment Gateway", "FCM"],
    color: "from-rose-400 to-pink-600",
    image: "customerExpress.png",
  },
];

export default function Projects() {
  return (
    <section
      id='projects'
      className='py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden'
    >
      {/* Background Elements */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none' />

      <div className='max-w-7xl mx-auto relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent'>
            Featured Projects
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            A selection of mobile applications I&apos;ve built using Flutter and
            modern technologies.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <CardContainer key={index} className='inter-var'>
              <CardBody className='bg-zinc-900/50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] border-white/[0.1] w-auto sm:w-[22rem] h-auto rounded-xl p-6 border backdrop-blur-sm'>
                <CardItem
                  translateZ='50'
                  className='text-xl font-bold text-white'
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as='p'
                  translateZ='60'
                  className='text-gray-400 text-sm max-w-sm mt-2'
                >
                  {project.description}
                </CardItem>
                <CardItem translateZ='100' className='w-full mt-4'>
                  <div
                    className={`w-full h-40 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center group-hover/card:shadow-xl transition-shadow duration-300 overflow-hidden relative`}
                  >
                    <Image
                      src={`${
                        process.env.NODE_ENV === "production"
                          ? "/portfolio"
                          : ""
                      }/images/${project.image}`}
                      alt={project.title}
                      fill
                      className='object-cover'
                    />
                  </div>
                </CardItem>
                <div className='flex justify-between items-center mt-8'>
                  <div className='flex flex-wrap gap-2 max-w-[70%]'>
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <CardItem
                        translateZ={20}
                        key={i}
                        className='px-2 py-1 rounded-md bg-zinc-800 text-[10px] text-white font-medium'
                      >
                        {tech}
                      </CardItem>
                    ))}
                    {project.technologies.length > 3 && (
                      <CardItem
                        translateZ={20}
                        className='px-2 py-1 rounded-md bg-zinc-800 text-[10px] text-white font-medium'
                      >
                        +{project.technologies.length - 3}
                      </CardItem>
                    )}
                  </div>
                  <CardItem
                    translateZ={20}
                    as='button'
                    className='px-4 py-2 rounded-xl bg-white text-black text-xs font-bold hover:bg-gray-200 transition-colors'
                  >
                    Details
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
