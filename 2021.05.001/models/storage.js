// p5 graphics
let graphics = {};

// Variable and function registry
let registry = {};

// Flag for stopping the draw loop without stopping the loop
let doDraw = false;

// Settings Storage
let settings = defaultSettings;

// Click count and position
let clicks = 0;
let clickPos = null;

// Move position
let movePos = null;

// Global canvas
let canvas = null;

// Global background image
let fieldImg = null;

// ??
let dataUnits = null;

// ??
let response = null;

// Global Units name and id storage for units listbox
let dataUnitsLB = [];

// Global Units name and id storage for database
let dataUnitsMap = {};

// units cache
let unitsCache = {};
