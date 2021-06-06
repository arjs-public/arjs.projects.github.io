class ModifyBar extends Object {

    constructor(name_, title_='Modify', class_='btn') {
        super();
        this.name = name_;
        this.class = class_;
        this.data = {};
        this.input = {};

        this.bar = createDiv();
        this.bar.style('display', 'grid');
        this.bar.style('grid-template-columns', 'minmax(100%) 1fr');
        this.bar.style('font-family', 'monospace');
        this.bar.style('font-size', 'large');

        this.header = createElement('h5', title_);
        this.header.parent(this.bar);
        this.header.style('margin-top', '1px')
        this.header.style('margin-bottom', '1px')
        this.header.style('margin-left', '5px')
        this.header.style('float', 'left');

        this.footer = createDiv();
        this.footer.parent(this.bar);
        this.footer.style('margin-left', '3px');
        this.footer.style('display', 'grid');
        this.footer.style('grid-template-columns', 'auto 60px');
    }

    set parent(value) {
        this._parent = value.box;
        this.bar.parent(value.box);
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

    set closeCallback(value) {
        this._callbackClose = value;
    }

    get closeCallback() {
        return this._callbackClose;
    }

    set title(value) {
        this.header.elt.innerText = value;
    }

    get title() {
        return this.header.elt.innerText;
    }

    set visible(value) {
        if (value) {
            this.bar.show();
        } else {
            this.bar.hide();
        }
    }

    get visible() {
        return (this.bar.elt.style.display != 'none');
    }

    get(name_) {
        if (!name_) return null;
        let _item = select(`#${name_}`);
        if (_item) return _item.value();
        return null;
    }

    set(name_, data_) {
        this.data[name_] = data_;
        let _item = select(`#${name_}`);
        if (_item) _item.value(data_);
    }

    addModifiers(cb_=null) {
        this.callback = cb_;

        let _box = createDiv();
        _box.style('display', 'flex');
        _box.style('justify-content', 'flex-end');
        _box.child(IconBar.createIcon(this.name + '_S', icons['S'], this.class, (event) => {
            this.input = {...this.data};
            for (let _idx in this.input) {
                this.input[_idx] = this.get(_idx);
                if (!this.input[_idx]) this.input[_idx] = this.data[_idx];
            }
            (this.callback) ? this.callback(event, { old: this.data, new: this.input }) : null 
        }));
        _box.child(IconBar.createIcon(this.name + '_X', icons['X'], this.class, (event) => {
            console.log('close 1');
            (this._callbackClose) ? this._callbackClose() : null
        }));

        this.footer.child(_box);
    }

    addInput(name_, placeholder_='', label_='') {
        let _box = createDiv();
        _box.style('display', 'flex');

        if (label_) _box.child(createSpan(label_));

        let _input = createInput().id(name_);
        _input.style('flex', '100%');
        //_input.style('width', 'auto');
        _input.style('margin-left', '2px');
        if (placeholder_) _input.elt.placeholder = placeholder_;
        _box.child(_input);

        this.footer.child(_box);
    }

    addBox(name_) {
        let _box = createDiv();
        _box.id(name_);
        _box.style('display', 'flex');
        _box.style('grid-column', '1 / span 2');

        this.footer.child(_box);
    }

    addBoxInput(box_, name_, placeholder_='', label_='') {
        let _container = select('#' + box_);
        let _box = createDiv();
        _box.style('display', 'flex');
        _container.child(_box);

        if (label_) _box.child(createSpan(label_));

        let _input = createInput().id(name_);
        _input.style('margin-left', '2px');
        _input.style('width', '50%');
        if (placeholder_) _input.elt.placeholder = placeholder_;
        _box.child(_input);

        this.footer.child(_container);
    }

    addBoxModifiers(box_, cb_=null) {
        this.callback = cb_;

        let _container = select('#' + box_);
        let _box = createDiv();
        _box.style('display', 'flex');
        _box.child(IconBar.createIcon(this.name + '_S', icons['S'], this.class, (event) => {
            this.input = {...this.data};
            for (let _idx in this.input) {
                this.input[_idx] = this.get(_idx);
                if (!this.input[_idx]) this.input[_idx] = this.data[_idx];
            }
            (this.callback) ? this.callback(event, { old: this.data, new: this.input }) : null 
        }));
        _box.child(IconBar.createIcon(this.name + '_X', icons['X'], this.class, () => {
            console.log('close 2');
            (this._callbackClose) ? this._callbackClose() : null
        }));

        _container.child(_box);
        this.footer.child(_container);
    }

    addDropDown(name_, values_) {
        let _select = createSelect().id(name_);
        _select.elt.size = 1;
        _select.style('margin-left', '2px');
        for (let _idx in values_) {
            let _item = values_[_idx];
            if (typeof(_item) == 'string') {
                _select.option(_item);
            } else {
                _select.option(_item[0], _item[1]);
            }
        }

        this.footer.child(_select);
    }

}