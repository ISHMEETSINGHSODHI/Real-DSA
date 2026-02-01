console.log("Hello, World!");

class find_the_min_dist {

  dijkstras(V, S, adj) {

    const priority_queue = [];
    const distance_node = Array(V).fill(Infinity);

    distance_node[S] = 0;
    priority_queue.push([0, S]);

    while (priority_queue.length > 0) {

      // extract node with minimum distance
      priority_queue.sort((a, b) => a[0] - b[0]);
      const [distance, node] = priority_queue.shift();

      // ignore stale entries
      if (distance > distance_node[node]) continue;

      for (const [adj_node, weight] of adj[node]) {
        if (distance + weight < distance_node[adj_node]) {
          distance_node[adj_node] = distance + weight;
          priority_queue.push([distance_node[adj_node], adj_node]);
        }
      }
    }

    return distance_node;
  }
}

const V = 5;
const S = 0; // source node (original node 1)

// adjacency list (0-based)
const adj = Array.from({ length: V }, () => []);

// edges from  graph (UNDIRECTED)
adj[0].push([1, 1]); adj[1].push([0, 1]);
adj[0].push([2, 3]); adj[2].push([0, 3]);
adj[0].push([3, 4]); adj[3].push([0, 4]);
adj[1].push([3, 6]); adj[3].push([1, 6]);
adj[2].push([3, 2]); adj[3].push([2, 2]);
adj[2].push([4, 4]); adj[4].push([2, 4]);
adj[3].push([4, 3]); adj[4].push([3, 3]);

const obj = new find_the_min_dist();
const res = obj.dijkstras(V, S, adj);

console.log(res.join(" "));
