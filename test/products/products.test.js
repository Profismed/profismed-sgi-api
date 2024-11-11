import request from 'supertest';
import {jest, describe, beforeAll, afterAll, it, expect} from '@jest/globals';
import {app} from '../../src/index.js';
import {sequelize} from '../../src/db/db-connection.js';

process.env.NODE_ENV = 'test';
jest.useRealTimers();

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
                productName: "Nombre del producto",
                productDescription: "Descripción detallada del producto",
                productPrice: 100.50,
                quantity: 20,
                userId: 1
            });

        expect(response.status).toBe(401);
        expect(response.body.message).toBe('Unauthorized');
    });

    it('TC-P002 Crear un producto con datos incompletos', async () => {
        const response = await request(server)
            .post('/api/products')
            .send({
                productDescription: "Descripción detallada del producto",
                productPrice: 100.50
            });

        expect(response.status).toBe(400);
        expect(response.body.message).toBeDefined(); // Verifica que el mensaje de error esté definido
    });

    it('TC-P003 Obtener un producto existente', async () => {
        const productId = 1; // Id del producto que deseas obtener
        const response = await request(server)
            .get(`/api/products/${productId}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('productDescription');
        expect(response.body).toHaveProperty('productPrice');
        expect(response.body).toHaveProperty('productName'); // Asegúrate de que los detalles del producto estén presentes
    });

    it('TC-P004 Obtener un producto que no existe', async () => {
        const productId = 99; // Id de un producto que no existe
        const response = await request(server)
            .get(`/api/products/${productId}`);

        expect(response.status).toBe(404);
        expect(response.body.message).toBeDefined(); // Verifica que el mensaje de error esté definido
    });

    it('TC-P005 Actualizar un producto existente', async () => {
        const productId = 1; // Id del producto que deseas actualizar
        const response = await request(server)
            .put(`/api/products/update/${productId}`)
            .send({
                productName: "Nuevo nombre del producto",
                productDescription: "Nueva descripción del producto",
                productPrice: 150.75,
                quantity: 30,
                userId: 1
            });

        expect(response.status).toBe(200);
        expect(response.body.message).toBeDefined(); // Verifica que el mensaje de éxito esté definido
    });

    it('TC-P006 Actualizar un producto que no existe', async () => {
        const productId = 23423; // Id de un producto que no existe
        const response = await request(server)
            .put(`/api/products/update/${productId}`)
            .send({
                productName: "Nuevo nombre del producto",
                productDescription: "Nueva descripción del producto",
                productPrice: 150.75,
                quantity: 30,
                userId: 1
            });

        expect(response.status).toBe(404);
        expect(response.body.message).toBeDefined(); // Verifica que el mensaje de error esté definido
    });

    it('TC-P007 Eliminar un producto existente', async () => {
        const productId = 2; // Id del producto que deseas eliminar
        const response = await request(server)
            .delete(`/api/products/delete/${productId}`);

        expect(response.status).toBe(204); // Verifica que el código de estado sea 204
        expect(response.body).toEqual({}); // Verifica que la respuesta no contenga contenido
    });

    it('TC-P008 Eliminar un producto que no existe', async () => {
        const productId = 994324; // Id de un producto que no existe
        const response = await request(server)
            .delete(`/api/products/delete/${productId}`);

        expect(response.status).toBe(404); // Verifica que el código de estado sea 404
        expect(response.body.message).toBeDefined(); // Verifica que el mensaje de error esté definido
    });

    it('TC-P009 Obtener todos los productos', async () => {
        const response = await request(server)
            .get('/api/products');

        expect(response.status).toBe(200); // Verifica que el código de estado sea 200
        expect(Array.isArray(response.body)).toBe(true); // Verifica que el cuerpo de la respuesta sea un arreglo
        if (response.body.length > 0) {
            expect(response.body[0]).toHaveProperty('productDescription');
            expect(response.body[0]).toHaveProperty('productPrice');
            expect(response.body[0]).toHaveProperty('productName');
        }
    });
});
