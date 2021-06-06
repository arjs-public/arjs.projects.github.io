class ContainerBox extends Box {

    constructor(name_, title_='Container', sc_=1, ec_=4, sr_=1, er_=1, visible_=true) {
        super(name_, title_, visible_);

        this.box.style('grid-column', `${sc_} / ${ec_}`)
        this.box.style('grid-row', `${sr_} / ${er_}`)

        if (this.header) {
            this.kind = ContainerBox.kindDefault;
        }

        this.content = createDiv();
        this.content.parent(this.box);

        // this.footer = createDiv();
        // this.footer.parent(this.box);
        // if (this.footer) {
        //     this.footer.style('margin-top', '1px');
        //     this.footer.style('margin-bottom', '1px');
        //     this.footer.style('margin-left', '0px');
        //     this.footer.style('padding-left', '10px');
        //     this.footer.style('width', '100%');
        //     this.footer.hide();
        // }
    }
    
    set kind(kind_) {
        this._kind = kind_;
        switch (this._kind) {
            case ContainerBox.kindLight:
                this.header.style('margin', '3px 10px');
                this.header.style('padding', '');
                this.header.style('background', '');
                break;
            default:
                this.header.style('margin-top', '1px');
                this.header.style('margin-bottom', '1px');
                this.header.style('margin-left', '5px');
                this.header.style('padding', '5px 10px');
                this.header.style('background', 'lightgrey');
                break;
        }
    }

    get kind() {
        return this._kind;
    }
}

ContainerBox.kindDefault = 'default';
ContainerBox.kindLight = 'light';
