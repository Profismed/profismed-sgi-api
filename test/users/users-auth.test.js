import request from 'supertest';
import { jest, describe, beforeAll, afterAll, it, expect } from '@jest/globals';
import { app } from '../../src/index.js';
import { sequelize } from '../../src/db/db-connection.js';

process.env.NODE_ENV = 'test';
jest.useRealTimers(); // Usa temporizadores reales en lugar de fake timers para evitar conflictos con operaciones asíncronas

let server;

describe('User Authentication', () => {
  beforeAll(async () => {
    server = app.listen(0); // Usa un puerto dinámico asignado automáticamente
  });

  afterAll(async () => {
    await server.close(); // Cierra el servidor después de todas las pruebas
    await sequelize.close(); // Cierra la conexión de Sequelize
  });

  it('should return a 401 status and a message if the user already exists', async () => {
    const response = await request(server) // Usa `server` para las pruebas
      .post('/api/users/register')
      .send({
        username: 'janedoe',
        firstName: 'Jane',
        lastName: 'Doe',
        userEmail: 'janedoe@example.com',
        userPhone: '+9876543210',
        roleId: 3,
        documentId: 2,
        documentNumber: '987654321',
        userJob: 'Project Manager',
        userContactOrigin: 'Company Website',
        locationId: 1,
        password: 'anotherSecurePassword456',
      });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Unauthorize');
  });
});
