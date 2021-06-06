class Radiobox extends Object {

    constructor(parent, name_, x_, y_, width_, height_, title_='Radio', values_=[], show_=true, cb_=null) {
        super();
        this._name = name_;
        this._x = x_;
        this._y = y_;
        this._width = width_;
        this._height = height_;
        this._title = title_;
        this._values = values_;
        this.callback = cb_;
        this.default = -1;
        this.header = createElement('h4', this._title);
        this.header.parent(parent);
        this.header.elt.hidden = !show_;
        this.radiobox = createRadio(this._title);
        this.radiobox.parent(parent);
        this.radiobox.elt.hidden = !show_;
    }

    setup() {
        this.header.position(this._x, this._y - 25);

        let _y = this._y - 25 + 2*this.header.height + 2; 
        this.radiobox.position(this._x, _y);
        this.radiobox.elt.style.width = this._width + 'px';

        for (let _idx in this._values) {
            let _item = this._values[_idx];
            if (_item[0].startsWith('*')) {
                this.radiobox.option(_item.substring(1));
                this.radiobox.selected(_item.substring(1));
                this.default = _idx;
            } else {
                this.radiobox.option(_item);
            }

        }
        //this.radiobox.selected('Radio 1');
        this.radiobox.changed((event) => {
            //console.log(event);
            //console.log(this.radiobox);
            //console.log(this.radiobox.selected());
            let _value = this.radiobox.selected();
            let _index = this._values.indexOf(_value);
            if (_index == -1) {
                _index = this._values.indexOf('*'+_value);
            }
            if (this.callback) this.callback(this._name, _index, _value)
        });
    }

    setCallback(callback) {
        this.callback = callback;
    }

}