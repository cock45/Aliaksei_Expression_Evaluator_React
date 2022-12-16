import { useState } from "react";

import "./style.css";

const Calculator = function () {
    const [operandA, setOperandA] = useState(null);
    const [operandB, setOperandB] = useState(null);
    const [operator, setOperator] = useState("+");
    const [result, setResult] = useState(null);

    function calculate() {
        const [a, b] = [parseInt(operandA), parseInt(operandB)];

        switch (operator) {
            case "*":
                setResult(a * b);
                break;
            case "/":
                setResult(a / b);
                break;
            case "-":
                setResult(a - b);
                break;
            default:
                setResult(a + b);
        }
    }

    return (
        <div className="calc-board">
            <p className="title">
                Expression
                <br />
                Evaluator
            </p>
            <div className="box-operandA">
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="input-operandA"
                        value={operandA ? operandA : ""}
                        onChange={(e) => setOperandA(e.target.value)}
                        placeholder="Please enter a numuber"
                    />
                    <label htmlFor="input-operandA">
                        Please enter a numuber
                    </label>
                </div>
                <button>Add number</button>
            </div>
            <div className="operandB">
                <div className="operation">
                    <span>{operandA}</span>
                    <span>{operandB}</span>
                    <span>{operator}</span>
                    <span>=</span>
                    <span>{result ? result : ""}</span>
                </div>
            </div>
            <div className="box-operandB">
                <div className="form-floating">
                    <select
                        className="form-select"
                        onChange={(e) => setOperator(e.target.value)}
                        id="selectOperator"
                    >
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>
                    <label htmlFor="selectOperator">Operator</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="input-operandB"
                        value={operandB ? operandB : ""}
                        onChange={(e) => setOperandB(e.target.value)}
                        placeholder="Please enter a numuber"
                    />
                    <label htmlFor="input-operandB">Operand</label>
                </div>
                <button className="btn" onClick={calculate}>
                    Add Operation
                </button>
            </div>
        </div>
    );
};

export default Calculator;
