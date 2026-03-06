
import React from 'react';

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className={`bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 md:p-8 ${className}`}>
        {children}
    </div>
);

const AboutSection: React.FC = () => {
  return (
    <section id="about">
       <Card>
        <h2 className="text-2xl font-bold text-brand-primary mb-4">
          O que é o Espaço Colaborar?
        </h2>
        <div className="space-y-4 text-slate-600 dark:text-slate-300">
            <p>
            O Espaço Colaborar é um ambiente multifuncional projetado para fomentar a criatividade, a inovação e o trabalho em equipe. Seja para reuniões, workshops, eventos ou sessões de coworking, nosso espaço oferece a infraestrutura e a atmosfera ideais para suas necessidades.
            </p>
            <div className="bg-brand-light/20 dark:bg-brand-secondary/10 border-l-4 border-brand-secondary p-4 rounded-r-lg">
            <h3 className="font-semibold text-brand-primary dark:text-brand-secondary">Funcionamento Sob Demanda</h3>
            <p className="mt-1">
                Atualmente, nosso espaço opera exclusivamente sob demanda. Verifique a agenda e envie sua solicitação para garantir sua reserva.
            </p>
            </div>
        </div>
       </Card>
    </section>
  );
};

export default AboutSection;
