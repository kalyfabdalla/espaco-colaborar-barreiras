
import React, { useState } from 'react';
import { TimeSlot } from '../types';

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className={`bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 md:p-8 ${className}`}>
        {children}
    </div>
);

const BookingForm: React.FC = () => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([{ id: Date.now(), start: '', end: '' }]);
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAddTimeSlot = () => {
    setTimeSlots([...timeSlots, { id: Date.now(), start: '', end: '' }]);
  };

  const handleRemoveTimeSlot = (id: number) => {
    setTimeSlots(timeSlots.filter(slot => slot.id !== id));
  };

  const handleTimeSlotChange = (id: number, field: 'start' | 'end', value: string) => {
    setTimeSlots(timeSlots.map(slot => slot.id === id ? { ...slot, [field]: value } : slot));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format the email body
    const subject = encodeURIComponent("Solicitação de Reserva - Espaço Colaborar");
    
    let bodyContent = `Olá, gostaria de solicitar uma reserva no Espaço Colaborar.\n\n`;
    bodyContent += `Nome: ${name}\n`;
    bodyContent += `WhatsApp: ${whatsapp}\n`;
    bodyContent += `Descrição: ${description}\n\n`;
    bodyContent += `Horários solicitados:\n`;
    
    timeSlots.forEach((slot, index) => {
        const start = slot.start ? new Date(slot.start).toLocaleString('pt-BR') : 'N/A';
        const end = slot.end ? new Date(slot.end).toLocaleString('pt-BR') : 'N/A';
        bodyContent += `${index + 1}. Início: ${start} | Fim: ${end}\n`;
    });

    const body = encodeURIComponent(bodyContent);
    
    // Open mailto link
    window.location.href = `mailto:kalyfabdalla@ifba.edu.br?subject=${subject}&body=${body}`;

    // Simulate API call and reset form
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setName('');
      setWhatsapp('');
      setTimeSlots([{ id: Date.now(), start: '', end: '' }]);
      setDescription('');
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <Card>
        <div className="text-center">
            <svg className="mx-auto h-12 w-12 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">Verifique seu E-mail!</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
            Seu cliente de e-mail foi aberto com os detalhes da solicitação. Por favor, revise e envie o e-mail para concluir o processo.
            </p>
            <button
            onClick={() => setIsSubmitted(false)}
            className="mt-6 w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
            >
            Fazer Nova Solicitação
            </button>
        </div>
      </Card>
    );
  }

  return (
    <section id="booking-form">
      <Card>
        <h2 className="text-2xl font-bold text-brand-primary mb-2">Desejo usar o Espaço Colaborar</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-6">Preencha o formulário abaixo para solicitar sua reserva.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nome Completo</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-brand-primary focus:border-brand-primary" />
          </div>
          <div>
            <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">WhatsApp de Contato</label>
            <input type="tel" id="whatsapp" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="(XX) XXXXX-XXXX" required className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-brand-primary focus:border-brand-primary" />
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Datas e Horários</label>
            {timeSlots.map((slot, index) => (
              <div key={slot.id} className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg space-y-3 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor={`start-${slot.id}`} className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Início</label>
                        <input type="datetime-local" id={`start-${slot.id}`} value={slot.start} onChange={(e) => handleTimeSlotChange(slot.id, 'start', e.target.value)} required className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md text-sm" />
                    </div>
                    <div>
                        <label htmlFor={`end-${slot.id}`} className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Final</label>
                        <input type="datetime-local" id={`end-${slot.id}`} value={slot.end} onChange={(e) => handleTimeSlotChange(slot.id, 'end', e.target.value)} required className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md text-sm" />
                    </div>
                </div>
                 {timeSlots.length > 1 && (
                  <button type="button" onClick={() => handleRemoveTimeSlot(slot.id)} className="absolute -top-2 -right-2 bg-red-100 dark:bg-red-900 text-red-500 dark:text-red-300 rounded-full p-1 hover:bg-red-200 dark:hover:bg-red-800 transition-colors">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={handleAddTimeSlot} className="w-full text-sm font-semibold text-brand-primary hover:text-brand-secondary dark:hover:text-brand-light transition-colors py-2 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                Adicionar outra data
            </button>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Descrição do que será feito</label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={4} required className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-brand-primary focus:border-brand-primary"></textarea>
          </div>
          <button type="submit" disabled={isSubmitting} className="w-full bg-brand-primary hover:bg-brand-primary/90 disabled:bg-slate-400 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </>
            ) : "Enviar Solicitação"}
          </button>
        </form>
      </Card>
    </section>
  );
};

export default BookingForm;
