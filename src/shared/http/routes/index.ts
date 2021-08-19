import { Router } from 'express';

import apartamentoRotas from '../../../modules/condominio/rotas/ApartamentoRotas';

const routes = Router();
routes.get('/', (req, res) => {
  return res.json({ message: 'Olá express' });
});

routes.use('/apartamento', apartamentoRotas);

export default routes;