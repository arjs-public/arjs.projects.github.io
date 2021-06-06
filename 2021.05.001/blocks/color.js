class Color extends Block {

    constructor(name_, title_='Color', value_='White', visible_=true, cb_=null) {
        super(name_, visible_, title_);
        this.callback = cb_;

        this.setup();

        let _color = value_;
        if (!_color.startsWith('#')) {
            let _idx = ncolors.indexOf(value_);
            if (_idx > -1) _color = '#' + hcolors[_idx];
        }
        this.picker.value(_color);
    }

    setup() {
        this.block = createDiv();
        this.block.style('display', 'grid');
        this.block.style('grid-template-columns', '40% 60%');
        this.block.style('grid-template-rows', '30px');

        this.label = createElement('label', this.title);
        this.label.style('font-size', '85%');
        this.label.style('padding', '0px 10px').style('margin-top', '8px');
        this.label.parent(this.block);

        this.picker = createColorPicker('#ed225d');
        this.picker.id(this.name_);
        this.picker.style('padding', '1px 3px').style('margin', '3px 10px');
        this.picker.parent(this.block);
        this.picker.changed((event_) => {
            //console.log('Test', event_, this.name, this.picker.value(), this.group);
            if (this.callback) this.callback(event_, this.group, this.name, this.picker.value());
        });
    }

}