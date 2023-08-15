import { trigger, transition, query, style, animate, group } from '@angular/animations';

export const slider = trigger('routeAnimations', [
transition('* => parentLeft', slideTo('parentMid')),
transition('* => parentMid', slideTo('parenLeft')),
transition('isRight => *', slideTo('left')),
transition('isLeft => *', slideTo('right'))
]);

export function slideTo(direction: any) {
const optional = { optional: true };
return [
query(
':enter, :leave',
[
style({ position: 'absolute', top: 0, [direction]: 0, width: '100%' })
],
optional
),
query(':enter', [style({ [direction]: '-100%' })]),
group([
query(
':leave',
[animate('600ms ease', style({ [direction]: '100%' }))],
optional
),
query(
':enter',
[animate('600ms ease', style({ [direction]: '0%' }))],
optional
)
])
];
}