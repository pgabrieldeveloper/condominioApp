import { Router } from 'express';
import familiarRotas from '../../../modules/condominio/rotas/familiarRotas';
import moradorRotas from '../../../modules/condominio/rotas/moradorRotas';
import reservaPiscinaRotas from '../../../modules/condominio/rotas/reservaPiscinaRotas';

import apartamentoRotas from '../../../modules/condominio/rotas/ApartamentoRotas';

const routes = Router();
routes.get('/', (req, res) => {
  return res.json({ message: 'Olá express' });
});

routes.use('/apartamento', apartamentoRotas);
routes.use('/morador', moradorRotas);
routes.use('/familiares', familiarRotas);
routes.use('/reservaPiscina', reservaPiscinaRotas);


export default routes;