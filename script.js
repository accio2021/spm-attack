var sections = document.querySelectorAll('section');
var footer = document.querySelector('footer');
var navLinks = document.querySelectorAll('header nav a');

  window.onscroll = () => {
    var top = window.scrollY;
    

    sections.forEach(sec => {
        var top = window.scrollY;
        var offset = sec.offsetTop - 700;
        var height = sec.offsetHeight;
        var id = sec.getAttribute('id');
        var aboutUs = document.querySelector('.about-us');
        var notes = document.querySelector('.notes');
        var schol = document.querySelector('.schol');
        var home = document.querySelector('.home')
        var path = document.querySelector('.path')
        var footerLink = document.querySelector('header nav a[href="#followUs"]');
        var footerOffset = footer.offsetTop - 900;

        if (top >= footerOffset && top < footerOffset + height) {
          navLinks.forEach(links => {
            links.classList.remove('active');
        })
          footerLink.classList.add('active');
        } else {
          footerLink.classList.remove('active');
      }

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })

            if (sec.classList.contains('home')) {
              home.querySelector('.iconTop').classList.remove('active');      
          }
          
            if (sec.classList.contains('about-us')) {
                aboutUs.querySelector('.au-head').classList.add('active');
                aboutUs.querySelector('.au-cont').classList.add('active');
                home.querySelector('.iconTop').classList.add('active');                
            }

            if (sec.classList.contains('notes')) {
                notes.querySelector('.heading').classList.add('active');
                notes.querySelector('.desc').classList.add('active');
                notes.querySelector('.notes-content').classList.add('active');
                home.querySelector('.iconTop').classList.add('active');
            } 

            if (sec.classList.contains('schol')) {
              schol.querySelector('.heading').classList.add('active');
              schol.querySelector('.desc').classList.add('active');
              schol.querySelector('.schol-content').classList.add('active');
              home.querySelector('.iconTop').classList.add('active');
          }

            if (sec.classList.contains('path')) {
              path.querySelector('.heading').classList.add('active');
              path.querySelector('.desc').classList.add('active');
              path.querySelector('.path-content1').classList.add('active');
              path.querySelector('.path-content2').classList.add('active');
              path.querySelector('.title1').classList.add('active');
              path.querySelector('.title2').classList.add('active');
              home.querySelector('.iconTop').classList.add('active');
          }
        
        }     
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  }


var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');
  
  menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
  }

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
        
    function opentab(tabname){
        for(var tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(var tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }