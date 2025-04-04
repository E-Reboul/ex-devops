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

    substract(req, res) {
        try {
            const a = req.params?.a;
            const b = req.params?.b;
    
            const result = this.mathService.substract(a, b);
            res.status(200).json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    multiply(req, res) {
        try {
            const a = req.params?.a;
            const b = req.params?.b;
    
            const result = this.mathService.multiply(a, b);
            res.status(200).json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    divide(req, res) {
        try {
            const a = req.params?.a;
            const b = req.params?.b;
    
            const result = this.mathService.divide(a, b);
            res.status(200).json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    percentage(req, res) {
        try {
            const a = req.params?.a;
            const b = req.params?.b;
    
            const result = this.mathService.percentage(a, b);
            res.status(200).json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    cos(req, res) {
        try {
            const a = req.params?.a;
    
            const result = this.mathService.cos(a);
            res.status(200).json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    sin(req, res) {
        try {
            const a = req.params?.a;
    
            const result = this.mathService.sin(a);
            res.status(200).json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    tan(req, res) {
        try {
            const a = req.params?.a;
    
            const result = this.mathService.tan(a);
            res.status(200).json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    pow(req, res) {
        try {
            const a = req.params?.a;
            const b = req.params?.b;
    
            const result = this.mathService.pow(a, b);
            res.status(200).json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    sqrt(req, res) {
        try {
            const a = req.params?.a;
    
            const result = this.mathService.sqrt(a);
            res.status(200).json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default MathController;