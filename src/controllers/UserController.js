import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body)
      res.json(novoUser);
    } catch(e) {
      console.log(e);
      res.status(400).json({
        errors: e.errors.map(erro => erro.message)
      });
    }
  }
}

export default new UserController();
