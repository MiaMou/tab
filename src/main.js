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

       // let images = document.querySelectorAll('img')
       let flag = true,//状态true为正常的状态,false为放大的状态
                  imgH,//图片的高度
                  imgW,//图片的宽度
                  img = document.querySelectorAll('img');//图片元素
       for(let i=0; i<img.length; i++){
           imgH = img[i].height; //获取图片的高度
           imgW = img[i].width; //获取图片的宽度
           img[i].onclick =  function(){
                   //图片点击事件
                          if(flag){
                                  //图片为正常状态,设置图片宽高为现在宽高的2倍
                                  flag = false;//把状态设为放大状态
                                  this.height = imgH*2;
                                  this.width = imgW*2;
                              }else{
                                  //图片为放大状态,设置图片宽高为现在宽高的二分之一
                                  flag = true;//把状态设为正常状态
                                  this.height = imgH/2;
                                  this.width = imgW/2;
                              }
       
                     
                
                  }
       
       }
  

}