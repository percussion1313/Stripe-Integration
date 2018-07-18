import { Router } from 'express';
import { charge } from '../utils/stripeCharge'

let router = Router();

router.post('/', async (req, res) => {
    let tokenId = req.body.token.id;
    let amount = req.body.token.amount;
    try {
        let chargeResponse = await charge(tokenId, amount);
        res.json({ message: 'success' });
        console.log(chargeResponse)
    } catch (err) {
        console.log(err);
        console.log(chargeResponse)
        res.sendStatus(500);
    }
});

export default router;

