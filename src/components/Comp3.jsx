import React, { useState } from 'react';
import './comp.css';
import { Link } from 'react-router-dom';

const comp3 = () => {
    // 다른 컴포넌트로 데이터를 넘길 때 props 또는
    // path를 사용하여 데이터를 넘길 수 있음
    // (1) path variable : /comp3/12
    // (2) queryString : /comp3?id=12&name=12

    const [ id, setId ] = useState("");
    const [ pw, setPw ] = useState("");

    return (
        <div className='comp3 comp'>
            <div>comp3 영역입니다.</div>

            {/* id/pw 입력받고 전송버튼을 클릭하여 Param3.jsx에 출력 */}
            <input type="text" name='id' onChange={(e)=>{setId(e.target.value)}}/>
            <input type="text" name='pw' onChange={(e)=>{setPw(e.target.value)}}/>

            <Link to = {{pathname: `/param3/${id}/${pw}`}}>id/pw 전송</Link>

            <Link to = '/param/15/kim'>path variable</Link>
            <br /><br /><br /><br />

            <Link to = {{pathname:'/param/15/kim'}}>path variable</Link>
            <br /><br /><br /><br />

            <Link to= '/param?num=1&page=15'>queryString</Link>
            <br /><br /><br /><br />

            <Link to = {
                {
                    pathname: '/param',
                    search: '?num=1&page=15'   
                }
            }>queryString params</Link>
            <br /><br /><br /><br />


        </div>
    );
};

export default comp3;