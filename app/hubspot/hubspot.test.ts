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
    preferenciaCompra: 'Online',
    metodoPagoFisica: 'Tarjeta de crédito',
    metodoPagoOnline: 'PayPal',
    prioridadCompra: 'Calidad',
    calidadPrenda: 'Alta',
    frecuenciaCompra: 'Mensual',
    gastoConjuntoRopa: '200-500',
    marcaTiendaFavorita: 'BrandX',
    suscrito: true
  };

  it('should send form data to HubSpot successfully', async () => {
    const response = await sendToHubSpot(formData);
    console.log(response);
    expect(response).toHaveProperty('status', 'success');
    // Additional assertions can be added here
  });

  it('should update HubSpot subscription status successfully', async () => {
    const subscribed = true;
    const response = await updateHubSpotSubscription(formData.email, subscribed);
    expect(response).toBeUndefined();
    // Additional assertions can be added here
  });

});
