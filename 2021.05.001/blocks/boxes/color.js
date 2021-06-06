class ColorBox extends Box {

    constructor(name_, title_='Colors', visible_=true) {
        super(name_, title_, visible_);
    }

    add(name_, title_, value_, enabled_=true, cb_=null) {
        super.add(new Color(name_, title_, value_, true, cb_));
        if (name_ in this.elements) {
            this.elements[name_].parent = this;
            this.elements[name_].enabled = enabled_;
        }
        return this.elements[name_];
    }

}