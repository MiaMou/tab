window.onload = function(){
    // 获取元素
    let tabBar = document.querySelectorAll('.tab_bar li')
    let tabContent = document.querySelectorAll('.tab_content li')

    let curIndex = 0;   // 自定义属性，保存下标
    for(let i=0; i<tabBar.length; i++){     
        tabBar[i].onclick = function(){
            tabBar[curIndex].style = '';
            tabContent[curIndex].classList.remove("show")

            this.style.backgroundColor = '#007AFF'
            this.style.color = 'white'
            tabContent[i].classList.add("show")

            curIndex = i
            // tabContent[curIndex].className = ''
            // tabContent[i].className='show'                 
        }
    }
    
    let previewPane = document.querySelector('.preview_pane');
    let closeImg = previewPane.querySelector('.close_img');
    closeImg.onclick = () => {
        previewPane.classList.add("close");
    };

    let previewImg = previewPane.querySelector('.preview_img');
    let imgs = document.querySelectorAll('.imageList .image img');
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].onclick = () => {
            previewImg.src = imgs[i].src;
            previewImg.height = imgs[i].height * 3;
            previewPane.classList.remove("close");
        };
    }
}