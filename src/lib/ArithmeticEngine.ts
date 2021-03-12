type OperationName = "addition" | "subtraction" | "multiplication" | "division";
type OperationSymbol = "+" | "-" | "×" | "÷";
type OperationObj = {
  name: OperationName;
  symbol: OperationSymbol;
};
type QuestionMap = {
  operator: OperationName;
  operants: number[];
};

export default class ArithmeticEngine {
  readonly operationType: OperationName;
  readonly numbers: number;
  readonly minNumber: number = 0;
  readonly maxNumber: number = 10;
  private questionMap: QuestionMap;

  constructor(
    operation: OperationName,
    numbers?: number,
    minNumber?: number,
    maxNumber?: number
  ) {
    if (numbers < 2) {
      throw new Error("Can not do arithmatic with less than 2 numbers");
    }

    this.operationType = operation;
    this.numbers = numbers ?? 2;
    this.minNumber = minNumber ?? 1;
    this.maxNumber = maxNumber ?? 10;

    if (maxNumber < minNumber) {
      throw new Error("maxNumber can not be less than minNumber");
    }

    this.questionMap = this.generateQuestion();
  }

  get operation(): OperationObj {
    return {
      name: this.operationType,
      symbol: this.getOperationSymbol(),
    };
  }

  get question(): QuestionMap {
    return this.questionMap;
  }

  get answer(): number {
    let answer: number = 0;
    switch (this.operationType) {
      case "addition":
        answer = answerAddition();
    }

    return answer;
  }

  private getOperationSymbol(): OperationSymbol {
    let sym: OperationSymbol;
    switch (this.operationType) {
      case "addition":
        sym = "+";
        break;
      case "subtraction":
        sym = "-";
        break;
      case "multiplication":
        sym = "×";
        break;
      case "division":
        sym = "÷";
        break;
    }

    return sym;
  }

  private generateNumber(): number {
    return Math.floor(Math.random() * this.maxNumber) + this.minNumber;
  }

  private generateQuestion(): QuestionMap {
    const numberList: number[] = [];
    for (let i = 0; i < this.numbers; i++) {
      numberList.push(this.generateNumber());
    }

    return {
      operator: this.operationType,
      operants: numberList,
    };
  }

  private answerAddition(): number {}
}
