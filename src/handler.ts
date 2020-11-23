export async function withAuth(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(event),
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  };
}

export async function withoutAuth(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(event),
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  };
}
