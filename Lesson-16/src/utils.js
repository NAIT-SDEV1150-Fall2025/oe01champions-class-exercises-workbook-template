// Fetch utility function
export async function fetchData(endpoint) {
    const response = await fetch(endpoint);
    if(!response.ok) {
        throw new Error('Network response failed');
    }
    const data = response.json();
    return data;
}

// POST utility function
export async function postData(endpoint, payload){
    const response = await fetch (endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
    if(!response.ok) {
        throw new Error('Network response failed.')
    }
    const data = response.json();
    return data;
}

// TODO: Add DELETE function here
