import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Emelly',
      sobrenome: 'Cunha',
      email: 'emelly@email.com',
      idade: 17,
      peso: 50,
      altura: 1.65
    })
    res.json(novoAluno);
  }
}

export default new HomeController();
