class ListBox extends Object {

    constructor(name_, size_, values_=[], visible=true) {
        super();
        this.name = name_;
        this.size = size_;
        this.iconBar = null;
        this.modifyBar = null;
        this.callback = null;

        this.box = createDiv();
        this.box.style('float', 'left');
        this.box.style('width', '100%');
        this.box.style('font-family', 'monospace');
        this.box.style('font-size', 'large');
        if (!visible) this.box.hide();

        if (this.box) {
            this.header = createDiv();
            this.header.parent(this.box);

            if (this.header) {
                this.title = createElement('h4', this.name);
                this.title.parent(this.header);
                this.title.style('margin-top', '1px');
                this.title.style('margin-bottom', '1px');
                this.title.style('margin-left', '5px');
                this.title.style('float', 'left');
            }

            this.select = createSelect();
            this.select.parent(this.box);
            this.select.elt.name = this.name;
            this.select.elt.size = this.size;
            this.select.elt.style.width = '99%';
            this.select.elt.style.marginLeft = '3px';
            this.select.elt.style.paddingLeft = '3px';
            this.select.elt.style.fontFamily = 'monospace';
            this.select.elt.style.fontSize = 'medium';
            this.set(values_, false);
            this.select.mouseClicked((event) => {
                let _index = this.select.selected();
                if (this.iconBar) this.iconBar.showByType('item');
                if (this.modifyBar) this.footer.hide();
                if (this.callback) this.callback(this.name, _index, event)
            });
            this.select.changed((event) => {
                let _index = this.select.selected();
                if (this.iconBar) this.iconBar.showByType('item');
                if (this.modifyBar) this.footer.hide();
                if (this.callback) this.callback(this.name, _index, event)
            });

            this.footer = createDiv();
            this.footer.parent(this.box);
            this.footer.style('margin-top', '1px');
            this.footer.style('margin-bottom', '1px');
            this.footer.style('margin-left', '0px');
            this.footer.style('float', 'left');
            this.footer.style('width', '100%');
            this.footer.hide();
        }
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

    set visible(value) {
        if (value) {
            this.box.show();
        } else {
            this.box.hide();
        }
    }

    get visible() {
        return (this.box.elt.style.display != 'none');
    }

    set showIcons(value) {
        if (value) {
            this.iconBar.showByType('item');
        } else {
            this.iconBar.hideByType('item');
        }
    }

    set iconBar(value) {
        this._iconBar = value;
        if (value != null) this._iconBar.bar.parent(this.header);
    }

    get iconBar() {
        return this._iconBar;
    }

    set showFooter(value) {
        if (value) {
            this.footer.show();
        } else {
            this.footer.hide();
        }
    }

    set modifyBar(value) {
        this._modifyBar = value;
        if (value != null) {
            this._modifyBar.bar.parent(this.footer);
            this._modifyBar.closeCallback = () => this.footer.hide();
        }
    }

    get modifyBar() {
        return this._modifyBar;
    }

    get selected() {
        return this.select.elt.selectedIndex;
    }

    get text() {
        return this.select.elt[this.select.elt.selectedIndex].innerText;
    }
    
    setup() {
        // var tmp_ = createDiv('').style('padding', '3px').style('float', 'right').parent(box_)
        // tmp_.style('width', '100%')
        // this.textx1 = UI.inputCreate(this, tmp_, null, false, 'left', '14%')
        // this.texty1 = UI.inputCreate(this, tmp_, null, false, 'left', '14%')
        // this.textx2 = UI.inputCreate(this, tmp_, null, false, 'left', '14%')
        // this.texty2 = UI.inputCreate(this, tmp_, null, false, 'left', '14%')
        // this.buttonCancel = UI.buttonCreate(this, tmp_, ' x ', this.elementCancel, false, 'right')
        // this.buttonOk = UI.buttonCreate(this, tmp_, ' √ ', this.elementOk, false, 'right')
    }

    clear() {
        this.select.elt.selectedIndex = -1;
        if (this.iconBar) this.iconBar.hideByType('item');
        if (this.modifyBar) this.footer.hide();
    }

    drain() {
        while (this.select.elt.length > 0) {
            this.select.elt.remove(0);
        }
        this.select.elt.selectedIndex = -1;
        if (this.iconBar) this.iconBar.hideByType('item');
        if (this.modifyBar) this.footer.hide();
    }

    set(values, clear=true) {
        if (clear) {
            while (this.select.elt.length > 0) {
                this.select.elt.remove(0);
            }
        }
        for (let _idx in values) {
            let _item = values[_idx];
            this.select.option(_item[0], _item[1]);
        }
    }

    get() {
        return (this.select.elt.selectedIndex > -1) ? this.select.elt[this.select.elt.selectedIndex].innerText : null;
    }

    append(index, value) {
        console.log(value, index);
        this.select.option(value, index);
    }

    replace(old_, new_) {
        this.select.option(old_, new_);
    }

    remove(option_) {
        this.select.option(option_, false);
    }

}