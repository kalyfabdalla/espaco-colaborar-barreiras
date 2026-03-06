
export interface TimeSlot {
  id: number;
  start: string;
  end: string;
}

export interface BookingRequest {
  name: string;
  whatsapp: string;
  timeSlots: TimeSlot[];
  description: string;
}
