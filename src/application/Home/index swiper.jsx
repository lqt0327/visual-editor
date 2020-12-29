import React, { useCallback, useEffect, useState } from "react";
import { Header } from "baseUI";
import { Swiper } from "components";
import cx from "classnames";
import "./style.sass";

function Home() {
    const arr = ['Header','Swiper']
    console.log(typeof Header,'====')
    const [comps, setComps] = useState([]);
    const [arr2,setArr] = useState([])
    return (
        <div>
            {
                comps.map((comp,i)=>{
                    return (
                        <Header key={comp} comp={i} />
                    )
                })
            }
            <p>---------------</p>
            <button onClick={() => setComps(comps.concat([Date.now()]) )}>加组件</button>
            {
                arr2.map((item)=>{
                    return item;
                })
            }
            <button onClick={() => setArr(arr2.concat([Swiper()]) )}>加组件2</button>
        </div>
    )
}

export default React.memo(Home);