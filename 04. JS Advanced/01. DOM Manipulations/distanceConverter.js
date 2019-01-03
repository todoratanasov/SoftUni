function evventListeners() {
  document.getElementById('convert').addEventListener('click', (e) => {
    const units = ['km', 'm', 'cm', 'mm', 'mi', 'yrd', 'ft', 'in'];

    let inUnitVal = +document.getElementById('inputDistance').value;

    let inUnitIndex = document.getElementById('inputUnits').selectedIndex;
    let outUnitIndex = document.getElementById('outputUnits').selectedIndex;

    let inputUnit = units[inUnitIndex];
    let outputUnit = units[outUnitIndex];

    let inpUnit = toMeters(inUnitVal, inputUnit);
    let outUnitVal = fromMeters(inpUnit, outputUnit);

    document.getElementById('outputDistance').value = outUnitVal;

    function toMeters(val, unit) {
      switch (unit) {
        case 'km':
          return val * 1000;
        case 'm':
          return val;
        case 'cm':
          return val * 0.01;
        case 'mm':
          return val * 0.001;
        case 'mi':
          return val * 1609.34;
        case 'yrd':
          return val * 0.9144;
        case 'ft':
          return val * 0.3048;
        case 'in':
          return val * 0.0254;
      }
    }

    function fromMeters(val, unit) {
      switch (unit) {
        case 'km':
          return val / 1000;
        case 'm':
          return val;
        case 'cm':
          return val / 0.01;
        case 'mm':
          return val / 0.001;
        case 'mi':
          return val / 1609.34;
        case 'yrd':
          return val / 0.9144;
        case 'ft':
          return val / 0.3048;
        case 'in':
          return val / 0.0254;
      }
    }
  });
}