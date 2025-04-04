import MathService from "../services/MathService";

class MathController {

    mathService;

    constructor() {
        this.mathService = new MathService();
    }

    add(req, res) {
        try {
          const a = req.params?.a;
          const b = req.params?.b;
    
          const result = this.mathService.add(a, b);
          res.status(200).json({ result });
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      }
}

export default MathController;