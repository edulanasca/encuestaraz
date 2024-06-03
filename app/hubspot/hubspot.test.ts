import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { sendToHubSpot, updateHubSpotSubscription } from './index';

describe('HubSpot API Integration Tests', () => {
  const formData = {
    _id: '1234567890abcdef',
    email: 'john.doe@example.com',
    edad: '30',
    nombre: 'John',
    apellido: 'Doe',
    ocupacion: 'Software Developer',
    preferenciaCompra: 'Mayormente en tienda física, \naunque a veces compro en internet',
    metodoPagoFisica: 'Datáfono (crédito o débito)',
    metodoPagoOnline: 'Pago con tarjeta de crédito o débito',
    prioridadCompra: 'Calidad',
    calidadPrenda: 'Alta',
    frecuenciaCompra: 'Compro cada dos semanas',
    gastoConjuntoRopa: '200-500',
    marcaTiendaFavorita: 'BrandX',
    suscrito: true,
    timestamp: new Date().getTime() * 1000
  };

  it('should send form data to HubSpot successfully', async () => {
    const response = await sendToHubSpot(formData);
    console.log(response);
    expect(response).toHaveProperty('inlineMessage', 'Thanks for submitting the form.');
    // Additional assertions can be added here
  });

  it('should update HubSpot subscription status successfully', async () => {
    const subscribed = true;
    const response = await updateHubSpotSubscription(formData.email, subscribed);
    expect(response).toEqual("");
    // Additional assertions can be added here
  });

});
