
export async function request(url: string, options?: RequestInit) {
    const res = await fetch(url, options);
    console.log("🚀 ~ request ~ res:", res)
    if (res.status === 401) {
        window.localStorage.clear();
        window.location.href = '/auth/signin';
    }
    return res;
}