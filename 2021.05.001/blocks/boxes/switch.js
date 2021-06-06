class SwitchBox extends Box {

    constructor(name_, title_='Switches', visible_=true) {
        super(name_, title_, visible_);
    }

    add(name_, title_, enabled_=true, checked_=true, cb_=null) {
        super.add(new Switch(name_, title_));
        if (name_ in this.elements) {
            this.elements[name_].parent = this;
            this.elements[name_].checked = checked_;
            this.elements[name_].enabled = enabled_;
            if (cb_) this.elements[name_].callback = cb_;
        }
        return this.elements[name_];
    }

}