import request from 'supertest';
import { jest, describe, beforeAll, afterAll, it, expect } from '@jest/globals';
import { app } from '../../src/index.js';
import { sequelize } from '../../src/db/db-connection.js';

process.env.NODE_ENV = 'test';
jest.useRealTimers(); // Usa temporizadores reales en lugar de temporizadores falsos para evitar conflictos con operaciones asíncronas

let server;

describe('Products functionalities', () => {
  beforeAll(async () => {
    server = app.listen(0); // Usa un puerto dinámico asignado automáticamente para evitar conflictos
  });

  afterAll(async () => {
    await server.close(); // Cierra el servidor después de todas las pruebas
    await sequelize.close(); // Cierra la conexión de Sequelize
  });

  it('TC-P001 Crear un nuevo producto', async () => {
    const response = await request(server)
      .post('/api/products')
      .send({
        productName: 'Producto de prueba en test',
        productDescription: 'Descripción de prueba',
        productPrice: 100,
        quantity: 10,
        userId: 1
      });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Unauthorized');
  });
});
