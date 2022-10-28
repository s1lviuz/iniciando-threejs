import * as React from 'react'
import * as THREE from 'three'
import * as Fiber from '@react-three/fiber'

import Entity from './Entity'

export default class Player extends Entity {
    location: THREE.Vector3;
    fillColor: string;


    constructor() {
        super();
        this.location = new THREE.Vector3(0,0,0);
        this.fillColor = 'blue';
      }
    
      display() {
        // noStroke();
        // fill(this.fillColor);
        // ellipse(this.location.x, this.location.y, this.dim, this.dim);
      }

      update() {
        super.update();
        this.location.add(this.velocity);
      }
}