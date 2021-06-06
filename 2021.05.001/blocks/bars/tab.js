class Tab extends Object {

    constructor(name_, title_='Tab', group_='main', view_=null, checked_=false) {
        super();
        this.name = name_;
        this.title = title_;
        this.checked = checked_;
        let _checked = (checked_) ? ' active' : '';

        this.tab = createButton(title_);
        this.tab.class("tablinks " + group_ + _checked);

        this.tabcontent = createDiv();
        this.tabcontent.id('tabContent' + this.name);
        this.tabcontent.elt.className = 'tabcontent ' + group_;
        this.tabcontent.style('border','none');

        this.view = view_;

        if ((registry) && !(name_ in registry)) registry[name_] = this;
    }

    set parent(value_) {
        this.tab.parent(value_.view);
        this.tabcontent.parent(value_.view.parent());
        this._view.view.parent(this.tabcontent);
    }

    get parent() {
        return this.tab.parent();
    }

    set view(value_) {
        this._view = value_;
        if (!value_) return;
        this._view.view.parent(this.tabcontent);
    }

    get view() {
        return this._view;
    }

    set clicked(value) {
        this.tab.mouseClicked(value);
    }

}
