class Switch extends Block {

    constructor(name_, title_='Switch', checked_=true, visible_=true, cb_=null) {
        super(name_, visible_, title_);
        this.callback = cb_;

        this.setup();

        this.checked = checked_;
    }

    setup() {
        this.block = createDiv();
        this.block.style('display', 'grid');
        this.block.style('grid-template-columns', '50% 50%');
        this.block.style('grid-template-rows', '30px');

        this.label = createElement('label', this.title);
        this.label.class('el-switch el-switch-sm');
        this.label.style('padding', '0px 10px').style('margin-bottom', '3px');
        this.label.parent(this.block);

        this.outer = createElement('label');
        this.outer.class('el-switch el-switch-sm');
        this.outer.style('padding', '0px 10px').style('margin-bottom', '3px');
        this.outer.parent(this.block);

        this.check = createElement('input');
        this.check.elt.type = 'checkbox';
        this.check.changed((event_) => {
            this.checked = event_.srcElement.checked;
            if (this.callback) this.callback(event_, this.group, this.name, this.checked);
        });

        this.switch = createElement('label');
        this.switch.class('el-switch el-switch-sm');
        this.switch.style('padding-left', '3px').style('margin-bottom', '3px');
        this.switch.parent(this.outer);
        this.switch.child(this.check);
        this.switch.child(createSpan().class('el-switch-style'));
    }

    set checked(value) {
        if (value) {
            this.check.elt.value = 'on';
            this.check.elt.setAttribute('checked', '');
        } else {
            this.check.elt.value = 'off';
            this.check.elt.removeAttribute('checked');
        }
    }

    get checked() {
        return this.check.elt.value == 'on';
    }

}