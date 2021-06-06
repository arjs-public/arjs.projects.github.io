class Settings extends Object {

    constructor(name_='Default') {
        super()
        this.name = name_;
        this.home = {};
        this.guest = {};
        this.miscs = {};
    }

}

let defaultSettings = new Settings();
let defaultSettingsHome = defaultSettings.home;
defaultSettingsHome['Endzone'] = 'Home';
defaultSettingsHome['Teamzone'] = 'Home';
defaultSettingsHome['Tunnel'] = 'HT';
defaultSettingsHome['Logo'] = 'H';
defaultSettingsHome['First'] = 'Black';
defaultSettingsHome['Second'] = 'White';
defaultSettingsHome['Alternate'] = 'Gold';
defaultSettingsHome['DrawLogo'] = true;
defaultSettingsHome['EnabledLogo'] = true;
defaultSettingsHome['DrawTunnel'] = true;
defaultSettingsHome['EnabledTunnel'] = true;
defaultSettingsHome['TextTunnel'] = true;
defaultSettingsHome['DrawTeamzone'] = true;
defaultSettingsHome['EnabledTeamzone'] = true;
defaultSettingsHome['FillTeamzone'] = true;
defaultSettingsHome['TextTeamzone'] = true;
defaultSettingsHome['DrawEndzone'] = true;
defaultSettingsHome['EnabledEndzone'] = true;
defaultSettingsHome['FillEndzone'] = true;
defaultSettingsHome['TextEndzone'] = true;
defaultSettingsHome['DrawGoal'] = true;
defaultSettingsHome['EnabledGoal'] = true;

let defaultSettingsGuest = defaultSettings.guest;
defaultSettingsGuest['Endzone'] = 'Guest';
defaultSettingsGuest['Teamzone'] = 'Guest';
defaultSettingsGuest['Tunnel'] = 'GT';
defaultSettingsGuest['First'] = 'Red';
defaultSettingsGuest['Second'] = 'Black';
defaultSettingsGuest['Alternate'] = 'White';
defaultSettingsGuest['DrawTunnel'] = true;
defaultSettingsGuest['TextTunnel'] = true;
defaultSettingsGuest['EnabledTunnel'] = true;
defaultSettingsGuest['DrawTeamzone'] = true;
defaultSettingsGuest['EnabledTeamzone'] = true;
defaultSettingsGuest['FillTeamzone'] = true;
defaultSettingsGuest['TextTeamzone'] = true;
defaultSettingsGuest['DrawEndzone'] = true;
defaultSettingsGuest['EnabledEndzone'] = true;
defaultSettingsGuest['FillEndzone'] = true;
defaultSettingsGuest['TextEndzone'] = true;
defaultSettingsGuest['DrawGoal'] = true;
defaultSettingsGuest['EnabledGoal'] = true;

let defaultSettingsMiscs = defaultSettings.miscs;
defaultSettingsMiscs['Background'] = '#009900';
defaultSettingsMiscs['Grass'] = '#33CC33';
defaultSettingsMiscs['Line'] = '#fafafa';
defaultSettingsMiscs['Goal'] = 'gold';
defaultSettingsMiscs['DrawBackground'] = true;
defaultSettingsMiscs['EnabledBackground'] = true;
defaultSettingsMiscs['DrawField'] = true;
defaultSettingsMiscs['EnabledField'] = true;
defaultSettingsMiscs['DrawEndzones'] = true;
defaultSettingsMiscs['EnabledEndzones'] = true;
defaultSettingsMiscs['DrawTeamzones'] = true;
defaultSettingsMiscs['EnabledTeamzones'] = true;
defaultSettingsMiscs['DrawInnerHash'] = true;
defaultSettingsMiscs['EnabledInnerHash'] = true;
defaultSettingsMiscs['DrawOuterHash'] = true;
defaultSettingsMiscs['EnabledOuterHash'] = true;
defaultSettingsMiscs['DrawTenYards'] = true;
defaultSettingsMiscs['DrawFiveYards'] = false;
defaultSettingsMiscs['EnabledYards'] = true;
defaultSettingsMiscs['DrawGoals'] = true;
defaultSettingsMiscs['EnabledGoals'] = true;
defaultSettingsMiscs['DrawMarkers'] = true;
defaultSettingsMiscs['EnabledMarkers'] = true;
defaultSettingsMiscs['DrawKickMarkers'] = true;
defaultSettingsMiscs['EnabledKickMarkers'] = true;
defaultSettingsMiscs['DrawInnerHash'] = true;
defaultSettingsMiscs['EnabledInnerHash'] = true;
defaultSettingsMiscs['DrawNumbers'] = true;
defaultSettingsMiscs['EnabledNumbers'] = true;
defaultSettingsMiscs['DrawArrows'] = true;
defaultSettingsMiscs['EnabledArrows'] = true;
defaultSettingsMiscs['DrawTunnels'] = true;
defaultSettingsMiscs['EnabledTunnels'] = true;
