import { describe, it, expect } from 'vitest'
import { updateHabitToggle, getToday } from './habitLogic'

describe('updateHabitToggle', () => {
    it("adds today to history when toggled from not-done", () => {
        const today = getToday() 
        const habits = [
            { id : 1, name : "Morning run", history : [] }
        ]

        const result = updateHabitToggle(habits, 1)

        expect(result[0].history).toContain(today)
        expect(habits[0].history).toEqual([])
    })

    it("marks habit as not-done and decrease streak when toggled from done", () => {
        const today = getToday()
        const habits = [
            { id : 1, name : "Morning run", history : [today] }
        ]

        const result = updateHabitToggle(habits, 1)

        expect(result[0].history).not.toContain(today)
        expect(result[0].history).toEqual([])
    })

    it("returns habit unchanged if the id does not exist", () => {
        const today = getToday()
        const habits = [
            { id : 1, name : "Morning run", history : [today] }
        ]

        const result = updateHabitToggle(habits, 6)

        expect(result[0].history).toBe(false)
        expect(result[0].history).toEqual("2026-10-08")

    })
})