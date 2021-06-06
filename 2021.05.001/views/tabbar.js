class TabBarView extends View {
    
    constructor(name_, group_='main') {
        super(name_);
        this.group = group_;
        this._tabs = {};

        this.view.style("display", "flex");
        this.view.class('tab ' + group_);
    }

    set parent(value_) {
        this._parent = value_;
        this.view.parent(value_);
    }
    
    get parent() {
        return this.parent;
    }

    get tabs() {
        return this._tabs;
    }

    get names() {
        return Object.keys(this._tabs);
    }

    get count() {
        return Object.keys(this.tabs).length;
    }
  
    add(tab_) {
        let _name = tab_.name;
        if (!(_name in this.tabs)) {
            this.tabs[_name] = tab_;
            this.tabs[_name].parent = this;
            this.tabs[_name].clicked = ((event_) => { this.open(event_, _name); });
        }
        return this.tabs[_name];
    }

    remove(name_) {
        if (name_ in this.tabs) delete this.tabs[name_];
        return this.tabs[name_];
    }

    open(event_, name_) {
        var _i;
        var _tabcontent = document.getElementsByClassName("tabcontent " + this.group);
        for (_i = 0; _i < _tabcontent.length; _i++) {
            _tabcontent[_i].style.display = "none";
        }
        document.getElementById('tabContent' + name_).style.display = "block";
        let _tablinks = document.getElementsByClassName("tablinks " + this.group);
        if (event_) {
            for (_i = 0; _i < _tablinks.length; _i++) {
                _tablinks[_i].className = _tablinks[_i].className.replace(" active", "");
            }
            event_.currentTarget.className += " active";
        } else {
            if (_tablinks.length >= 1) {
                _tablinks[0].className += " active";
            }
        }
    }      
   
}