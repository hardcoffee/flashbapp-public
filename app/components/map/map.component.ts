import {Component, OnInit, ElementRef, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'map-app',
  templateUrl: 'app/components/map/map.component.html',
  styleUrls: ['app/components/map/map.component.css']
})

export class MapComponent implements OnInit, OnChanges {
  @Input('disable-picker') disablePicker: boolean;

  /**
   * Center map. Required.
   */
  center: google.maps.LatLng;

  /**
   * The initial map zoom level. Required.
   */
  zoom: number;

  /**
   * The initial map mapTypeId. Defaults to ROADMAP.
   */
  mapTypeId: google.maps.MapTypeId;

  /**
   * Enables/disables street view.
   */
  streetViewControl: boolean;

  /**
   * Enables/disables map markers.
   */
  mapMarker: boolean;

  protected map: google.maps.Map;

  constructor(public elementRef: ElementRef) {
    // Sets initial center map.
    this.center = new google.maps.LatLng(-38.416097, -63.616672);

    this.mapTypeId = google.maps.MapTypeId.ROADMAP;

    // Sets the initial zoom.
    this.zoom = 4;

    // Disable street view
    this.streetViewControl = false;

    // Enable map marker
    this.mapMarker = true;
  }
  
  ngOnChanges() {
    console.log(this.disablePicker);
  }

  ngOnInit() {
    
    let mapOptions = {
      center: this.center,
      mapMarker: this.mapMarker,
      mapTypeId: this.mapTypeId,
      streetViewControl: this.streetViewControl,
      zoom: <number>this.zoom
    };

    // Instances the map.
    let el: HTMLElement = this.elementRef.nativeElement.querySelector('#map');
    this.map = new google.maps.Map(el, mapOptions);

    window.addEventListener('resize', () => { this.resize(); });

    this.map.addListener('click', function(event) {
      let flash = this.createFlash(event.latLng, 'Here i had a flashback!');

      let contentValue = 'Id: '+ flash.get('id');
      let infowindow = this.createInfowindow(contentValue);

      flash.addListener('click', function() {
        infowindow.open(flash.get('map'), flash);
      });

      // Here we should open the form to load the data
    }.bind(this));

    /**
     * Create the search box and link it to the UI element.
     */
    let input: HTMLInputElement = this.elementRef.nativeElement.querySelector('#pac-input');
    let searchBox = new google.maps.places.SearchBox(input);
    this.map.controls[ google.maps.ControlPosition.TOP_LEFT ].push(input);

    // Bias the SearchBox results towards current map's viewport.
    searchBox.addListener('bounds_changed', function() {
      let flashMarker = this.createFlash(searchBox.getBounds().getCenter(), 'Search flashback');
      this.map.fitBounds(searchBox.getBounds());

      let infowindow = this.createInfowindow('You can drag me! Make sure of the place using Satellite view!');
      infowindow.open(flashMarker.get('map'), flashMarker);

    }.bind(this));

    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
      let places = searchBox.getPlaces();

      if (!places.length) {
        return;
      }

      // For each place, get the icon, name and location.
      let bounds = new google.maps.LatLngBounds();

      places.forEach(function(place) {
        let icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });

      this.setBounds(bounds);
    });
  }

  private createInfowindow(contentValue: string) {
    let infowindow = new google.maps.InfoWindow({
      content: contentValue
    });

    return infowindow;
  }

  private createFlash(position: google.maps.LatLng, title: string) {
    let flash = new google.maps.Marker({
      map: this.map,
      draggable: true,
      position: position,
      title: title,
      visible: true
    });

    flash.setValues({
      id: Math.round(Math.random() * (999 - 100) + 100) // 100<->999
   });

    return flash;
  }

  /**
   * Resizes the map, updating its center.
   */
  private resize() {
    // Saves the center.
    let latLng: google.maps.LatLng = this.map.getCenter();

    // Triggers resize event.
    google.maps.event.trigger(this.map, 'resize');

    // Restores the center.
    this.map.setCenter(latLng);
  }

}
