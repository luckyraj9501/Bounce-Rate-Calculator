bounceRate=()=>{
    let websitVisit = document.getElementById('websitVisit').value;
    let onePageVisit = document.getElementById('onePageVisit').value;
    let BounceRate = onePageVisit / websitVisit;
    document.getElementById('result').innerHTML = BounceRate;
}   