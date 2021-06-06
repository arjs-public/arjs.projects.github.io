class ModalBox extends Object {

    constructor(name_, title_='Modal', cb_) {
        super();
        this._name = name_;
        this._title = title_;
        this.callback = cb_;
        
        this.box = createDiv();
        this.box.id('mBox');
        this.box.class('modal');

        this.content = createDiv().parent(this.box);
        this.content.class('modal-content');

        this.header = createDiv().parent(this.content);
        this.header.class('modal-header');

        this.close = createSpan('&times;').parent(this.header);
        this.close.class('close');
        this.close.mouseClicked((event) => {
            this.hide();
            if (this.callback) this.callback(this._name, 'close');
        });

        this.titleText = createElement('h4', this._title).parent(this.header);

        this.body = createDiv('<p>Body</p>').parent(this.content);
        this.body.class('modal-body');

        this.footer = createDiv('<h3>Modal Footer</h3>').parent(this.content);
        this.footer.class('modal-footer');

        window.onclick = (function(event) {
            if (event.target == this.box.elt) {
                this.hide();
                if (this.callback) this.callback(this._name, 'close');
            }
        }).bind(this);

    }

    set parent(value) {
        if ('box' in value) {
            this._parent = value.box;
            this.box.parent(value.box);
        } else {
            this._parent = value;
            this.box.parent(value);    
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

    set elements(value) {
        this._body = value;
        if (value) {
            this.body.child().forEach(_child => {
                _child.remove();
            });
            this.body.child(value);
        }
    }

    get elements() {
        return this._body;
    }

    set title(value) {
        this._title = value;
        this.titleText.elt.innerText = value;
    }

    get title() {
        return this._title;
    }

    set buttons(value) {
        this._buttons = value;
        if (value) {
            this.footer.child().forEach(_child => {
                _child.remove();
            });
            this.footer.child(value);
        }
    }

    get buttons() {
        return this._buttons;
    }

    show() {
        this.box.style('display', 'block');
    }

    hide() {
        this.box.style('display', 'none');
    }

}