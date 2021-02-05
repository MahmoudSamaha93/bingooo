import React from 'react';
import Row from '../row/row';
import './home.css'

const Home = () => {
    let play = ()=> {
        let clicked_boxs = document.querySelectorAll('#box');
        let bingo = clicked_boxs[12];
        bingo.innerHTML = '<p id="emoji" style="font-size: 100px; ">&#128515;</p>'
        clicked_boxs.forEach(clicked_box => {
            let boxStyle = clicked_box.style;
            clicked_box.addEventListener('click', ()=>{
                if (clicked_box !== clicked_boxs[12]){
                    if (boxStyle.backgroundColor === 'lightblue'){
                        boxStyle.backgroundColor = 'white';
                        boxStyle.textDecoration = 'none';
                    }
                    else {
                        boxStyle.backgroundColor = 'lightblue';
                        boxStyle.textDecoration = 'line-through';
                    }
                }
            })
        })
        if ((clicked_boxs[0].style.backgroundColor === 'lightblue' &&
            clicked_boxs[1].style.backgroundColor === 'lightblue' &&
            clicked_boxs[2].style.backgroundColor === 'lightblue' &&
            clicked_boxs[3].style.backgroundColor === 'lightblue' &&
            clicked_boxs[4].style.backgroundColor === 'lightblue') ||
            (clicked_boxs[5].style.backgroundColor === 'lightblue' &&
                clicked_boxs[6].style.backgroundColor === 'lightblue' &&
                clicked_boxs[7].style.backgroundColor === 'lightblue' &&
                clicked_boxs[8].style.backgroundColor === 'lightblue' &&
                clicked_boxs[9].style.backgroundColor === 'lightblue') ||
            (clicked_boxs[10].style.backgroundColor === 'lightblue' &&
                clicked_boxs[11].style.backgroundColor === 'lightblue' &&
                clicked_boxs[13].style.backgroundColor === 'lightblue' &&
                clicked_boxs[14].style.backgroundColor === 'lightblue') ||
            (clicked_boxs[15].style.backgroundColor === 'lightblue' &&
                clicked_boxs[16].style.backgroundColor === 'lightblue' &&
                clicked_boxs[17].style.backgroundColor === 'lightblue' &&
                clicked_boxs[18].style.backgroundColor === 'lightblue' &&
                clicked_boxs[19].style.backgroundColor === 'lightblue') ||
            (clicked_boxs[20].style.backgroundColor === 'lightblue' &&
                clicked_boxs[21].style.backgroundColor === 'lightblue' &&
                clicked_boxs[22].style.backgroundColor === 'lightblue' &&
                clicked_boxs[23].style.backgroundColor === 'lightblue' &&
                clicked_boxs[24].style.backgroundColor === 'lightblue') ||
            (clicked_boxs[0].style.backgroundColor === 'lightblue' &&
                clicked_boxs[5].style.backgroundColor === 'lightblue' &&
                clicked_boxs[10].style.backgroundColor === 'lightblue' &&
                clicked_boxs[15].style.backgroundColor === 'lightblue' &&
                clicked_boxs[20].style.backgroundColor === 'lightblue') ||
            (clicked_boxs[1].style.backgroundColor === 'lightblue' &&
                clicked_boxs[6].style.backgroundColor === 'lightblue' &&
                clicked_boxs[11].style.backgroundColor === 'lightblue' &&
                clicked_boxs[16].style.backgroundColor === 'lightblue' &&
                clicked_boxs[21].style.backgroundColor === 'lightblue') ||
            (clicked_boxs[2].style.backgroundColor === 'lightblue' &&
                clicked_boxs[7].style.backgroundColor === 'lightblue' &&
                clicked_boxs[17].style.backgroundColor === 'lightblue' &&
                clicked_boxs[22].style.backgroundColor === 'lightblue') ||
            (clicked_boxs[3].style.backgroundColor === 'lightblue' &&
                clicked_boxs[8].style.backgroundColor === 'lightblue' &&
                clicked_boxs[13].style.backgroundColor === 'lightblue' &&
                clicked_boxs[18].style.backgroundColor === 'lightblue' &&
                clicked_boxs[23].style.backgroundColor === 'lightblue') ||
            (clicked_boxs[4].style.backgroundColor === 'lightblue' &&
                clicked_boxs[9].style.backgroundColor === 'lightblue' &&
                clicked_boxs[14].style.backgroundColor === 'lightblue' &&
                clicked_boxs[19].style.backgroundColor === 'lightblue' &&
                clicked_boxs[24].style.backgroundColor === 'lightblue') ||
            (clicked_boxs[0].style.backgroundColor === 'lightblue' &&
                clicked_boxs[6].style.backgroundColor === 'lightblue' &&
                clicked_boxs[18].style.backgroundColor === 'lightblue' &&
                clicked_boxs[24].style.backgroundColor === 'lightblue') ||
            (clicked_boxs[4].style.backgroundColor === 'lightblue' &&
                clicked_boxs[8].style.backgroundColor === 'lightblue' &&
                clicked_boxs[16].style.backgroundColor === 'lightblue' &&
                clicked_boxs[20].style.backgroundColor === 'lightblue'))
            alert('\tYOU GOT IT\n\nReload and try another one');
    }

    return (
        <div className="row ml-auto mr-auto mt-0 mb-0 text-wrap" onClick={()=>play()} onMouseMove={()=>play()}>
            <div className="col-12 show">
                <Row />
            </div>
        </div>
    );
}
export default Home;
