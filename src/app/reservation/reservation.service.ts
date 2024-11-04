import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservation: Reservation[] = [];

  getAllReservations(): Reservation[] {
      return this.reservation;
  }

  getReservation(id: string): Reservation | undefined {
      return this.reservation.find(res => res.id === id);
  }

  addReservation(reservation: Reservation): void {
      this.reservation.push(reservation);
  }

  deleteReservation(id: string): void {
    let index = this.reservation.findIndex(res => res.id === id);
    this.reservation.splice(index, 1);
  }

  editReservation(updatedReservation: Reservation): void {
    let index = this.reservation.findIndex(res => res.id === updatedReservation.id);
    this.reservation[index] = updatedReservation;
  }
}
