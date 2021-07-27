
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  var text = document.getElementById('text');
  var word = text.getElementsByTagName('span');

  var i = 0;

  function rotator(){
    word[i].style.display = 'none';
    i = (i + 1) % word.length;
    word[i].style.display = 'initial';
  }
  setInterval(rotator, 1000);



  window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.scrolltop');
    scroll.classList.toggle("active" , window.scrollY > 1200)
    })
  
    function scrollToTop(){
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }



  function actionToggle(){
    var action = document.querySelector('.action');
    action.classList.toggle('active')
  }


    let progress = document.getElementById('progressbar');
    let totalHeigt = document.body.scrollHeight - window.innerHeight;
    window.onscroll = function(){
      let progressHeight = (window.pageYOffset / totalHeigt) * 100;
      progress.style.height = progressHeight + "%";
    }