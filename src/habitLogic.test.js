import { describe, it, expect } from 'vitest'
import { updateHabitToggle, getToday, getDateDaysAgo, getStreak, isDoneToday } from './habitLogic'

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

    it("removes today from history when toggled from done", () => {
        const today = getToday()
        const habits = [
            { id : 1, name : "Morning run", history : [today] }
        ]

        const result = updateHabitToggle(habits, 1)

        expect(result[0].history).not.toContain(today)
        expect(result[0].history).toEqual([])
    })

    it("returns habit unchanged if the id doesn't exist", () => {
        const today = getToday()
        const habits = [
            { id : 1, name : "Morning run", history : [today] }
        ]

        const result = updateHabitToggle(habits, 6)

        expect(result[0]).toBe(habits[0])
        expect(result[0].history).toEqual([today])

    })
})

describe('getStreak', () => {
    it("returns 0 for an empty history", () => {
        expect(getStreak([])).toBe(0)
    })

    it("returns 2 if today and yesterday are in history", () => {
        expect(getStreak([])).toBe(2)
    })

    it("returns 2 if today is not done, but yesterday and the day before are", () => {
        expect(getStreak([])).toBe(2)
    })
})

describe('isDoneToday', () => {
    it("returns true when today is in history", () => {
        expect(isDoneToday([])).toBe(true)
    })

    it("returns false when today isn't in history", () => {
        expect(isDoneToday([])).toBe(false)
    })
})