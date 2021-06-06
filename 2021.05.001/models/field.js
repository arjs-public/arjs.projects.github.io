class Field extends Object {

  constructor(parent_, size_) {
      super()
      // this.logo = null;
      this.size = size_;
      this.fieldwidth = this.size * YARDS_IN_FIELD_WIDTH;
      this.fieldheight = this.size * YARDS_IN_FIELD_HEIGHT;
      //console.log(this.fieldwidth, this.fieldheight);
      this.bordersize = 1;
      if ((this.size >= 5) && (this.size < 10)) {
        this.bordersize = 1.5;
      } else if (this.size >= 10) {
        this.bordersize = 2;
      }
      //console.log(this.bordersize);
      this.outerborder = this.size * this.bordersize;
      //console.log(this.outerborder);
  
      this.paddingwidth = 10 * this.size;
      this.paddingheight = 15 * this.size;
      //console.log(this.paddingwidth, this.paddingheight);

      this.canvaswidth = this.fieldwidth + 2 * this.outerborder + 2 * this.paddingwidth;
      this.canvasheight = this.fieldheight + 2 * this.outerborder + 2 * this.paddingheight;
      //console.log(this.canvaswidth, this.canvasheight);
      
      this.tunnelwidth = 10 * this.size;
      this.tunnelheight = 5 * this.size;

      this.offsetx = (this.canvaswidth - this.fieldwidth) / 2;
      this.offsety = (this.canvasheight - this.fieldheight) / 2;

      this.canvas = createCanvas(this.canvaswidth, this.canvasheight);
      this.canvas.parent(parent_);
  }
  
  drawFieldWithBorder() {
    push();
    rectMode(CORNER);
    stroke(settings.miscs.Line);
    strokeWeight(this.outerborder);
    noFill();
    rect(
      this.offsetx - this.outerborder / 2, 
      this.offsety - this.outerborder / 2, 
      this.fieldwidth + this.outerborder, 
      this.fieldheight + this.outerborder
    );
    strokeWeight(0);
    fill(settings.miscs.Grass);
    rect(this.offsetx, this.offsety, this.fieldwidth, this.fieldheight);
    pop();
  }

  drawYardLines() {
    push();
    let _step = this.fieldwidth / 12;
    let _offset_x = this.offsetx;
    let _height = this.fieldheight;
    let _offset_y = this.paddingheight + this.outerborder;
    stroke(settings.miscs.Line);
    strokeCap(PROJECT);
    for (let _i = 0; _i < 13; _i++) {
      strokeWeight(this.bordersize);
      if ((settings.miscs.DrawFiveYards) && (_i > 0 && _i < 11)) {
        line(
          _offset_x + _i * _step + _step / 2,
          _offset_y,
          _offset_x + _i * _step + _step / 2,
          _offset_y + _height
        )  
      }
      if (settings.miscs.DrawTenYards) {
        strokeWeight(this.bordersize * 2);
        line(
          _offset_x + _i * _step,
          _offset_y,
          _offset_x + _i * _step,
          _offset_y + this.fieldheight
        )  
      }
    }
    pop();
  }

  drawHashmark(home, inner) {
    push();
    let _stepo = this.fieldwidth / 12;
    let _x = this.offsetx + _stepo;
    let _steph = _stepo / 10;
    let _sizeh = this.size / 2;
    let _sizefh = 2 * (this.size / 2);
    stroke(settings.miscs.Line);
    strokeWeight(this.bordersize);
    if (inner) {
      let _offset_y = this.offsety + this.fieldheight / 2;
      let _offset = this.fieldheight / 10;
      if (home) {
        let _y1, _y2
        _y1 = _y2 = _offset_y - _offset;
        for (_x = 11; _x < 110; _x = _x + 1) {
          line(
            this.offsetx + _steph * _x,
            _y1 - ((_x % 5 == 0) ? _sizefh : _sizeh),
            this.offsetx + _steph * _x,
            _y2 + ((_x % 5 == 0) ? _sizefh : _sizeh)
          );
        }
      } else {
        let _y1, _y2
        _y1 = _y2 = _offset_y + _offset;
        for (_x = 11; _x < 110; _x = _x + 1) {
          line(
            this.offsetx + _steph * _x, 
            _y1 - ((_x % 5 == 0) ? _sizefh : _sizeh),
            this.offsetx + _steph * _x, 
            _y2 + ((_x % 5 == 0) ? _sizefh : _sizeh),
          );
        }
      }  
    } else {
      let _offset_y = this.offsety + _sizeh;
      let _offset = this.fieldheight - this.size;
      if (home) {
        let _y1, _y2
        _y1 = _y2 = _offset_y;
        for (_x = 11; _x < 110; _x = _x + 1) {
          line(
            this.offsetx + _steph * _x, 
            _y1 - ((_x % 5 == 0) ? _sizefh : _sizeh),
            this.offsetx + _steph * _x, 
            _y2 + ((_x % 5 == 0) ? _sizefh : _sizeh)
          );
        }
      } else {
        let _y1, _y2
        _y1 = _y2 = _offset_y + _offset;
        for (_x = 11; _x < 110; _x = _x + 1) {
          line(
            this.offsetx + _steph * _x, 
            _y1 - ((_x % 5 == 0) ? _sizefh : _sizeh),
            this.offsetx + _steph * _x, 
            _y2 + _sizeh
          );
        }
      }          
    }
    pop();
  }

  drawKickMarkers() {
    push();
    stroke(settings.miscs.Line);
    strokeWeight(this.bordersize);
    let _stepo = this.fieldwidth / 12;
    let _steph = _stepo / 10;
    let _offset_y = this.offsety + this.fieldheight / 2;
    
    line(this.offsetx + _steph * 12, _offset_y - (this.size / 2), this.offsetx + _steph * 12, _offset_y + (this.size / 2));
    line(this.offsetx + _steph * 22, _offset_y - (this.size / 2), this.offsetx + _steph * 22, _offset_y + (this.size / 2));
    line(this.offsetx + _steph * 45, _offset_y - (this.size / 2), this.offsetx + _steph * 45, _offset_y + (this.size / 2));

    line(this.offsetx + _steph * 108, _offset_y - (this.size / 2), this.offsetx + _steph * 108, _offset_y + (this.size / 2));
    line(this.offsetx + _steph * 98, _offset_y - (this.size / 2), this.offsetx + _steph * 98, _offset_y + (this.size / 2));
    line(this.offsetx + _steph * 75, _offset_y - (this.size / 2), this.offsetx + _steph * 75, _offset_y + (this.size / 2));
    pop();
  }

  drawTunnel(home) {
    push();
    rectMode(CORNER);
    stroke(settings.miscs.Line);
    strokeWeight(this.outerborder / this.size);
    textSize(this.tunnelheight / 2);
    textStyle(BOLD);
    textFont('Verdana');
    if (home) {
      let _home = settings.home.Tunnel.substring(0,5);
      fill(settings.home.First);
      rect(0, this.canvasheight - this.tunnelheight, this.tunnelwidth, this.tunnelheight);
      if (settings.home.Tunnel && settings.home.TextTunnel) {
        fill(settings.home.Second);
        stroke(settings.home.Alternate);
        text(_home, (this.tunnelwidth - (textWidth(_home))) / 2, this.canvasheight - (this.tunnelheight / 3));
      }
    } else {
      let _guest = settings.guest.Tunnel.substring(0,5);
      fill(settings.guest.First);
      rect(0, 0, this.tunnelwidth, this.tunnelheight);
      if (settings.guest.Tunnel && settings.guest.TextTunnel) {
        fill(settings.guest.Second);
        stroke(settings.guest.Alternate);
        text(_guest, (this.tunnelwidth - (textWidth(_guest))) / 2, (this.tunnelheight - (this.tunnelheight / 3)));
      }
    }
    pop();
  }

  drawEndzone(home) {
    push();
    let _offset_y = this.paddingheight + this.outerborder;
    let _step = this.fieldwidth / 12;
    let _bw = _step;
    let _bh = this.fieldheight;
    let _ts = this.paddingheight / 2;

    rectMode(CORNER);
    stroke(settings.miscs.Line);
    strokeWeight(0);
    textSize(_ts);
    textStyle(BOLD);
    textFont('Verdana');
    if (home) {
      if (settings.home.FillEndzone) fill(settings.home.First);
      let _bx = _step + this.outerborder;
      let _by = this.paddingheight + this.outerborder;
      rect(_bx, _by, _bw, _bh);

      if (settings.home.Endzone && settings.home.TextEndzone) {
        translate(this.offsetx + _step, _offset_y + this.fieldheight);
        rotate(-PI / 2);
        fill(settings.home.Second);
        stroke(settings.home.Alternate);
        strokeWeight(this.outerborder / 2);
        let _tw = textWidth(settings.home.Endzone);
        if (_tw > _bh) {
          _ts *= round((_bh / _tw) * 100)*0.95/100;
          strokeWeight((this.outerborder / 2) * round((_bh / _tw) * 100)*0.9/100);
        }
        textSize(_ts);
        _tw = textWidth(settings.home.Endzone);

        let _tx = (_bh - _tw) / 2;
        let _ty = (_bw - _ts) / 2 + textDescent() / 2;
        text(settings.home.Endzone, _tx, -_ty);
      }
    } else {
      if (settings.guest.FillEndzone) fill(settings.guest.First);
      let _bx = this.fieldwidth + this.outerborder + this.bordersize * 2 - 2;
      let _by = this.paddingheight + this.outerborder;
      rect(_bx, _by, _bw, _bh);

      if (settings.guest.Endzone && settings.guest.TextEndzone) {
        translate(this.offsetx + this.fieldwidth - _step, this.paddingheight + this.outerborder);
        rotate(PI / 2);
        fill(settings.guest.Second);
        stroke(settings.guest.Alternate);
        strokeWeight(this.outerborder / 2);
        let _tw = textWidth(settings.guest.Endzone);
        if (_tw > _bh) {
          _ts *= round((_bh / _tw) * 100)*0.95/100;
          strokeWeight((this.outerborder / 2) * round((_bh / _tw) * 100)*0.9/100);
        }
        textSize(_ts);
        _tw = textWidth(settings.guest.Endzone);

        let _tx = (_bh - _tw) / 2;
        let _ty = (_bw - _ts) / 2 + (this.bordersize*2 + textDescent()) / 2;
        text(settings.guest.Endzone, _tx, -_ty);
      }
    }
    pop();
  }

  drawTeamzone(home) {
    push();
    let _step = this.fieldwidth / 12;
    let _bw = 6 * _step;
    let _bh = _step;
    let _ts = this.paddingheight / 2;
    rectMode(CORNER);
    stroke(settings.miscs.Line);
    strokeWeight(this.size);
    textSize(_ts);
    textStyle(BOLD);
    textFont('Verdana');
    if (home) {
      if (settings.home.FillTeamzone) fill(settings.home.First);
      let _bx = 4 * _step + this.outerborder;
      let _by = this.fieldheight + this.paddingheight + 2 * this.outerborder;
      rect(_bx, _by, _bw, _bh);
      if (settings.home.Teamzone && settings.home.TextTeamzone) {
        translate(_bx, _by + _bh);
        fill(settings.home.Second);
        stroke(settings.home.Alternate);
        strokeWeight(this.outerborder / 2);
        let _tw = textWidth(settings.home.Teamzone);
        if (_tw > _bw) {
          _ts *= round((_bw / _tw) * 100)*0.9/100;
          strokeWeight((this.outerborder / 2) * round((_bw / _tw) * 100)*0.9/100);
        }
        textSize(_ts);
        _tw = textWidth(settings.home.Teamzone);

        let _tx = (_bw - _tw) / 2;
        let _ty = (_bh - _ts) / 2 + textDescent() / 2;
        text(settings.home.Teamzone, _tx, -_ty);
      }
    } else {
      if (settings.guest.FillTeamzone) fill(settings.guest.First);
      let _bx = 4 * _step + this.outerborder;
      let _by = this.paddingheight - _step;
      let _bw = 6 * _step;
      let _bh = _step;
      rect(_bx, _by, _bw, _bh);
      if (settings.guest.Teamzone && settings.guest.TextTeamzone) {
        translate(_bx + _bw, _by);
        rotate(PI);
        fill(settings.guest.Second);
        stroke(settings.guest.Alternate);
        strokeWeight(this.outerborder / 2);
        let _tw = textWidth(settings.guest.Teamzone);
        if (_tw > _bw) {
          _ts *= round((_bw / _tw) * 100)*0.9/100;
          strokeWeight((this.outerborder / 2) * round((_bw / _tw) * 100)*0.9/100);
        }
        textSize(_ts);
        _tw = textWidth(settings.guest.Teamzone);

        let _tx = (_bw - _tw) / 2;
        let _ty = (_bh - _ts) / 2 + textDescent() / 2;
        text(settings.guest.Teamzone, _tx, -_ty);
      }
    }
    pop();
  }

  drawNumbers(home) {
    push();
    let _numbers = ['1 0', '2 0', '3 0', '4 0', '5 0', '4 0', '3 0', '2 0', '1 0'];
    let _step = this.fieldwidth / 12;
    let _offset_x = this.offsetx + _step;
    fill(settings.miscs.Line);
    textStyle(BOLD);
    textFont('Verdana');
    textSize(_step / 2);
    let _textWidthT = textWidth('50') - this.size + 2 * this.bordersize;
    stroke(settings.miscs.Line);
    strokeWeight(this.bordersize);
    if (home) {
      let _offset_y = this.offsety + this.fieldheight / 5;
      translate(this.fieldwidth + 1.4*this.size, _offset_y);
      rotate(PI*3);
      for (let _x = 0; _x < 9; _x = _x + 1) {
        textSize(_step / 3);
        text(_numbers[_x], _textWidthT + _x * _step, this.size);
      }
    } else {
      let _offset_y = this.offsety + 4 * (this.fieldheight / 5);
      translate(_offset_x + 0.5*this.size, _offset_y);
      for (let _x = 0; _x < 9; _x = _x + 1) {
        textSize(_step / 3);
        text(_numbers[_x], _textWidthT + _x * _step, this.size);
      }
    }
    pop();
  }

  drawArrows(home) {
    let _arrows = ['<', '<', '<', '<', ' ', '>', '>', '>', '>'];
    let _step = this.fieldwidth / 12;
    let _offset_x = this.offsetx + _step;
    fill(settings.miscs.Line);
    textFont('Verdana');
    textStyle(BOLD);
    textSize(_step / 8);
    stroke(settings.miscs.Line);
    strokeWeight(this.bordersize * 3);
    let _textWidthA = textWidth('50') - this.size + 2 * this.bordersize;
    if (home) {
      push();
      let _offset_y = this.offsety + this.fieldheight / 5;
      translate(this.fieldwidth + 2 * this.size, _offset_y);
      rotate(PI*3);
      for (let _x = 0; _x < 9; _x = _x + 1) {
        if (_x < 5) {
          text(_arrows[_x], _textWidthA*4.75 + _x * _step, this.bordersize);
        } else if (_x >= 5) {
          text(_arrows[_x], _textWidthA*3 + (_x+1) * _step, this.bordersize);
        }
      }
      pop();
    } else {
      push();
      let _offset_y = this.offsety + 4 * (this.fieldheight / 5);
      translate(_offset_x, _offset_y);
      for (let _x = 0; _x < 9; _x = _x + 1) {
        if (_x < 5) {
          text(_arrows[_x], _textWidthA*4.75 + _x * _step, this.bordersize);
        } else if (_x >= 5) {
          text(_arrows[_x], _textWidthA*3 + (_x+1) * _step, this.bordersize);
        }
      }
      pop();
    }
  }

  drawGoal(home) {
    fill(settings.miscs.Goal);
    stroke(settings.miscs.Goal);
    strokeWeight(this.bordersize);
    if (home) {
      rect(this.offsetx - 2*this.outerborder, this.offsety + this.fieldheight/2, 2*this.size*this.bordersize, 2.5*this.bordersize);
      rect(this.offsetx, this.offsety + this.fieldheight/2 - 5*this.size, 2.5*this.bordersize, 10*this.size);
    } else {
      rect(this.offsetx + this.fieldwidth - this.bordersize*2.5, this.offsety + this.fieldheight/2, 2*this.size*this.bordersize, 2.5*this.bordersize);
      rect(this.offsetx + this.fieldwidth - this.bordersize*2.5, this.offsety + this.fieldheight/2 - 5*this.size, 2.5*this.bordersize, 10*this.size);
    }
  }

  drawLogo() {
    push();
    let _offset_y = this.fieldheight / 8;
    let _ts = this.size*4;
    stroke(settings.home.Second);
    strokeWeight(this.outerborder / 3);
    fill(settings.home.First);
    circle(this.offsetx + this.fieldwidth / 2, this.offsety + this.fieldheight / 2, _offset_y)
    stroke(settings.home.Alternate);
    fill(settings.home.Second);
    if (settings.home.Logo) {
      let _text = settings.home.Logo.substring(0, 2);
      if (_text.length == 2) _ts = this.size*3;
      textSize(_ts);
      text(_text, this.offsetx + (this.fieldwidth - textWidth(_text)) / 2, this.offsety + (this.fieldheight / 2) + _ts*0.35);
    }
    pop();
  }
  
  draw() {
    // Clear Canvas
    clear();

    // Canvas Background
    if (settings.miscs.DrawBackground) background(settings.miscs.Background);

    // Field
    if (settings.miscs.DrawField) this.drawFieldWithBorder();

    // Outer Hashmarks
    if (settings.miscs.DrawOuterHash) {
      this.drawHashmark(true, false);
      this.drawHashmark(false, false);
    }

    // inner Hashmarks
    if (settings.miscs.DrawInnerHash) {
      this.drawHashmark(true, true);
      this.drawHashmark(false, true);
    }

    // Kick Markers
    if (settings.miscs.DrawKickMarkers) this.drawKickMarkers();

    // Endzones
    if (settings.miscs.DrawEndzones) {
      if (settings.home.DrawEndzone) this.drawEndzone(true);
      if (settings.guest.DrawEndzone) this.drawEndzone(false);
    }

    // Teamzones
    if (settings.miscs.DrawTeamzones) {
      if (settings.home.DrawTeamzone) this.drawTeamzone(true);
      if (settings.guest.DrawTeamzone) this.drawTeamzone(false);
    }

    // Yardlines
    if (settings.miscs.DrawTenYards || settings.miscs.DrawFiveYards ) this.drawYardLines();

    // Numbers
    if (settings.miscs.DrawNumbers) {
      this.drawNumbers(true);
      this.drawNumbers(false);
    }

    // Arrows
    if (settings.miscs.DrawArrows) {
      this.drawArrows(true);
      this.drawArrows(false);
    }

    // Goals
    if (settings.miscs.DrawGoals) {
      if (settings.home.DrawGoal) this.drawGoal(true);
      if (settings.guest.DrawGoal) this.drawGoal(false);
    }

    // Tunnels
    if (settings.miscs.DrawTunnels) {
      if (settings.home.DrawTunnel) this.drawTunnel(true);
      if (settings.guest.DrawTunnel) this.drawTunnel(false);
    }

    // Logo
    if (settings.home.DrawLogo) this.drawLogo();

  }

}
