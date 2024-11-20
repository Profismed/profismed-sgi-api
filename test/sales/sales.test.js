import request from 'supertest';
import {jest, describe, beforeAll, afterAll, it, expect} from '@jest/globals';
import {app} from '../../src/index.js';
import {sequelize} from '../../src/db/db-connection.js';

process.env.NODE_ENV = 'test';
jest.useRealTimers();

let server;

describe('Sales functionalities', () => {
    beforeAll(async () => {
        server = app.listen(0); // Usa un puerto dinámico asignado automáticamente para evitar conflictos
    });

    afterAll(async () => {
        await server.close(); // Cierra el servidor después de todas las pruebas
        await sequelize.close(); // Cierra la conexión de Sequelize
    });

    it('TC-V001 Crear una nueva venta', async () => {
        const response = await request(server)
            .post('/api/sales/create')
            .send({
                buyerId: 1,
                sellerId: 2,
                items: [
                    { productId: 3, productQuantity: 3, productPrice: 2309.1 },
                    { productId: 4, productQuantity: 1, productPrice: 2309.1 }
                ]
            });

        expect(response.status).toBe(201);
        expect(response.body.message).toBe('Sale created successfully');
    });

    it('TC-V002 Crear una venta con producto inexistente', async () => {
        const response = await request(server)
            .post('/api/sales/create')
            .send({
                buyerId: 1,
                sellerId: 2,
                items: [
                    { productId: 32334, productQuantity: 1, productPrice: 2309.1 },
                    { productId: 421, productQuantity: 1, productPrice: 2309.1 }
                ]
            });

        expect(response.status).toBe(404);
        expect(response.body.message).toBe('Product not found');
    });

    it('TC-V003 Obtener todas las ventas', async () => {
        const response = await request(server)
            .get('/api/sales');

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('TC-V004 Obtener una venta existente', async () => {
        const saleId = 1; // Id de la venta que deseas obtener
        const response = await request(server)
            .get(`/api/sales/${saleId}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('buyerId');
        expect(response.body).toHaveProperty('sellerId');
        expect(response.body.items).toBeDefined(); // Asegúrate de que los detalles de la venta estén presentes
    });

    it('TC-V005 Obtener una venta que no existe', async () => {
        const saleId = 99; // Id de una venta que no existe
        const response = await request(server)
            .get(`/api/sales/${saleId}`);

        expect(response.status).toBe(404);
        expect(response.body.message).toBe('Sale not found');
    });

    it('TC-V006 Eliminar una venta existente', async () => {
        const saleId = 1; // Id de la venta que deseas eliminar
        const response = await request(server)
            .delete(`/api/sales/${saleId}`);

        expect(response.status).toBe(204); // Verifica que el código de estado sea 204
    });

    it('TC-V007 Eliminar una venta que no existe', async () => {
        const saleId = 99; // Id de una venta que no existe
        const response = await request(server)
            .delete(`/api/sales/${saleId}`);

        expect(response.status).toBe(404);
        expect(response.body.message).toBe('Sale not found');
    });
});
