const collect_rating=function()
{
    const ratings=
    {
        count:0,
        sum:0,
        average:0
    };
    let rating =0;
    let elements=document.querySelectorAll(".ratings");
    elements.forEach(element => {
     rating =parseInt(element.id.replace('star',''));
     ratings.count+=parseInt(elements.values);
     ratings.sum+=parseInt(elements.values)*rating;
    });
    if (ratings.count!==0)
     {
       ratings.average=ratings.sum/ratings.count;
    }
    return ratings;
}

document.addEventListener('change',()=>
{
    const ratings=collect_rating();
    document.querySelector('#average').value=ratings.average.toFixed(2);
});