class Text extends Block {

    constructor(name_, title_='Title', value_='text', visible_=true, cb_=null) {
        super(name_, visible_, title_);
        this.callback = cb_;

        this.setup();

        this.text.value(value_);
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

        this.text = createInput(this.title);
        this.text.id(this.name_);
        this.text.style('padding', '1px 3px').style('margin', '3px 10px');
        this.text.parent(this.block);
        this.text.input((event_) => {
            if (/[^a-zA-Z0-9_ \-]/i.test(str(event_.data))) {
                this.text.value(this.text.value().replace(event_.data, ''));
                return false;
            }
            //console.log('Test', event_, this.group, this.name, this.text.value());
            if (this.callback) this.callback(event_, this.group, this.name, this.text.value());
        });
    }

    get value() {
        return this.text.value();
    }

    set value(value_) {
        this.text.value(value_);
    }

}