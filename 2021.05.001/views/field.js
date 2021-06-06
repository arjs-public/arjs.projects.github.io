class FieldView extends View {

    constructor(name_) {
        super(name_);
    }

    setup() {
        super.setup();
        this.view.style('background', '');

        this.field = new Field(this.view, 10);
        if (this.field) this.field.draw();
    }

}