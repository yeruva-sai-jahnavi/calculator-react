import { useState } from "react";

export default function Calculator() {
    const [res, setRes] = useState(0);
    const [display, setDisplay] = useState("");
    function calculate() {
        setRes(eval(display));
    }

    return (
        <div className="calc-container d-flex align-items-center">
            {/* <!-- Calculator Body --> */}
            <div className="calc-body">
                {/* <!-- Calculator Display Screen --> */}
                <div className="calc-screen d-flex justify-content-between align-items-center">
                    <div id="calc-typed">{display == 0 ? 0 : display}</div>
                    <div id="calc-operation">{res}</div>
                </div>

                {/* <!-- Calculator Buttons --> */}
                <div className="calc-button-row">
                    <button
                        className="ac"
                        onClick={(e) => {
                            setDisplay("");
                            setRes(0);
                        }}
                    >
                        AC
                    </button>
                    <button className="opt">&#43;&#47;&#8722;</button>
                    <button
                        className="opt"
                        onClick={(e) => setDisplay(display + "%")}
                    >
                        &#37;
                    </button>
                    <button
                        className="opt"
                        onClick={(e) => setDisplay(display + "/")}
                    >
                        &#247;
                    </button>
                    <button onClick={(e) => setDisplay(display + "7")}>
                        7
                    </button>
                    <button onClick={(e) => setDisplay(display + "8")}>
                        8
                    </button>
                    <button onClick={(e) => setDisplay(display + "9")}>
                        9
                    </button>
                    <button
                        className="opt"
                        onClick={(e) => setDisplay(display + "*")}
                    >
                        &#215;
                    </button>
                    <button onClick={(e) => setDisplay(display + "4")}>
                        4
                    </button>
                    <button onClick={(e) => setDisplay(display + "5")}>
                        5
                    </button>
                    <button onClick={(e) => setDisplay(display + "6")}>
                        6
                    </button>
                    <button
                        className="opt"
                        onClick={(e) => setDisplay(display + "-")}
                    >
                        &#8722;
                    </button>
                    <button onClick={(e) => setDisplay(display + "1")}>
                        1
                    </button>
                    <button onClick={(e) => setDisplay(display + "2")}>
                        2
                    </button>
                    <button onClick={(e) => setDisplay(display + "3")}>
                        3
                    </button>
                    <button
                        className="opt"
                        onClick={(e) => setDisplay(display + "+")}
                    >
                        &#43;
                    </button>
                    {/* + */}
                    <button onClick={(e) => setDisplay(display + "0")}>
                        0
                    </button>
                    <button onClick={(e) => setDisplay(display + ".")}>
                        .
                    </button>
                    <button onClick={(e) => setDisplay(display.slice(0, -1))}>
                        &#9003;
                    </button>
                    <button className="opt" onClick={calculate}>
                        &#61;
                    </button>
                </div>
            </div>
        </div>
    );
}
