export const fetchGossips = () => fetch('http://localhost:8000/gossips/')
  .then(response => response.json());
export const createGossip = gossipData => fetch('http://localhost:8000/gossips/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(gossipData),
})
  .then(response => response.json());
export const deleteGossip = id => fetch(`http://localhost:8000/gossips/${id}/`, {
  method: 'DELETE',
})
