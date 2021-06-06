class Button extends Block {

    constructor(name_, title_='Button', visible_=true, cb_=null) {
        super(name_, visible_, title_);
        this.callback = cb_;

        this.setup();
    }

    setup() {
        this.block = createDiv();
        this.block.style('display', 'grid');
        this.block.style('grid-template-columns', '45% 50%');
        this.block.style('grid-template-rows', '20px');

        this.label = createElement('label', '');
        this.label.style('font-size', '85%');
        this.label.style('padding', '0px 10px').style('margin-top', '8px');
        this.label.parent(this.block);

        this.button = createButton(this.title);
        this.button.id(this.name_);
        this.button.parent(this.block);
        this.button.mouseClicked((event_) => {
            if (this.callback) this.callback(event_, this.group, this.name, '');
        });
    }

}