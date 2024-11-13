import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfile(): Profile {
    
    var profile: Profile = {
      email: 'castrodepaulamatheus2@gmail.com',
      name: 'Matheus Castro',
      whatsApp: 'https://api.whatsapp.com/send?phone=5531989772110&text=Posso%20ajudar?',
      linkedIn: 'https://www.linkedin.com/in/matheus-castro-4b3480326/',
    }

    return profile;
  } 
}
