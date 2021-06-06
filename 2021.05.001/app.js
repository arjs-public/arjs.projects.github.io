function preload() {
  graphics['canvasSize'] = createVector(1260, 839);
}

function setup() {
  noCanvas();

  // Create Main Tab View in main div element
  let _tabBarView = new TabBarView(MAINTABVIEW, MAINGROUP);
  _tabBarView.parent = select(MAINDIV);

  // Add a Tab for the Units
  _tabBarView.add(new Tab('Field', 'Field', MAINGROUP, new FieldView('Field')));
  _tabBarView.open(null, 'Field');

  // Add a Tab for Settings
  _tabBarView.add(new Tab('Settings', 'Settings', MAINGROUP, new SettingsView('Settings')));

  // Add a Tab for Logging
  //_tabBarView.add(new Tab('tabLog', 'Logging', MAINGROUP));

  //console.log(registry);
  doDraw = true;
}

// Main draw loop
function draw() {
  if (!doDraw) return;
  doDraw = false;
}

function keyTyped(event) {
  //saveCanvas('footballfield', 'png');
}

function loggedChanged(event, name, value) {
  console.log(event);
  console.log(name, value);
}

function loggedPress(event) {
  console.log(event);
}

function eventDispatcher(event_, group_, name_, value_) {
  //console.log(event_.type, group_, name_, value_);
  if (event_.type == 'change') {
    if (group_.startsWith('boxCommon')) {
      if (name_ in settings.miscs) settings.miscs[name_] = value_;
    } else if (group_.startsWith('boxHome')) {
      if (name_ in settings.home) settings.home[name_] = value_;
    } else if (group_.startsWith('boxGuest')) {
      if (name_ in settings.guest) settings.guest[name_] = value_;
    }
    if (registry.Field.view.field) registry.Field.view.field.draw();  
  } else if (event_.type == 'click') {
    if (name_ == 'FieldButton') {
      let _text = registry.Settings.view.elements.Export.elements.ExportText.elements.FieldName.value;
      //console.log(_text);
      saveCanvas(_text, 'png');
    } else if (name_ == 'SettingsButton') {
      let _text = registry.Settings.view.elements.Export.elements.ExportText.elements.SettingsName.value;
      //console.log(_text);
      saveJSON(settings, _text + '.json');
    }
  }
} 