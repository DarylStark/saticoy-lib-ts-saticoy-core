// import { ChangeEvent } from 'react'
import EventBus, { EventHandlerCallback } from '../eventbus/eventbus';
class Observable<T> {
    private event_bus: EventBus;
    private value: T;

    constructor(value: T) {
        this.event_bus = new EventBus();
        this.value = value;
    }

    onChange(callback: EventHandlerCallback) {
        this.event_bus.on('change', callback);
    }

    onSet(callback: EventHandlerCallback) {
        this.event_bus.on('set', callback);
    }

    set(value: T) {
        const previous_value = this.value;
        this.value = value;
        this.event_bus.raise('set', this.value);
        if (previous_value !== this.value)
            this.event_bus.raise('change', this.value);
    }

    get(): T {
        return this.value;
    }
}

export default Observable;
