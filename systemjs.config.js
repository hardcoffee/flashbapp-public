(function(global) {

  /**
   * map tells the System loader where to look for things.
   * only load things from node modules since other libs
   * are already loaded from script references in index's head.
   */
  var map = {
    'app': 'app',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs': 'node_modules/rxjs',
    '@angular': 'node_modules/@angular',
    '@angular2-material': 'node_modules/@angular2-material',
    'firebase': 'node_modules/firebase/lib/firebase-web.js',
    'angularfire2': 'node_modules/angularfire2'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { main: 'main.js', format: 'register', defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'angularfire2': {
      defaultExtension: 'js',
      main: 'angularfire2.js'
    }
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
  ];

  // add package entries for angular packages in the form '@angular/http': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var materialPackageNames = [
    "@angular2-material/core",
    "@angular2-material/toolbar",
    "@angular2-material/icon",
    "@angular2-material/button",
    "@angular2-material/sidenav",
    "@angular2-material/list",
    "@angular2-material/card",
    "@angular2-material/input",
    "@angular2-material/radio",
    "@angular2-material/checkbox"
  ];

  // add package entries for matarial packages in the form
  // '@angular2-material/input': { main: 'input.js', defaultExtension: 'js', format: 'cjs' }
  materialPackageNames.forEach(function(pkgName) {
    var startName = pkgName.indexOf('/') + 1;
    packages[pkgName] = { main: pkgName.substr(startName)+'.js', defaultExtension: 'js', format: 'cjs' };
  });

  var config = {
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);
