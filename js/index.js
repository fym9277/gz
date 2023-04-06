let z01 = document.getElementsByClassName('z01')[0];
let z09 = document.getElementsByClassName('z09')[0];
let alls = document.getElementsByClassName('alls')[0];
let word_top = document.getElementsByClassName('word-top')[0];
let zx = document.getElementsByClassName('zx')[0];
let gz1 = document.getElementsByClassName('gz1')[0];
let gz2 = document.getElementsByClassName('gz2')[0];
let z12 = document.getElementsByClassName('z12')[0];
let gz = document.getElementsByClassName('gz')[0];
let gs = document.getElementsByClassName('gs')[0];
let btn1 = document.getElementsByClassName('btn1')[0];
let btn2 = document.getElementsByClassName('btn2')[0];
let btn3 = document.getElementsByClassName('btn3')[0];
let btn4 = document.getElementsByClassName('btn4')[0];
let clound = document.getElementsByClassName('clound');
let top_bg = document.getElementsByClassName('top-bg')[0];
let img_center = document.getElementsByClassName('img_center')[0]
let text_center = document.getElementsByClassName('text_center')[0]
let word = document.getElementsByClassName('word')[0]
let txt = document.getElementsByClassName('txt')
let tell = document.getElementsByClassName('tell')
let money = document.getElementsByClassName('money')
let wife = document.getElementsByClassName('wife')
let videos1 = document.getElementsByClassName("videos1")
let videos2 = document.getElementsByClassName("videos2")
let videos3 = document.getElementsByClassName("videos3")
let videos4 = document.getElementsByClassName("videos4")
let star1 = document.getElementsByClassName("star1")[0]
let star2 = document.getElementsByClassName("star2")[0]
let star3 = document.getElementsByClassName("star3")[0]
//开局柱子及鸽子显现
z01.classList.add('animate__animated', 'animate__slideInUp', 'my-element1')
gz1.classList.add('animate__animated', 'animate__slideInUp', 'my-element1')
txt[0].classList.add('animate__animated', 'animate__fadeIn', 'my-element1')
//第一页中间文字显现
setTimeout(() => {
    img_center.style.display = 'block'
    text_center.style.display = 'block'
    img_center.classList.add('animate__animated', 'animate__fadeIn', 'my-element1')
    text_center.classList.add('animate__animated', 'animate__fadeIn', 'my-element1')
}, 1500)
videos1[0].play()
//滑动隐藏
setTimeout(() => {
    document.ontouchmove = function () {
        img_center.style.display = 'none'
        text_center.style.display = 'none'
        word.style.display = 'block'
        //关闭开局音效 
        videos1[0].pause()
        //楼梯
        setTimeout(() => {
            // moves1();
            moves(first[0].classn, first[0].nav, first[0], first[0].time)
            //文字切换
            z09.addEventListener('animationend', function () {
                for (let i = 0; i < txt.length; i++) {
                    txt[i].style.display = 'none';
                    txt[1].style.display = 'block';
                    txt[1].classList.add('animate__animated', 'animate__fadeIn')
                }
            })
        }, 1200)
        document.ontouchmove = ''
    }
}, 2500)
let x = true;
let arr = []
btn1.onclick = function () {
    if (x) {
        x = false
        //移除光圈
        btn1.classList.remove('ripple');
        if (arr.length >= 1) {
            //瞬移鸽子
            swit(swits[0].txt_count, swits[0].img, swits[0].left, swits[0].bottom)
        } else {
            anima('toMove1', 1, 1620);
            turns(11, 1620, 11)
            turns(1, 2720, 25)
            turns(11,5280,14,1)
        }
    }
}
btn2.onclick = function () {
    if (x) {
        x = false;
        btn2.classList.remove('ripple');
        if (arr.length >= 2) {
            //瞬移鸽子
            swit(swits[1].txt_count, swits[1].img, swits[1].left, swits[1].bottom)
        } else {
            // 整体动画轨迹
            anima('toMove2', 1, 300);
            turns(11,300,37,2)
        }
    }
}
btn3.onclick = function () {
    if (x) {
        x = false
        btn3.classList.remove('ripple');
        if (arr.length >= 3) {
            //瞬移鸽子
            swit(swits[2].txt_count, swits[2].img, swits[2].left, swits[2].bottom)
        } else {
            // 整体动画轨迹
            anima('toMove3', 21, 1524);
            turns(31, 1524, 9)
            turns(21,2332,16,3)
        }
    }

}
btn4.onclick = function () {
    if (x) {
        x = false
        //移除光圈
        btn4.classList.remove('ripple');
        // 整体动画轨迹
        anima('toMove4', 31, 1826);
        turns(1,1826,9,4)
    }
}
let swits = [
    { txt_count: 2, img: 1, left: '1.4rem', bottom: '4rem' },
    { txt_count: 3, img: 21, left: '4rem', bottom: '6rem' },
    { txt_count: 4, img: 31, left: '5.5rem', bottom: '3.5rem' }
]
//封装鸽子的第二次点击切换
function swit(txt_count, img, left, bottom) {
    for (let i = 0; i < txt.length; i++) {
        txt[i].style.display = 'none';
        txt[txt_count].style.display = 'block';
        txt[txt_count].classList.add('animate__animated', 'animate__fadeIn')
    }
    gs.setAttribute('src', `../images/gz${img}.png`)
    gz2.style.display = 'block'
    gz1.style.display = 'none'
    gz2.style.left = `${left}`
    gz2.style.bottom = `${bottom}`
    x = true

}
// 梯子抬起动画
let ladder1 = document.getElementsByClassName("ladder1")
let ladder2 = document.getElementsByClassName("ladder2")
let ladder3 = document.getElementsByClassName("ladder3")
let ladder4 = document.getElementsByClassName("ladder4")
let first = [
    { classn: ladder1, nav: tell[0], time: 1000 },
    { classn: ladder2, nav: tell[1], time: 1200 },
    { classn: ladder3, nav: wife[1], time: 1300 },
    { classn: ladder4, nav: money[0], time: 1300 }
]
//封装的梯子动画
function moves(classn, nav, times) {
    for (let i = 0; i < classn.length; i++) {
        if (i == 0) {
            videos2[0].play()
        }
        setTimeout(() => {
            classn[i].style.display = 'block'
            classn[i].classList.add('animate__animated', 'animate__bounceInUp')
            if (i == classn.length - 1) {
                //移除电话动画
                if (nav != tell[0]) {
                    nav.classList.remove('animate__animated', 'animate__bounceInUp')
                    nav.classList.add('toover')
          
                };
                setTimeout(() => {
 
                    btn1.style.pointerEvents = 'auto'
                    btn2.style.pointerEvents = 'auto'
                    videos2[0].pause()
                }, times)
            } else {
                btn1.style.pointerEvents = 'none'
                btn2.style.pointerEvents = 'none'
            }
        }, 300 * (i + 1))
    }
}

