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
  
  protected map: google.maps.Map;
  
  constructor(public elementRef: ElementRef) {
    // Sets initial center map.
    this.center = new google.maps.LatLng(-38.416097, -63.616672);

    this.mapTypeId = google.maps.MapTypeId.ROADMAP;

    // Sets the initial zoom.
    this.zoom = 4;    
  }
  
  ngOnInit() {
    let mapOptions = {
      center: this.center,
      mapTypeId: this.mapTypeId,
      zoom: <number>this.zoom      
    };

    // Instances the map.
    var el: HTMLElement = this.elementRef.nativeElement.querySelector('#map');
    this.map = new google.maps.Map(el, mapOptions);
  }

}
