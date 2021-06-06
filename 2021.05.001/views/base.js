class View extends Object {
    
    constructor(name_) {
        super();
        this.name = name_;
        this.elements = {};

        this.setup();
    }

    set parent(value_) {
        this.view.parent(value_);
    }
  
    get parent() {
        return this.view.parent();
    }

    get(value_) {
        return (value_ in this.elements) ? this.elements[value_] : null;
    }

    setup () {
        //console.log('view base', this.name);
        this.view = createDiv();
        this.view.id('view' + this.name);
        this.view.style('width', '100%');
        this.view.style('background', 'lightgreen');
        this.view.style('display', 'grid');
        this.view.style('grid-template-columns', 'repeat(12, 1fr)');
        this.view.style('grid-gap', '5');
    }

    redraw() {
    }

    toString() {
        return this.name;
    }

    add(element_) {
        if (element_ in this.elements) return;
        this.elements[element_.name] = element_;
        element_.parent = this.view;

        return element_;
    }

    remove(element_) {
        if (!element_ in this.elements) return;
        delete this.elements[element_.name];
    }

}