class SettingsView extends View {

    constructor(name_) {
        super(name_);
    }

    setup() {
        super.setup();
        this.view.style('background', '');
        this.view.style('padding-top','5px');

        let _home = settings.home;
        let _guest = settings.guest;
        let _miscs = settings.miscs;

        let _homeBox = this.add(new ContainerBox('Home', 'Home', 1, 4));
        if (_homeBox) {
            let _homeText = _homeBox.add(new ItemBox('HomeText', 'Text'));
            _homeText.add('Endzone', new Text('Endzone', 'Endzone', _home.Endzone, true, eventDispatcher));
            _homeText.add('Teamzone', new Text('Teamzone', 'Teamzone', _home.Teamzone, true, eventDispatcher));
            _homeText.add('Tunnel', new Text('Tunnel', 'Tunnel', _home.Tunnel, true, eventDispatcher));
            _homeText.add('Logo', new Text('Logo', 'Logo', _home.Logo, true, eventDispatcher));

            let _homeColors = _homeBox.add(new ColorBox('HomeColors', 'Colors'));
            _homeColors.add('First', 'First', _home.First, true, eventDispatcher);
            _homeColors.add('Second', 'Second', _home.Second, true, eventDispatcher);
            _homeColors.add('Alternate', 'Alternate', _home.Alternate, true, eventDispatcher);

            let _homeSwitches = _homeBox.add(new SwitchBox('HomeSwitches', 'Switches'))
            _homeSwitches.add('DrawLogo', 'Draw Logo', _home.EnabledLogo, _home.DrawLogo, eventDispatcher);
            _homeSwitches.add('DrawTunnel', 'Draw Tunnel', _home.EnabledTunnel, _home.DrawTunnel, eventDispatcher);
            _homeSwitches.add('TextTunnel', 'Text Tunnel', _home.EnabledTunnel, _home.TextTunnel, eventDispatcher);
            _homeSwitches.add('DrawTeamzone', 'Draw Teamzone', _home.EnabledTeamzone, _home.DrawTeamzone, eventDispatcher);
            _homeSwitches.add('FillTeamzone', 'Fill Teamzone', _home.EnabledTeamzone, _home.FillTeamzone, eventDispatcher);
            _homeSwitches.add('TextTeamzone', 'Text Teamzone', _home.EnabledTeamzone, _home.TextTeamzone, eventDispatcher);
            _homeSwitches.add('DrawEndzone', 'Draw Endzone', _home.EnabledEndzone, _home.DrawEndzone, eventDispatcher);
            _homeSwitches.add('FillEndzone', 'Fill Endzone', _home.EnabledEndzone, _home.FillEndzone, eventDispatcher);
            _homeSwitches.add('TextEndzone', 'Text Endzone', _home.EnabledEndzone, _home.TextEndzone, eventDispatcher);
            _homeSwitches.add('DrawGoal', 'Draw Gaolpost', _home.EnabledGoal, _home.DrawGoal, eventDispatcher);
        }

        let _guestBox = this.add(new ContainerBox('Guest', 'Guest', 4, 7));
        if (_guestBox) {
            let _guestText = _guestBox.add(new ItemBox('GuestText', 'Text'))
            _guestText.add('Endzone', new Text('Endzone', 'Endzone', _guest.Endzone, true, eventDispatcher));
            _guestText.add('Teamzone', new Text('Teamzone', 'Teamzone', _guest.Teamzone, true, eventDispatcher));
            _guestText.add('Tunnel', new Text('Tunnel', 'Tunnel', _guest.Tunnel, true, eventDispatcher));

            let _guestColors = _guestBox.add(new ColorBox('GuestColors', 'Colors'));
            _guestColors.add('First', 'First', _guest.First, true, eventDispatcher);
            _guestColors.add('Second', 'Second', _guest.Second, true, eventDispatcher);
            _guestColors.add('Alternate', 'Alternate', _guest.Alternate, true, eventDispatcher);

            let _guesetSwitches = _guestBox.add(new SwitchBox('GuestSwitches', 'Switches'))
            _guesetSwitches.add('DrawTunnel', 'Draw Tunnel', _guest.EnabledTunnel, _guest.DrawTunnel, eventDispatcher);
            _guesetSwitches.add('TextTunnel', 'Text Tunnel', _guest.EnabledTunnel, _guest.TextTunnel, eventDispatcher);
            _guesetSwitches.add('DrawTeamzone', 'Draw Teamzone', _guest.EnabledTeamzone, _guest.DrawTeamzone, eventDispatcher);
            _guesetSwitches.add('FillTeamzone', 'Fill Teamzone', _guest.EnabledTeamzone, _guest.FillTeamzone, eventDispatcher);
            _guesetSwitches.add('TextTeamzone', 'Text Teamzone', _guest.EnabledTeamzone, _guest.TextTeamzone, eventDispatcher);
            _guesetSwitches.add('DrawEndzone', 'Draw Endzone', _guest.EnabledEndzone, _guest.DrawEndzone, eventDispatcher);
            _guesetSwitches.add('FillEndzone', 'Fill Endzone', _guest.EnabledEndzone, _guest.FillEndzone, eventDispatcher);
            _guesetSwitches.add('TextEndzone', 'Text Endzone', _guest.EnabledEndzone, _guest.TextEndzone, eventDispatcher);
            _guesetSwitches.add('DrawGoal', 'Draw Gaolpost', _guest.EnabledGoal, _guest.DrawGoal, eventDispatcher);
        }

        let _commonBox = this.add(new ContainerBox('Common', 'Common', 7, 10));
        if (_commonBox) {
            let _commonColors = _commonBox.add(new ColorBox('CommonColors', 'Colors'))
            _commonColors.add('Background', 'Background', _miscs.Background, true, eventDispatcher);
            _commonColors.add('Grass', 'Grass', _miscs.Grass, true, eventDispatcher);
            _commonColors.add('Line', 'Line', _miscs.Line, true, eventDispatcher);
            _commonColors.add('Goal', 'Goal', _miscs.Goal, true, eventDispatcher);

            let _commonSwitches = _commonBox.add(new SwitchBox('CommonSwitches', 'Switches'))
            _commonSwitches.add('DrawBackground', 'Draw Background', _miscs.EnabledBackground, _miscs.DrawBackground, eventDispatcher);
            _commonSwitches.add('DrawField', 'Draw Field', _miscs.EnabledField, _miscs.DrawField, eventDispatcher);
            _commonSwitches.add('DrawEndzones', 'Draw Endzones', _miscs.EnabledEndzones, _miscs.DrawEndzones, eventDispatcher);
            _commonSwitches.add('DrawTeamzones', 'Draw Teamzones', _miscs.EnabledTeamzones, _miscs.DrawTeamzones, eventDispatcher);
            _commonSwitches.add('DrawInnerHash', 'Draw Inner Hash', _miscs.EnabledInnerHash, _miscs.DrawInnerHash, eventDispatcher);
            _commonSwitches.add('DrawOuterHash', 'Draw Outer Hash', _miscs.EnabledOuterHash, _miscs.DrawOuterHash, eventDispatcher);
            _commonSwitches.add('DrawTenYards', 'Draw 10 Yard Lines', _miscs.EnabledTenYards, _miscs.DrawTenYards, eventDispatcher);
            _commonSwitches.add('DrawFiveYards', 'Draw 5 Yard Lines', _miscs.EnabledFiveYards, _miscs.DrawFiveYards, eventDispatcher);
            _commonSwitches.add('DrawGoals', 'Draw Goalposts', _miscs.EnabledGoals, _miscs.DrawGoals, eventDispatcher);
            _commonSwitches.add('DrawMarkers', 'Draw Markers', _miscs.EnabledMarkers, _miscs.DrawMarkers, eventDispatcher);
            _commonSwitches.add('DrawKickMarkers', 'Draw Kick Markers', _miscs.EnabledKickMarkers, _miscs.DrawKickMarkers, eventDispatcher);
            _commonSwitches.add('DrawNumbers', 'Draw Numbers', _miscs.EnabledNumbers, _miscs.DrawNumbers, eventDispatcher);
            _commonSwitches.add('DrawArrows', 'Draw Arrows', _miscs.EnabledArrows, _miscs.DrawArrows, eventDispatcher);
            _commonSwitches.add('DrawTunnels', 'Draw Tunnels', _miscs.EnabledTunnels, _miscs.DrawTunnels, eventDispatcher);
        }

        let _exportBox = this.add(new ContainerBox('Export', 'Export', 10, 12));
        if (_exportBox) {
            let _exportText = _exportBox.add(new ItemBox('ExportText', 'Filenames'))
            _exportText.add('Fieldname', new Text('FieldName', 'Field', 'footballfield', true, eventDispatcher));
            _exportText.add('FieldButton', new Button('FieldButton', 'Export', true, eventDispatcher));
            _exportText.add('Settingsname', new Text('SettingsName', 'Settings', 'settings', true, eventDispatcher));
            _exportText.add('SettingsButton', new Button('SettingsButton', 'Export', true, eventDispatcher));
        }

    }

}