import * as React from 'react'
import * as THREE from 'three'
import * as Fiber from '@react-three/fiber'

export default class Entity {
    velocity: THREE.Vector3;
    acceleration: THREE.Vector3;
    topspeed: THREE.Vector3;
    dim: number;
    hdim: number;
    collide: boolean;

    constructor() {
        this.velocity = new THREE.Vector3(0,0,0);
        this.acceleration = new THREE.Vector3(0,0,0);
        this.topspeed = new THREE.Vector3(2,2,2);
        this.dim = 20;
        this.hdim = this.dim / 2;
        this.collide = false;
      }
    
      update() {
        this.velocity.add(this.acceleration);
        this.velocity.max(this.topspeed);
        // this.location.add(this.velocity);
      }
}