import { describe, it, expect } from 'vitest'
import { updateHabitToggle } from './habitLogic'

describe('updateHabitToggle', () => {
    it("marks habit as done and increase streak when toggled from not-done", () => {
        const habits = [
            { id : 1, name : "Morning run", streak : 1, isDoneToday : false }
        ]

        const result = updateHabitToggle(habits, 1)

        expect(result[0].isDoneToday).toBe(true)
        expect(result[0].streak).toBe(2)
    })

    it("marks habit as not-done and decrease streak when toggled from done", () => {
        const habits = [
            { id : 1, name : "Morning run", streak : 5, isDoneToday : true }
        ]

        const result = updateHabitToggle(habits, 1)

        expect(result[0].isDoneToday).toBe(false)
        expect(result[0].streak).toBe(4)
    })

    it("returns habit unchanged if the id does not exist", () => {
        const habits = [
            { id : 1, name : "Morning run", streak : 1, isDoneToday : false }
        ]

        const result = updateHabitToggle(habits, 6)

        expect(result[0].isDoneToday).toBe(false)
        expect(result[0].streak).toBe(1)

    })
})