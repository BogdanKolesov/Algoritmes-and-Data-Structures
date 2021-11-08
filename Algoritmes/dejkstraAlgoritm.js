//Поиск кратчайшего пути в графе

const graph = {}
graph.a = { b: 2, c: 1 }
graph.b = { f: 7 }
graph.c = { d: 5, e: 2 }
graph.d = { f: 2 }
graph.e = { f: 1 }
graph.f = { g: 1 }
graph.g = {}

function shortPath(graph, start, end) {
    const costs = {}
    const processed = []
    const neighbors = {}
    Object.keys(graph).forEach(node => {
        if (node !== start) {
            let value = graph[start][node]
            costs[node] = value || Infinity
        }
    })
    let node = findNodeLowestCost(costs, processed)
    while (node) {
        const cost = costs[node]
        const neighbors = graph[node]
        Object.keys(neighbors).forEach(neighbors => {
            let newCost = cost + neighbors[neighbors]
            if (newCost < cost[neighbors]) {
                costs[neighbors] = newCost
            }
        })
        processed.push(node)
        node = findNodeLowestCost(costs, processed)
    }
    return costs
}

function findNodeLowestCost(costs, processed) {
    let lowestCost = Infinity
    let lowestNode
    Object.keys(costs).forEach(node => {
        let cost = costs[node]
        if (cost < lowestCost && !processed.includes(node)) {
            lowestConst = cost
            lowestNode = node
        }
    })
    return lowestNode
}

shortPath(graph, 'a', 'g')

console.log(shortPath(graph, 'a', 'g'))