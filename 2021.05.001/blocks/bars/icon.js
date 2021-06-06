class IconBar extends Object {

    constructor(name_, buttons_=[], class_='btn', cb_=null) {
        super();
        this.name = name_;
        this._buttons = buttons_;
        this.callback = cb_;

        this.bar = createDiv();
        this.bar.style('float', 'right');

        this.buttons = {};
        buttons_.forEach(_btn => {
            if (cb_) {
                this.buttons[_btn] = IconBar.createIcon(name_ + '_' + _btn, icons[_btn], class_, this.callback.bind(this)).parent(this.bar);
                this.buttons[_btn].mouseClicked(this.callback.bind(this));
            } else {
                this.buttons[_btn] = IconBar.createIcon(name_ + '_' + _btn, icons[_btn], class_).parent(this.bar);
            }
        });
    }

    static createIcon(name_, icon_, class_='btn', cb_=null) {
        let _btn = createButton('');
        _btn.class(class_);
        _btn.child(createElement('i').class('fa ' + icon_.i).id(name_));
        if (cb_) _btn.mouseClicked(cb_);
        if (icon_.e.indexOf('item') >= 0) _btn.style('display', 'none');
        return _btn;
    }

    set parent(value) {
        if ('box' in value) {
            this._parent = value.box;
            this.bar.parent(value.box);
        } else {
            this._parent = value;
            this.bar.parent(value);    
        }
    }

    get parent() {
        return this._parent;
    }

    set callback(value) {
        this._callback = value;
    }

    get callback() {
        return this._callback;
    }

    set float(float_='right') {
        this.bar.style('float', float_);
    }

    get float() {
        return this.bar.elt.style.float;
    }

    showByType(type_, flag_=true) {
        this._buttons.forEach(_btn => {
            if ((icons[_btn].e == type_) && (flag_)) {
                this.buttons[_btn].show();
                this.buttons[_btn].style('display', '');
            }
        });
    }

    hideByType(type_, flag_=true) {
        this._buttons.forEach(_btn => {
            if ((icons[_btn].e == type_) && (flag_)) {
                this.buttons[_btn].style('display', 'none');
            }
        });
    }

}