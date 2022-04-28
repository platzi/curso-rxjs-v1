import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const onMouseMove$ = fromEvent(document, "mousemove");
const onMouseDown$ = fromEvent(document, "mousedown");

const sourceCompleted$ = onMouseMove$.pipe(takeUntil(onMouseDown$));
sourceCompleted$.subscribe(console.log);
