import { defineStore } from 'pinia'

export const useTimesheetStore = defineStore('timesheet', {
  state: () => ({
    entries: [],
  }),
  persist: true,
  actions: {
    addEntry(entry) {
      this.entries.push(entry)
    },
    updateEntry(updatedEntry) {
      const index = this.entries.findIndex(entry => entry.id === updatedEntry.id)
      if (index !== -1)
        this.entries[index] = updatedEntry
    },
  },
})
