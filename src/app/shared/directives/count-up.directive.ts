import { DecimalPipe } from '@angular/common';
import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import {
  Subject,
  BehaviorSubject,
  combineLatest,
  switchMap,
  animationFrameScheduler,
  interval,
  map,
  takeWhile,
  endWith,
  distinctUntilChanged,
  takeUntil,
} from 'rxjs';

/**
 * Quadratic Ease-Out Function: f(x) = x * (2 - x)
 */
const easeOutQuad = (x: number): number => x * (2 - x);

@Directive({
  selector: '[countUp]',
})
export class CountUpDirective implements OnInit {
  private _destroyed = new Subject<void>();

  private readonly count$ = new BehaviorSubject(0);
  private readonly duration$ = new BehaviorSubject(2000);

  private readonly currentCount$ = combineLatest([
    this.count$,
    this.duration$,
  ]).pipe(
    switchMap(([count, duration]) => {
      // get the time when animation is triggered
      const startTime = animationFrameScheduler.now();

      return interval(0, animationFrameScheduler).pipe(
        // calculate elapsed time
        map(() => animationFrameScheduler.now() - startTime),
        // calculate progress
        map((elapsedTime) => elapsedTime / duration),
        // complete when progress is greater than 1
        takeWhile((progress) => progress <= 1),
        // apply quadratic ease-out
        // for faster start and slower end of counting
        map(easeOutQuad),
        // calculate current count
        map((progress) => Math.round(progress * count)),
        // make sure that last emitted value is count
        endWith(count),
        distinctUntilChanged()
      );
    })
  );

  @Input('countUp')
  set count(count: number) {
    this.count$.next(count);
  }

  @Input()
  set duration(duration: number) {
    this.duration$.next(duration);
  }

  @Input('prefix') prefix: string = '';
  already: boolean = false;

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2,
    private decimalPipe: DecimalPipe
  ) {}

  ngOnInit(): void {
    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'innerHTML',
      this.prefix + this.decimalPipe.transform(0, '1.0-0')
    );
  }

  public displayCurrentCount(): void {
    if (!this.already) {
      this.currentCount$
        .pipe(takeUntil(this._destroyed))
        .subscribe((currentCount) => {
          this.renderer.setProperty(
            this.elementRef.nativeElement,
            'innerHTML',
            this.prefix + this.decimalPipe.transform(currentCount, '1.0-0')
          );
        });
      this.already = true;
    }
  }
}
