// health.js
// Route for health check of the service, including database connectivity check
const express = require('express')
const router = express.Router();
const { sequelize } = require('../../database/sequelizeConfig');

/**
 * @swagger
 * tags:
 *   name: Health
 *   description: Health check endpoints for the service
 */

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Check the health of the service and database connectivity
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Service is healthy and database connection is successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *       500:
 *         description: Service is unhealthy or database connection failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 message:
 *                   type: string
 *                   example: Error details
 */
router.get('/health', async (req, res) => {
    try {
        await sequelize.authenticate();
        res.status(200).json({ status: 'ok' });
    }
    catch (err) {
        res.status(500).json({ status: 'error', message: err.message });
    }
})

module.exports = router;