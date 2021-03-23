window.onload = function(){
    // 获取元素
    let tabBar = document.querySelector('.tab_bar').querySelectorAll('li');
    let tabContent = document.querySelector('.tab_content').querySelectorAll('li')
    
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
  

}