import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, decrementByAmount } from '../redux/counter/counterSlice';

const Counter = () => {
    const [amount, setAmount] = useState(3);
    const countValue = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    return (
        <div className="container">
            <h1>Counter</h1>
            <div>
                <div className="countContent">
                    <h1 className="countValue">{countValue}</h1>
                    <button onClick={() => dispatch(increment())} className="btn btnIncrement">Increment</button>
                    <button onClick={() => dispatch(decrement())} className="btn btnDecrement">Decrement</button>

                    <br /><br />
                    <input type="number" name="number" className="nums" value={amount} onChange={(e) => setAmount(e.target.value)} />

                    <div>
                        <button className="btn btnIncrementByAmount" onClick={() => dispatch(incrementByAmount(amount))}>Increment by Amount</button>
                        <button className='btn btnDecrementByAmount' onClick={() => dispatch(decrementByAmount(amount))}>Decrement by Amount</button>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Counter;
