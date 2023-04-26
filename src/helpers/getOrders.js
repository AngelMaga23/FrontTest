export const getOrders = async() => {

    const url = 'https://eshop-deve.herokuapp.com/api/v2/orders';
    const resp = await fetch( url, {
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ'
        }
    });

    const { orders } = await resp.json();

    const order = orders.map( ord => ({
        id: ord.id,
        number: ord.number,
        billingAddress: ord.billingAddress,
        currency: ord.currency,
        items: ord.items
    }));

    return order;
}