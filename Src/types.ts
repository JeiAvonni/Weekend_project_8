type category = 'weapons'| 'other'|'health' // union type |

// Generic type
interface Managing<T> {
    addTask(param: T): void
    removeTask(param:T): void
}

export {
    category,
    Managing
}