import { Router } from 'express';

import { get, create, edit, remove } from '../controllers/company.controller';



const router = Router();


/* GET companies listing. */
router.get('/', get);

router.post('/', create);

router.put('/:id', edit);

router.delete('/:id', remove);





export default router;
