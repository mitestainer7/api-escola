import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Nicolas',
      sobrenome: 'Mitestainer',
      email: 'nicolas.mitestainer@email.com',
      idade: 19,
      peso: 82,
      altura: 1.7
    })
    res.json(novoAluno);
  }
}

export default new HomeController();
