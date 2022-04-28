import { fromEvent, interval, from } from 'rxjs';
import { mergeWith, map, mergeAll, mergeMap } from 'rxjs/operators';

// const onClick$ = fromEvent(document, "click").pipe(map(event => event.type));
// const onMouseMove$ = fromEvent(document, "mousemove").pipe(map(event => event.type));

// const eventDocument$ = onMouseMove$.pipe(
//     mergeWith(onClick$)
// );

// const onClick$ = fromEvent(document, "click");
// const ordenSuperior$ = onClick$.pipe(map(() => interval(1000)));
// const primerOrden$ = ordenSuperior$.pipe(mergeAll());

// primerOrden$.subscribe(console.log);

const letters$ = from(["A", "B", "C"]);
const result$ = letters$.pipe(
    mergeMap(letter => interval(1000).pipe(
        map(
            second => letter + second
        )
    ))
);

result$.subscribe(console.log);
