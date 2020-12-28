import React, { useCallback, useEffect, useState } from "react";
import { Header } from "baseUI";
import { Swiper } from "components";
import cx from "classnames";
import "./style.sass";

function Home() {
    const arr = ['Header','Swiper']
    console.log(typeof Header,'====')
    const [comps, setComps] = useState([]);
    return (
        <div>
            {
                comps.map((comp)=>{
                    return (
                        <Header key={comp} />
                    )
                })
            }
            <p>---------------</p>
            <button onClick={() => setComps(comps.concat([Date.now()]) )}>加组件</button>
        </div>
    )
}

export default React.memo(Home);