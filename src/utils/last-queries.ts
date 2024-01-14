const LAST_QUERIES_KEY = 'LAST_QUERIES'

class LastQueries {
    public lastQueries: Array<string> = []
    constructor() {
        this.parseLastQueriesFromLocalStorage()
    }

    private parseLastQueriesFromLocalStorage() {
        const lastQueries = localStorage.getItem(LAST_QUERIES_KEY)
        if (!lastQueries) return
        this.lastQueries = JSON.parse(lastQueries) as Array<string>
    }

    get lastQueriesList(): Array<string> {
        return this.lastQueries
    }

    set addLastQuery(value: string) {
        this.lastQueries = [...this.lastQueries, value]
        localStorage.setItem(LAST_QUERIES_KEY, JSON.stringify(this.lastQueries))
    }
}

const lastQueriesService = new LastQueries()

export { lastQueriesService }
