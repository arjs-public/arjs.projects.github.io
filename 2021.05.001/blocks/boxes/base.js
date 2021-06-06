class Box extends Object {

    constructor(name_, title_='Box', visible_=true) {
        super();
        this.name = name_;
        this.title = title_;
        this.elements = {};

        this.setup();

        this.show = visible_;
        this.parent = null;
        this.group = null;
        this.callback = null;
    } 

    set parent(value) {
        if (value && ('box' in value)) {
            this._parent = value.box;
            this.box.parent(value.box);
        } else {
            this._parent = value;
            if (value) this.box.parent(value);    
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
            this.box.show();
        } else {
            this.box.hide();
        }
    }

    get visible() {
        return (this.box.elt.style.display != 'none');
    }

    get(value) {
        return (value in this.elements) ? this.elements[value] : null;
    }

    setup() {
        //console.log('box base', this.title);
        this.box = createDiv();
        this.box.id('box' + this.name);
        this.box.style('float', 'none');
        this.box.style('width', '100%');
        this.box.style('font-family', 'monospace');
        this.box.style('font-size', 'large');
        this.box.style('grid-column', '1 / 12')

        this.header = createElement('h4', this.title);
        this.header.parent(this.box);
        if (this.header) {
            this.header.parent(this.box);
            this.header.style('margin', '3px 10px');
            this.header.show();
        }
    }

    toString() {
        return this.name;
    }

    add(element_) {
        //console.log('Box Add', element_);
        if (element_ in this.elements) return;
        this.elements[element_.name] = element_;
        element_.parent = ('content' in this) ? this.content : this.box;
        //console.log('Parent', element_.parent);
        if ('group' in element_) element_.group = 'box' + this.name;
        //console.log('Group', element_.group);
        //console.log('Name', element_.name);

        return element_;
    }

    remove(element_) {
        if (!element_ in this.elements) return;
        delete this.elements[element_.name];
    }

}