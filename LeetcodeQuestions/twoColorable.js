function twoColorable(edges) {
    return isColorable(edges, edges[0][0],{}, true);
}

let isColorable = (graph, node, colors, color) => {
    if(node in colors) {
        return colors[node] === color;
    }
    colors[node] = color;
    return graph[node].every(neighbour => isColorable(graph, neighbour, colors, !color));
}