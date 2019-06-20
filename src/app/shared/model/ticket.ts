import { Vehicle } from './vehicle';

export class Ticket {
    id: number;
    entryDate: Date;
    exitDate: Date;
    vehicle: Vehicle;
    paid: number;
}
