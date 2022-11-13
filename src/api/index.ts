export async function get(path: string) {
  try {
    const response = await fetch(path);
    const result = await response.json();

    return result;
  } catch (e: unknown) {
    console.log(e);

    return null;
  }
}

export async function post(data: any, path: string) {
  try {
    const response = await fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    });
    const result = await response.json();

    if (!result.success) throw Error(result.message);
  } catch (e: unknown) {
    console.log(e);

    return null;
  }
}

export async function update(data: any, path: string) {
  try {
    const response = await fetch(path, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    });
    const result = await response.json();

    if (!result.success) throw Error(result.message);
  } catch (e: unknown) {
    console.log(e);

    return null;
  }
}

export async function remove(path: string) {
  try {
    const response = await fetch(path);
    const result = await response.json();

    if (!result.success) throw Error(result.message);
  } catch (e: unknown) {
    console.log(e);

    return null;
  }
}
