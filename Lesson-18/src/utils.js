// Fetch utility function
export async function fetchData(endpoint) {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

// POST utility function
export async function postData(endpoint, payload) {
  const response = await fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => '');
    throw new Error(`HTTP ${response.status} - ${text || response.statusText}`);
  }

  const data = await response.json();
  return data;
}
