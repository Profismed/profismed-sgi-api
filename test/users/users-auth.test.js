import request from 'supertest';
import { jest, describe, beforeAll, afterAll, it, expect } from '@jest/globals';
import { app } from '../../src/index.js';
import { sequelize } from '../../src/db/db-connection.js';

process.env.NODE_ENV = 'test';
jest.useRealTimers();

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
    const response = await request(server)
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

  it('TC-U001 Crear un nuevo usuario', async () => {
    const response = await request(server)
      .post('/api/users/create')
      .send({
        username: 'janedoe',
        firstName: 'Jane',
        lastName: 'Doe',
        userEmail: 'janedoe2@example.com',
        userPhone: '+9876543210',
        roleId: 3,
        documentId: 2,
        documentNumber: '987654321',
        userJob: 'Project Manager',
        userContactOrigin: 'Company Website',
        locationId: 1,
        password: 'anotherSecurePassword456',
      });

    expect(response.status).toBe(201);
    expect(response.body.message).toBeDefined();
  });

  it('TC-U002 Crear un usuario con datos incompletos', async () => {
    const response = await request(server)
      .post('/api/users/create')
      .send({
        lastName: 'Doe',
        userEmail: 'janedoe@example.com',
        userPhone: '+9876543210',
        documentId: 2,
        userContactOrigin: 'Company Website',
        locationId: 1
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBeDefined();
  });

  it('TC-U003 Iniciar sesión con credenciales válidas', async () => {
    const response = await request(server)
      .post('/api/auth/login')
      .send({
        username: 'janedoe',
        password: 'anotherSecurePassword456',
      });

    expect(response.status).toBe(200);
    expect(response.headers['set-cookie']).toBeDefined();
  });

  it('TC-U004 Iniciar sesión con credenciales inválidas', async () => {
    const response = await request(server)
      .post('/api/auth/login')
      .send({
        username: 'janedoe',
        password: 'securePassword456', // Contraseña incorrecta
      });

    expect(response.status).toBe(401);
    expect(response.body.message).toBeDefined();
  });

  it('TC-U005 Obtener todos los usuarios', async () => {
    const response = await request(server)
      .get('/api/users/all');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    if (response.body.length > 0) {
      expect(response.body[0]).toHaveProperty('username');
      expect(response.body[0]).toHaveProperty('firstName');
      expect(response.body[0]).toHaveProperty('lastName');
    }
  });

  it('TC-U006 Obtener un usuario existente', async () => {
    const userId = 1; // Id del usuario que deseas obtener
    const response = await request(server)
      .get(`/api/users/${userId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('username');
    expect(response.body).toHaveProperty('firstName');
    expect(response.body).toHaveProperty('lastName');
    expect(response.body).toHaveProperty('userEmail');
  });

  it('TC-U007 Obtener un usuario que no existe', async () => {
    const userId = 99; // Id de un usuario que no existe
    const response = await request(server)
      .get(`/api/users/${userId}`);

    expect(response.status).toBe(404); // Verifica que el código de estado sea 404
    expect(response.body.message).toBeDefined(); // Verifica que el mensaje de error esté definido
  });
});
