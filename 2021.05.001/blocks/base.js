class Block extends Object {

    constructor(name_, visible_=true, title_='Block') {
        super();
        this.name = name_;
        this.title = title_;
        this.show = visible_;
        this.parent = null;
        this.callback = null;
        this.group = null;
    } 

    set parent(value) {
        if (value && ('box' in value)) {
            this._parent = value.box;
            this.block.parent(value.box);
        } else {
            this._parent = value;
            if (value) this.block.parent(value);    
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

    set show(value) {
        if (value) {
            if ('block' in this) this.block.show();
        } else {
            if ('block' in this) this.block.hide();
        }
    }

    get visible() {
        return (this.block.elt.style.display != 'none');
    }

    set enabled(value) {
        if (!value) {
            if ('block' in this) this.block.elt.setAttribute('disabled', '');
        } else {
            if ('block' in this) this.block.elt.removeAttribute('disabled');
        }
    }

    get enabled() {
        return this.block.elt.disabled;
    }

    set group(value) {
        this._group = value;
    }

    get group() {
        return this._group;
    }

    toString() {
        return this.name;
    }

}