import React, { useCallback, useEffect, useState } from "react";
import { Header, Footer } from "baseUI";
import * as components from "components";
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
            <main className="main-wrapper">
                {
                    arr2.map((item)=>{
                        return item;
                    })
                }
                <button onClick={() => setArr(arr2.concat([components.Swiper()]) )}>加组件2</button>
                <button onClick={() => setArr(arr2.concat([components.Advert()]) )}>加组件3</button>
                
            </main>
            <button onClick={() => setComps(comps.concat([Date.now()]) )}>加组件4</button>
            {
                comps.map((comp,i)=>{
                    return (
                        <Footer key={comp} comp={i} />
                    )
                })
            }
        </div>
    )
}

export default React.memo(Home);