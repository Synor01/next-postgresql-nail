
export async function request(url: string, options?: RequestInit) {
    const res = await fetch(url, options);
    if (res.status === 401) {
        window.localStorage.clear();
        window.location.href = '/auth/signin';
    }
    return res;
}