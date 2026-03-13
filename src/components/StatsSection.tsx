import CountUp from "./CountUp";
import { Users, Award, Calendar, Smile, Shield } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: <Users className="w-8 h-8 text-secondary" />,
    value: 15000,
    label: "Happy Patients",
    suffix: "+",
  },
  {
    icon: <Award className="w-8 h-8 text-secondary" />,
    value: 14,
    label: "Years Experience",
    suffix: "+",
  },
  {
    icon: <Calendar className="w-8 h-8 text-secondary" />,
    value: 20000,
    label: "Successful Procedures",
    suffix: "+",
  },
  {
    icon: <Shield className="w-8 h-8 text-secondary" />,
    value: 5,
    label: "Years Core Specialization",
    suffix: "+",
  },
];

const StatsSection = () => {
  return (
    <section className="py-8 bg-primary relative overflow-hidden text-white">
      {/* Premium Multi-stop Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary via-violet/50 to-teal/30" />
      
      {/* Dynamic Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 50, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -50, 0], 
            y: [0, 100, 0],
            scale: [1, 1.3, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-48 -right-48 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]" 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="mb-4 p-3 bg-white/10 rounded-full">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-blue-100 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
