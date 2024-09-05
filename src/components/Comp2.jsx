import React from 'react';
import './comp.css';
import Counter from './Counter';
import Input from './Input';
import Color from './Color';
import Input2 from './Input2';

const comp2 = () => {

    // Count 예제
    // Hook : 기능을 할 수 있게 해주는 역할
    // useState() : 상태변화

    return (
        <div className='comp2 comp'>
           <div>comp2 영역입니다.</div>
           <Counter />
           <hr />
           <Input />
           <hr />
           <Color />
           <hr />
           <Input2 />
        </div>
    );
};

export default comp2;