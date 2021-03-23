window.onload = function(){
    // 获取元素
    let tabBar = document.querySelectorAll('.tab_bar li')
    let tabContent = document.querySelectorAll('.tab_content li')
    for(let i=0; i<tabBar.length; i++){
        // 自定义属性，保存下标
        tabBar[i].index = i
        tabBar[i].onclick = function(){
            for(let j=0; j<tabBar.length; j++){
                tabBar[j].style = '';
                tabContent[j].style = ''
                // tabBar[j].className = '';
                // tabContent[j].className = ''
            }
            // this.className = 'active'  
            // tabContent[this.index].className='show'  
            this.style.backgroundColor = '#007AFF'
            this.style.color = 'white'
            tabContent[this.index].style.display='block' 
                   
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