//封装鸽子走动第一段动画
function anima(tomove, num, time) {
    //鸽子音效
    videos4[0].play()
    gz2.style.display = 'none'
    gz1.style.display = 'block'
    gz1.className = `gz1 ${tomove}`;
    let i = num;
    let time2 = setInterval(() => {
        if (i > num + 4) i = num;
        gz.setAttribute('src', '../images/gz' + i + '.png')
        i++
    }, 100);
    btn1.style.pointerEvents = 'none'
    btn2.style.pointerEvents = 'none'
    setTimeout(() => {
        clearInterval(time2)
    }, time)
}
//鸽子转向
function turns(count, time, stop,end) {
    setTimeout(() => {
        let i = count;
        let num = 0
        let time3 = setInterval(() => {
            if (i > count + 4) {
                i = count
            }
            gz.setAttribute('src', '../images/gz' + i + '.png')
            i++
            num++
            if (num == stop) {
                clearInterval(time3)
                if(end==1){
                    stopall(37,2,tell[0],tell[1],11,1)
                }
                 if(end==2){
                    stopall(14,2,wife[0],wife[1],11,2)
                }
                 if(end==3){
                    stopall(16,2,money[0],money[1],21,3)
                }
                if(end==4){
                    stopall(9)
                }
            }
        }, 100)
    }, time)
}
//停止时
function stopall(stop, a1, cz,cz1, img, num) {
    if (stop != 9) {
        videos4[0].pause()
        for (let i = 0; i < txt.length; i++) {
            txt[i].style.display = 'none';
            txt[a1].style.display = 'block';
            txt[a1].classList.add('animate__animated', 'animate__fadeIn')
        }
        //主子显现
        gz.setAttribute('src', '../images/gz' + img + '.png')
        cz.style.display = 'block'
        cz.classList.add('animate__animated', 'animate__bounceInUp')
        cz1.style.display = 'block'
        cz1.classList.add('animate__animated', 'animate__bounceInUp')
        setTimeout(() => {
            // moves2()
            moves(first[num].classn, first[num].nav, first[num].time)
            arr.push(num)
        }, 900)
        x = true
    } else {
        //切换背景图
        // alls.style.backgroundImage = 'url(../images/bg.jpg)'
        //关闭鸽子音效
        videos4[0].pause()
        gz.setAttribute('src', '../images/gz' + 31 + '.png')
        //鸽子上升
        gz1.classList.remove('toMove4')
        gz1.classList.add('torepe2')
        z12.classList.remove('animate__animated', 'animate__bounceInUp')
        z12.classList.add('torepe')
        //第三页面
        setTimeout(() => {
            word_top.style.display = 'block'
            setTimeout(() => {
                // videos3[0].pause()
                star1.className = 'star1 toover'
                star2.className = 'star2 toover'
                star3.className = 'star3 toover'
            }, 900)
        }, 5200)
        setTimeout(() => {
            //下降
            alls.classList.add('toup')
            word.classList.add('todown')
            for (let i = 0; i < clound.length; i++) {
                videos3[0].play()
                if (i == clound.length - 1) {
                    // console.log(i);
                    clound[i].classList.remove('animate__animated', 'animate__slideInUp', 'my-element1')
                }
                clound[i].classList.add('todown')
            }
        }, 1500)
        for (let i = 0; i < txt.length; i++) {
            txt[i].classList.add('animate__animated', 'animate__fadeOutanimate__fadeOut')
            txt[i].style.display = 'none';
        }
        top_bg.style.display = 'none';
    }
}

