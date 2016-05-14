import {Component, OnInit, ElementRef} from '@angular/core';

@Component({
  selector: 'map-app',
  templateUrl: 'app/components/map/map.component.html',
  styleUrls: ['app/components/map/map.component.css']
})

export class MapComponent implements OnInit {
  
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

      let infowindow = new google.maps.InfoWindow({
        content: 'Id: '+ flash.get('id')
      });

      flash.addListener('click', function() {
        infowindow.open(flash.get('map'), flash);
      });

      // Here we should open the form to load the data
    }.bind(this));
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
