import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';



interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  active: number;
  circle: Circle;
  closest: Point[];
}

class Circle {
  pos: { x: number; y: number };
  radius: number;
  active = 0;

  constructor(pos: { x: number; y: number }, radius: number) {
    this.pos = pos;
    this.radius = radius;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (!this.active) return;

    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(156,217,249,${this.active})`;
    ctx.fill();
  }
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private points: Point[] = [];
  private width = 0;
  private height = 0;
  private target = { x: 0, y: 0 };
  private animationId = 0;
  private animateHeader = true;

  ngAfterViewInit(): void {
    this.initHeader();
    this.initAnimation();
    this.addListeners();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
    window.removeEventListener('mousemove', this.mouseMove);
    window.removeEventListener('resize', this.resize);
    window.removeEventListener('scroll', this.scrollCheck);
  }

  private initHeader(): void {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.target = { x: this.width / 2, y: this.height / 2 };

    this.canvas = document.getElementById('demo-canvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.points = [];

    for (let x = 0; x < this.width; x += this.width / 20) {
      for (let y = 0; y < this.height; y += this.height / 20) {
        const px = x + Math.random() * (this.width / 20);
        const py = y + Math.random() * (this.height / 20);

        const point = {
          x: px,
          y: py,
          originX: px,
          originY: py,
          active: 0,
          closest: [] as Point[],
          circle: new Circle({ x: px, y: py }, 2 + Math.random() * 2)
        };

        this.points.push(point);
      }
    }

    this.findClosest();
  }

  private findClosest(): void {
    for (const p1 of this.points) {
      const closest: Point[] = [];

      for (const p2 of this.points) {
        if (p1 === p2) continue;

        let placed = false;
        for (let i = 0; i < 5; i++) {
          if (!placed && !closest[i]) {
            closest[i] = p2;
            placed = true;
          }
        }

        for (let i = 0; i < 5; i++) {
          if (
            !placed &&
            this.getDistance(p1, p2) < this.getDistance(p1, closest[i])
          ) {
            closest[i] = p2;
            placed = true;
          }
        }
      }

      p1.closest = closest;
    }
  }

  private addListeners(): void {
    window.addEventListener('mousemove', this.mouseMove);
    window.addEventListener('resize', this.resize);
    window.addEventListener('scroll', this.scrollCheck);
  }

  private mouseMove = (e: MouseEvent): void => {
    this.target.x = e.clientX;
    this.target.y = e.clientY;
  };

  private scrollCheck = (): void => {
    this.animateHeader = window.scrollY <= this.height;
  };

  private resize = (): void => {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  };

  private initAnimation(): void {
    this.animate();
    this.points.forEach(p => this.shiftPoint(p));
  }

  private animate = (): void => {
    if (this.animateHeader) {
      this.ctx.clearRect(0, 0, this.width, this.height);

      for (const p of this.points) {
        const dist = Math.abs(this.getDistance(this.target, p));

        if (dist < 4000) {
          p.active = 0.3;
          p.circle.active = 0.6;
        } else if (dist < 20000) {
          p.active = 0.1;
          p.circle.active = 0.3;
        } else if (dist < 40000) {
          p.active = 0.02;
          p.circle.active = 0.1;
        } else {
          p.active = 0;
          p.circle.active = 0;
        }

        this.drawLines(p);
        p.circle.draw(this.ctx);
      }
    }

    this.animationId = requestAnimationFrame(this.animate);
  };

  private shiftPoint(p: Point): void {
    const toX = p.originX - 50 + Math.random() * 100;
    const toY = p.originY - 50 + Math.random() * 100;
    const duration = 1000 + Math.random() * 1000;
    const start = performance.now();
    const fromX = p.x;
    const fromY = p.y;

    const animateShift = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      p.x = fromX + (toX - fromX) * progress;
      p.y = fromY + (toY - fromY) * progress;

      if (progress < 1) {
        requestAnimationFrame(animateShift);
      } else {
        this.shiftPoint(p);
      }
    };

    requestAnimationFrame(animateShift);
  }

  private drawLines(p: Point): void {
    if (!p.active) return;

    for (const close of p.closest) {
      this.ctx.beginPath();
      this.ctx.moveTo(p.x, p.y);
      this.ctx.lineTo(close.x, close.y);
      this.ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
      this.ctx.stroke();
    }
  }

  private getDistance(p1: { x: number; y: number }, p2: { x: number; y: number }): number {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  }
}
