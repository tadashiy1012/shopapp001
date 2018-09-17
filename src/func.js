const readToken = () => {
    const headElms = Array.from(document.head.childNodes);
    const tokenElm = headElms.filter((elm) => elm.name === 'csrf-token')[0];
    return tokenElm.content;
};

const get = async (url) => {
    try {
        const resp = await fetch(url);
        const json = await resp.json();
        return json;
    } catch (err) {
        console.log(err);
    }
};

const post = async (url, body) => {
    const option = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': readToken()
        },
        body: JSON.stringify(body)
    };
    try {
        const resp = await fetch(url, option);
        const json = await resp.json();
        return json;
    } catch (err) {
        console.log(err);
    }
};

const put = async (url, body) => {
    const option = {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': readToken()
        },
        body: JSON.stringify(body)
    };
    try {
        const resp = await fetch(url, option);
        const json = await resp.json();
        return json;
    } catch (err) {
        console.log(err);
    }
};

export { get, post, put };