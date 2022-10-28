import * as React from 'react'
import * as THREE from 'three'
import * as Fiber from '@react-three/fiber'

import Entity from './Entity'
import Player from './Player'

export default class Enemy extends Entity {
    fillColor: string;
    visionRange: number;
    hvisionRange: number;
    bodySpace: number;
    location: THREE.Vector3;
    pursuit: boolean;
  
    constructor() {
      super();
      this.fillColor = 'orange';
      this.visionRange = 100;
      this.hvisionRange = this.visionRange/2;
      this.bodySpace = this.visionRange+5;
      this.location = new THREE.Vector3(0,0,0);
    //   this.location = createVector(random(this.bodySpace, width - this.bodySpace),random(this.bodySpace, (height - 150) - this.bodySpace));
      this.pursuit = false;
    }
  
    update() {
      super.update();
      if (!this.collide) {
        if (this.pursuit) {
          return
        } else {
          this.acceleration = new THREE.Vector3(THREE.MathUtils.randFloatSpread(0.2),0,THREE.MathUtils.randFloatSpread(0.2))
        }
      } 
    }
  
    checkTarget(target: Player) {
      let targetDistance = target.location.distanceTo(this.location);
  
      if (targetDistance - target.hdim <= this.hvisionRange) {
        this.pursuit = true;
  
        let direction = new THREE.Vector3().subVectors(target.location, this.location);
        direction.normalize();
        direction.multiplyScalar(0.1);
        
        this.acceleration = direction;
      } else {
        this.pursuit = false;
      }
    }
  
    checkCatch(target: Player) {
      let targetDistance = target.location.distanceTo(this.location);
  
      if (targetDistance - target.hdim <= this.hdim) {
        // noLoop();
        // fill('black');
        // textSize(24);
        // textAlign(CENTER);
        // text('Você foi pego!', width/2, height/4);
      }
    }
  
    checkCollision() {
      if (this.location.x + this.hdim >= width - this.velocity.x || this.location.x - this.hdim <= 0) {
        this.velocity.x *= -1;
        this.acceleration.x *= -1;
        this.collide = true;
        return
      } 
      if (this.location.y + this.hdim >= (height - 150) - this.velocity.y || this.location.y - this.hdim <= 0) {
        this.velocity.y *= -1;
        this.acceleration.y *= -1;
        this.collide = true;
        return
      }
      this.collide = false;
    }
  
    display() {
      // stroke(0);
      // fill(255,255,255,0);
      // ellipse(this.location.x, this.location.y, this.visionRange, this.visionRange);
    //   noStroke();
    //   fill(this.fillColor);
    //   ellipse(this.location.x, this.location.y, this.dim, this.dim);
    }
  }