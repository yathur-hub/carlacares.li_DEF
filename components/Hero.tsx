
import React from 'react';
import { Link } from 'react-router-dom';
import DBTTool from './DBTTool';
import { ShieldCheck, Award, GraduationCap, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="bg-white pt-8 md:pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          {/* Left Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="space-y-1">
                <span className="text-accentBrown font-bold uppercase tracking-wider text-xs block">
                  Ambulante psychiatrische Pflege in Liechtenstein
                </span>
                <span className="text-textDark/50 text-xs block font-medium">
                  Für Betroffene, Angehörige und zuweisende Fachstellen
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-accentGreen leading-[1.1] tracking-tight">
                Ambulante psychiatrische Pflege, die im Alltag ankommt.
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-textDark/70 leading-relaxed max-w-xl">
              CarlaCares begleitet Menschen mit psychischen Belastungen zu Hause und im Alltag – persönlich, fachlich fundiert und auf Augenhöhe.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-6 pt-4">
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/kontakt" 
                  className="bg-accentGreen text-white px-8 py-4 rounded-xl font-bold hover:bg-accentBrown transition-all shadow-lg hover:shadow-accentBrown/20 text-center"
                >
                  Unterstützung anfragen
                </Link>
                <Link 
                  to="/zuweisende"
                  className="border-2 border-accentGreen/10 text-accentGreen px-8 py-4 rounded-xl font-bold hover:bg-secondary transition-all flex items-center justify-center text-center"
                >
                  Informationen für Zuweisende
                </Link>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-textDark/60 font-semibold pl-1">
                <span className="flex h-2 w-2 rounded-full bg-accentBrown"></span>
                <span>Aufsuchend. Alltagsnah. Verlässlich.</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual: DBT Immediate Help Tool */}
          <div className="relative animate-in fade-in slide-in-from-right duration-1000">
            <div className="bg-secondary rounded-[40px] border border-gray-100 shadow-2xl overflow-hidden min-h-[500px] flex flex-col">
              <DBTTool />
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="border-t border-gray-100/50 pt-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {/* Badge 1 */}
             <div className="bg-secondary/25 hover:bg-secondary/50 p-4 md:p-5 rounded-3xl border border-gray-100/40 flex items-center space-x-3.5 transition-all duration-300 hover:shadow-sm group">
                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-accentBrown flex-shrink-0 shadow-sm border border-gray-50 group-hover:scale-105 transition-transform duration-300">
                  <ShieldCheck className="w-5 h-5 text-accentBrown" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-accentGreen leading-tight">Gesundheitsamt FL</div>
                  <div className="text-[10px] text-textDark/50 font-bold mt-0.5 uppercase tracking-wide">Bewilligte Praxis</div>
                </div>
             </div>
             {/* Badge 2 */}
             <div className="bg-secondary/25 hover:bg-secondary/50 p-4 md:p-5 rounded-3xl border border-gray-100/40 flex items-center space-x-3.5 transition-all duration-300 hover:shadow-sm group">
                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-accentBrown flex-shrink-0 shadow-sm border border-gray-50 group-hover:scale-105 transition-transform duration-300">
                  <Award className="w-5 h-5 text-accentBrown" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-accentGreen leading-tight">KK-Anerkannt</div>
                  <div className="text-[10px] text-textDark/50 font-bold mt-0.5 uppercase tracking-wide">Zusatzversicherung</div>
                </div>
             </div>
             {/* Badge 3 */}
             <div className="bg-secondary/25 hover:bg-secondary/50 p-4 md:p-5 rounded-3xl border border-gray-100/40 flex items-center space-x-3.5 transition-all duration-300 hover:shadow-sm group">
                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-accentBrown flex-shrink-0 shadow-sm border border-gray-50 group-hover:scale-105 transition-transform duration-300">
                  <GraduationCap className="w-5 h-5 text-accentBrown" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-accentGreen leading-tight">HF Psychiatrie</div>
                  <div className="text-[10px] text-textDark/50 font-bold mt-0.5 uppercase tracking-wide">Höheres Fachdiplom</div>
                </div>
             </div>
             {/* Badge 4 */}
             <div className="bg-secondary/25 hover:bg-secondary/50 p-4 md:p-5 rounded-3xl border border-gray-100/40 flex items-center space-x-3.5 transition-all duration-300 hover:shadow-sm group">
                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-accentBrown flex-shrink-0 shadow-sm border border-gray-50 group-hover:scale-105 transition-transform duration-300">
                  <HeartHandshake className="w-5 h-5 text-accentBrown" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-accentGreen leading-tight">LKV Mitglied</div>
                  <div className="text-[10px] text-textDark/50 font-bold mt-0.5 uppercase tracking-wide">Liecht. Verband</div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;