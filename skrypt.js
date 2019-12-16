
    const _C = document.querySelector('.main-cube');
    const _g2 = document.querySelector('.g2');
    const _g3 = document.querySelector('.g3');
    const _grid = document.querySelectorAll('.grid');

    let drag = false, x0 = null, y0 = null;

    function getE(ev) {
        return ev.touches ? ev.touches[0] : ev;
    };

    function lock(ev) {
        let e = getE(ev);
        drag = true;
        x0 = e.clientX;
        y0 = e.clientY;
    };

    function rotate(ev) {
        if(drag) {
            let e = getE(ev), 
                    x = e.clientX, y = e.clientY, 
                    dx = x - x0, dy = y - y0, 
                    d = Math.hypot(dx, dy);

            if(d) {
                _C.style.setProperty('--p', getComputedStyle(_C).transform.replace('none', ''));
                _C.style.setProperty('--i', +(-dy).toFixed(2));
                _C.style.setProperty('--j', +(dx).toFixed(2));
                _C.style.setProperty('--a', `${+(0.2*d).toFixed(2)}deg`);

                x0 = x;
                y0 = y;
            }
        }
    };

    function release(ev) {
        if(drag) {
            drag = false;
            x0 = y0 = null;
        }
    };

    const cube = document.querySelectorAll(".cube");
    for (const x of cube) {
      x.addEventListener('click', function(){
          y = x.querySelectorAll('.cube_x');
          for (const z of y) {
              z.style.backgroundColor="green";
              z.style.boxShadow = "0 0 0.5vw black";
          }
       });
    }


    document.addEventListener('mousedown', lock, false);
    document.addEventListener('touchstart', lock, false);

    document.addEventListener('mousemove', rotate, false);
    document.addEventListener('touchmove', rotate, false);

    document.addEventListener('mouseup', release, false);
    document.querySelector('.main-cube').addEventListener('touchend', release, false);
    document.querySelector('.button_range').addEventListener('input', button_range);

    
    function button_range()
    {
          var g = document.querySelector('.button_range').value;
      
          if(g>50)
          {
            _g2.style.display="none";
            _g3.style.display="none";
          }
      
          else
          {
            _g2.style.display="grid";
            _g3.style.display="grid";
          }
      
          g=(g*g)/10;
      
          _g2.style.setProperty('--t', `${+(g)}vw`);
          _g3.style.setProperty('--t', `${+(-g)}vw`);
      
          for (const x of _grid) 
          {
              x.style.setProperty('--g', `${+(-g+10)}vw`);
              x.style.setProperty('--g', `${+(-g+10)}vw`);
              x.style.setProperty('--gg', `${+(g-10)}vw`);
          }
    }

 
