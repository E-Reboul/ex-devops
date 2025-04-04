import { request, response } from "express";
import Math from "../models/Math";

class MathService {

    math;

    constructor() {
        this.math = new Math();
    }

    add(a, b) {
        if (isNaN(a) || isNaN(b)) {
          throw new Error('Invalid input: a and b must be numbers');
        }
        return this.math.add(Number(a), Number(b));
      }

    substract(a, b) {
        if (isNaN(a) || isNaN(b)) {
          throw new Error('Invalid input: a and b must be numbers');
        }
        return this.math.substract(Number(a), Number(b));
      }

    multiply(a, b) {
        if (isNaN(a) || isNaN(b)) {
          throw new Error('Invalid input: a and b must be numbers');
        }
        return this.math.multiply(Number(a), Number(b));
      }

    divide(a, b) {
      if (isNaN(a) || isNaN(b)) {
        throw new Error('Invalid input: a and b must be numbers');
      }

      if (b === 0) {
        throw new Error('Division by zero is not allowed');
      }
      return this.math.divide(Number(a), Number(b));
    }

    percentage(a, b) {
      if (isNaN(a) || isNaN(b)) {
        throw new Error('Invalid input: a and b must be numbers');
      }

      return this.math.percentage(Number(a), Number(b));
    }


}

export default MathService;