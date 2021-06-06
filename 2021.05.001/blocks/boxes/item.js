class ItemBox extends Box {

    constructor(name_, title_='Items', visible_=true) {
        super(name_, title_, visible_);
    }

    add(name_, item_, enabled_=true, cb_=null) {
        super.add(item_);
        if (name_ in this.elements) {
            this.elements[name_].parent = this;
            this.elements[name_].enabled = enabled_;
            if (cb_) this.elements[name_].callback = cb_;
        }
        return this.elements[name_];
    }

}