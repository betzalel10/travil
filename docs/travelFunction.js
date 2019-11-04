console.log("TRAVEL  AGENCY start");

console.log("filing the dastination");


let destination = [
    {Travel_code: 12, dastination:"tilend", price: 1100},
    {Travel_code: 2, dastination:"barselona", price: 400},
    {Travel_code: 34, dastination:"america", price: 1200},
    {Travel_code: 10, dastination:"astralia", price: 1450},
    {Travel_code: 21, dastination:"greec", price: 200},
    {Travel_code: 18, dastination:"south afrika", price: 1250},   
    {Travel_code: 22, dastination:"hawaii", price: 1500},
]

let tdest = document.querySelector('.flights tbody')
let destTemplate = '<tr><td>#Travel_code</td><td>#dastination</td><td>#PRICE</td></tr>'
let destRowHtml = ''
destination.forEach(destItem =>{
    destRowHtml += destTemplate
    .replace('#Travel_code', destItem.Travel_code)
    .replace('#dastination', destItem.dastination)
    .replace('#PRICE', destItem.price)
})

tdest.innerHTML = destRowHtml;


console.log("filing the dastination complite");

let b = 1;
let orders = [
]
function order(){
    console.log("order starting")


    let aa = destination.find(x =>{
        return x.Travel_code == document.getElementById('input-destinationID').value
    })

    let torder = document.querySelector('.reservation-table tbody')
    let orderTemplate = `<tr> <td>#flight_id</td>
                              <td>#passenger_name</td>
                              <td>#passenger_id</td>
                              <td>#dastination</td>
                              <td>#num_of_pasengers</td>
                              <td>#total_price</td></tr>`
    let orderRowHtml = ''
    
        orderRowHtml += orderTemplate
        .replace('#flight_id', b++)
        .replace('#passenger_name', document.getElementById('input-name').value)
        .replace('#passenger_id', document.getElementById('input-ID').value)
        .replace('#dastination', document.getElementById('input-destinationID').value + " " + aa.dastination)
        .replace('#num_of_pasengers', document.getElementById('input-passengers').value)
        .replace('#total_price', document.getElementById('input-passengers').value * aa.price)
    
    let d={flight_id:b, passenger_name:document.getElementById('input-name').value , passenger_id:document.getElementById('input-ID').value
                , dastination:document.getElementById('input-destinationID').value + " " + aa.dastination, 
                num_of_pasengers:document.getElementById('input-passengers').value, total_price:document.getElementById('input-passengers').value * aa.price}
    orders.push(d)
    console.log(orders);
                
    torder.innerHTML += orderRowHtml;
}

function searchName(){
    let chackname = document.getElementById('input-searchName').value

    let zz = orders.find(yy =>{
        return yy.passenger_name == chackname
    })
    console.log(zz);
    let tsearch = document.querySelector('.search-table tbody')

     
        .replace('#flight_id',zz.flight_id)
        .replace('#passenger_name', zz.passenger_name)
        .replace('#passenger_id', zz.passenger_id)
        .replace('#dastination', zz.dastination)
        .replace('#num_of_pasengers', zz.num_of_pasengers)
        .replace('#total_price', zz.total_price)

        tsearch.innerHTML += searchRowHtml;
}