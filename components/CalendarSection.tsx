
import React from 'react';

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className={`bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 md:p-8 ${className}`}>
        {children}
    </div>
);

const CalendarSection: React.FC = () => {
  // IMPORTANTE: Substitua a URL abaixo pela URL de incorporação do seu Google Agenda.
  // Para obter: Google Agenda > Configurações da agenda > Integrar agenda > Copie o código de incorporação (iframe) e use apenas a URL do atributo `src`.
  const calendarEmbedUrl = "https://calendar.google.com/calendar/embed?src=c_139f28d65dd62b9176ac2706f11ee74763ee60bed7152fee65b62dd625693527%40group.calendar.google.com&ctz=America%2FBahia";

  return (
    <section id="calendar">
        <Card>
            <h2 className="text-2xl font-bold text-brand-primary mb-4">Agenda do Espaço</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
                Consulte os horários disponíveis abaixo. A agenda é atualizada em tempo real.
            </p>
            <div className="aspect-w-16 aspect-h-9 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                <iframe
                src={calendarEmbedUrl}
                style={{ border: 0 }}
                width="100%"
                height="450"
                frameBorder="0"
                scrolling="no"
                title="Agenda do Espaço Colaborar"
                ></iframe>
            </div>
       </Card>
    </section>
  );
};

export default CalendarSection;
